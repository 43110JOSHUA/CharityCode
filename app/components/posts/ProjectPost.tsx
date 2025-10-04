import React from "react";
import { DocumentData } from "firebase/firestore";
import { formatDistanceToNow } from "date-fns";

interface ProjectPostProps {
  data: DocumentData;
}

export function ProjectPost({ data }: ProjectPostProps) {
  return (
    <button className="theme-btn card w-100 my-2 bg-tan">
      <div className="card-body">
        <div className="d-flex justify-content-between align-items-top gap-2 mb-2">
          <div className="d-flex flex-wrap gap-2">
            <h5 className="card-title text-start mb-0">{data.title}</h5>
            <span className="text-muted text-start small mt-1">
              {data.username} •{" "}
              {formatDistanceToNow(data.timestamp.toDate(), {
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
          <div className="d-flex align-items-center gap-1 flex-wrap">
            <span className="badge rounded-pill border border-border-tan text-muted fw-normal d-flex align-items-center gap-1 fs-6">
              <i className="bi bi-heart-fill text-danger"></i>
              {data.likes.length}
            </span>
            <span className="badge rounded-pill border border-border-tan text-muted fw-normal d-flex align-items-center gap-1 fs-6">
              <i className="bi bi-upload text-primary"></i>{" "}
              {data.submissions.length} Submissions
            </span>
          </div>
        </div>
      </div>
    </button>
  );
}
