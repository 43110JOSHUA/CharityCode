import React from "react";

interface ProjectPostProps {
  title: string;
  status: "Open" | "Closed";
  likes: number;
  description: string;
  username: string;
  datePosted: string;
  submissionCount: number;
}

const ProjectPost: React.FC<ProjectPostProps> = ({
  title,
  status,
  likes,
  description,
  username,
  datePosted,
  submissionCount,
}) => {
  return (
    <button className="theme-btn card w-100 my-2 bg-tan">
      <div className="card-body">
        <div className="d-flex justify-content-between align-items-top gap-2 mb-2">
          <div className="d-flex flex-wrap gap-2">
            <h5 className="card-title text-start mb-0">{title}</h5>
            <span className="text-muted text-start small mt-1">
              {username} • {datePosted}
            </span>
          </div>
          <span
            className={`badge px-3 py-2 fs-6 mb-auto ${
              status === "Open" ? "bg-success" : "bg-secondary"
            }`}
          >
            {status}
          </span>
        </div>
        <p className="card-text text-start mb-2">{description}</p>
        <div className="d-flex align-items-center gap-2 mt-3">
          <div className="d-flex align-items-center gap-1 flex-wrap">
            <span className="badge rounded-pill border border-border-tan text-muted fw-normal d-flex align-items-center gap-1 fs-6">
              <i className="bi bi-heart-fill text-danger"></i>
              {likes}
            </span>
            <span className="badge rounded-pill border border-border-tan text-muted fw-normal d-flex align-items-center gap-1 fs-6">
              <i className="bi bi-upload text-primary"></i> {submissionCount}{" "}
              Submissions
            </span>
          </div>
        </div>
      </div>
    </button>
  );
};

export default ProjectPost;
