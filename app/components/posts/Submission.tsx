import React from "react";

interface SubmissionProps {
  username?: string;
  githubLink: string;
  timestamp: string;
}

const Submission = ({
  username = "anonymous",
  githubLink,
  timestamp,
}: SubmissionProps) => {
  // Extract repository name from GitHub URL for display
  const getRepoName = (url: string) => {
    try {
      const parts = url.split("/");
      return `${parts[parts.length - 2]}/${parts[parts.length - 1]}`;
    } catch {
      return url;
    }
  };

  return (
    <div className="list-group-item bg-dark-tan border-border-tan d-flex justify-content-between align-items-center">
      <div>
        <div className="fw-semibold">{getRepoName(githubLink)}</div>
        <small className="text-muted">
          {username} • {timestamp}
        </small>
      </div>
      <div className="d-flex gap-2">
        <a
          href={githubLink}
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-sm btn-outline-primary"
        >
          <i className="bi bi-github me-1"></i>
          View
        </a>
      </div>
    </div>
  );
};

export default Submission;
