import React from "react";
import { DocumentData } from "firebase/firestore";
import { formatDistanceToNow } from "date-fns";
import Link from "next/link";

interface OldPostProps {
  data: DocumentData;
  id: string;
}

const OldPost: React.FC<OldPostProps> = ({ data, id }) => {
  return (
    <div className="col-12 mb-3">
      <div className="card w-100 bg-tan">
        <div className="card-body">
          <div className="d-flex justify-content-between align-items-top gap-2 mb-2">
            <div className="d-flex flex-wrap gap-2">
              <h5 className="card-title text-start mb-0">{data.title}</h5>
              <span className="text-muted text-start small mt-1">
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
          <div className="d-flex align-items-center gap-2 mt-3">
            <span className="badge rounded-pill border border-border-tan text-muted fw-normal d-flex align-items-center gap-1 fs-6">
              <i className="bi bi-heart-fill text-danger"></i>
              {data.likes?.length || 0}
            </span>
            <span className="badge rounded-pill border border-border-tan text-muted fw-normal d-flex align-items-center gap-1 fs-6">
              <i className="bi bi-upload text-primary"></i>{" "}
              {data.submissions?.length || 0} Submissions
            </span>
            <div className="ms-auto d-flex gap-2">
              <button className="btn btn-sm btn-outline-primary">Edit</button>
              <Link href={`/${id}`} className="text-decoration-none">
                <button className="btn btn-sm btn-outline-secondary">
                  View Submissions
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OldPost;
