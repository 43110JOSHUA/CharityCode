import React from "react";

interface ProjectPostProps {
  title: string;
  status: "Open" | "Closed";
  likes: number;
  description: string;
}

const ProjectPost: React.FC<ProjectPostProps> = ({
  title,
  status,
  likes,
  description,
}) => {
  return (
    <div className="card my-2 shadow">
      <div className="card-body">
        <div className="d-flex justify-content-between align-items-center mb-2">
          <h5 className="card-title mb-0">{title}</h5>
          <span
            className={`badge px-3 py-2 fs-6 ${
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
