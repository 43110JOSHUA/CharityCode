import React from "react";

interface ProjectPostProps {
  title: string;
  status: "Open" | "Closed";
  likes: number;
  description: string;
  username: string;
  datePosted: string;
}

const ProjectPost: React.FC<ProjectPostProps> = ({
  title,
  status,
  likes,
  description,
  username,
  datePosted,
}) => {
  return (
    <div className="card my-2 bg-light-tan">
      <div className="card-body">
        <div className="d-flex justify-content-between align-items-top gap-2 mb-2">
          <div className="d-flex flex-wrap gap-2">
            <h5 className="card-title mb-0">{title}</h5>
            <span className="text-muted small mt-1">
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
        <p className="card-text mb-2">{description}</p>
        <div className="d-flex align-items-center gap-2">
          <i className="bi bi-heart-fill text-danger"></i>
          <span>{likes}</span>
        </div>
      </div>
    </div>
  );
};

export default ProjectPost;
