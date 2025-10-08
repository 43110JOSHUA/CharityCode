"use client";

import React, { useState } from "react";
import { DocumentData } from "firebase/firestore";
import { formatDistanceToNow } from "date-fns";
import Link from "next/link";
import { doc, updateDoc, deleteDoc } from "firebase/firestore";
import { firestore } from "../../../firebase/client";

interface OldPostProps {
  data: DocumentData;
  id: string;
}

const OldPost: React.FC<OldPostProps> = ({ data, id }) => {
  const [showDeleteModal, setShowDeleteModal] = useState(false);

  const toggleOpenStatus = async () => {
    const postRef = doc(firestore, "posts", id);
    await updateDoc(postRef, {
      open: !data.open,
    });
  };

  const handleDelete = async () => {
    const postRef = doc(firestore, "posts", id);
    await deleteDoc(postRef);
    setShowDeleteModal(false);
  };

  return (
    <>
      <div className="col-12 mb-3">
        <div className="card w-100 bg-tan">
          <div className="card-body">
            <div className="d-flex justify-content-between align-items-top gap-2 mb-2">
              <div className="d-flex align-items-center gap-2 flex-wrap">
                <h5 className="card-title text-start mb-0">{data.title}</h5>
                <span className="text-muted text-start small">
                  {data.username} •{" "}
                  {data.timestamp &&
                    formatDistanceToNow(data.timestamp.toDate(), {
                      addSuffix: true,
                    }).replace("about ", "")}
                </span>
              </div>
              <span
                className={`badge px-3 py-2 fs-6 mb-auto ${
                  data.open ? "bg-light-green" : "bg-secondary"
                }`}
              >
                {data.open ? "Open" : "Closed"}
              </span>
            </div>
            <p className="card-text text-start mb-2">{data.shortDesc}</p>
            <div className="d-flex align-items-center gap-2 mt-3 flex-wrap">
              <span className="badge rounded-pill border border-border-tan text-muted fw-normal d-flex align-items-center gap-1 fs-6">
                <i className="bi bi-heart-fill text-danger"></i>
                {data.likes?.length || 0}
              </span>
              <span className="badge rounded-pill border border-border-tan text-muted fw-normal d-flex align-items-center gap-1 fs-6">
                <i className="bi bi-upload text-primary"></i>{" "}
                {data.submissions?.length || 0} Submissions
              </span>
              <div className="ms-auto d-flex gap-2 flex-wrap">
                <button
                  className={`btn btn-sm d-flex align-items-center justify-content-center ${
                    data.open
                      ? "btn-outline-warning"
                      : "btn-outline-light-green"
                  }`}
                  onClick={toggleOpenStatus}
                >
                  <i
                    className={`bi ${data.open ? "bi-lock" : "bi-unlock"}`}
                  ></i>
                  <span className="d-none d-sm-inline ms-1">
                    {data.open ? "Close" : "Open"}
                  </span>
                </button>
                <button
                  className="btn btn-sm btn-outline-danger d-flex align-items-center justify-content-center"
                  onClick={() => setShowDeleteModal(true)}
                >
                  <i className="bi bi-trash"></i>
                  <span className="d-none d-sm-inline ms-1">Delete</span>
                </button>
                <Link href={`/${id}`} className="text-decoration-none">
                  <button className="btn btn-sm btn-outline-secondary d-flex align-items-center justify-content-center">
                    <i className="bi bi-eye"></i>
                    <span className="d-none d-sm-inline ms-1">View</span>
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Delete Confirmation Modal */}
      {showDeleteModal && (
        <div
          className="position-fixed top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center"
          style={{ background: "rgba(0,0,0,0.5)", zIndex: 2000 }}
        >
          <div
            className="card bg-light-tan p-4 shadow"
            style={{ minWidth: 320, maxWidth: 400 }}
          >
            <h5 className="mb-3 text-center text-danger">
              <i className="bi bi-exclamation-triangle me-2"></i>
              Delete Post
            </h5>
            <p className="text-center text-muted mb-4">
              Are you sure you want to delete &quot;
              <strong>{data.title}</strong>&quot;? This action cannot be undone.
            </p>
            <div className="d-flex gap-2 justify-content-center">
              <button
                className="btn btn-outline-secondary"
                onClick={() => setShowDeleteModal(false)}
              >
                Cancel
              </button>
              <button className="btn btn-danger" onClick={handleDelete}>
                <i className="bi bi-trash me-1"></i>
                Delete
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default OldPost;
