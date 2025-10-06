"use client";
import React, { useState } from "react";

interface SubmitFormProps {
  postId: string;
  onSubmit?: (githubUrl: string) => void;
}

const SubmitForm = ({ postId, onSubmit }: SubmitFormProps) => {
  const [githubUrl, setGithubUrl] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (onSubmit) {
      onSubmit(githubUrl);
    }
    // For now, just log the submission
    console.log("Submission:", { postId, githubUrl });
  };

  return (
    <div className="card bg-tan mb-4">
      <div className="card-body">
        <h5 className="card-title mb-3">
          <i className="bi bi-github me-2"></i>
          Submit Your Solution
        </h5>
        <p className="text-muted mb-3">
          Share your GitHub repository URL containing your solution to this
          project.
        </p>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="form-label">GitHub Repository URL</label>
            <div className="input-group">
              <span className="input-group-text bg-dark-tan border-border-tan">
                <i className="bi bi-github"></i>
              </span>
              <input
                type="url"
                className="form-control bg-dark-tan border-border-tan"
                placeholder="https://github.com/username/repository"
                value={githubUrl}
                onChange={(e) => setGithubUrl(e.target.value)}
                required
              />
            </div>
            <div className="form-text">
              Make sure your repository is public and includes a README with
              setup instructions.
            </div>
          </div>
          <button type="submit" className="btn btn-primary w-100">
            <i className="bi bi-upload me-2"></i>
            Submit Solution
          </button>
        </form>
      </div>
    </div>
  );
};

export default SubmitForm;
