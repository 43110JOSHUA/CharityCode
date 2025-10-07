"use client";

import React, { useState } from "react";
import { doc, updateDoc, arrayUnion, serverTimestamp } from "firebase/firestore";
import { firestore } from "../../../firebase/client";
import { useAuth } from "../../../context/auth";

interface SubmitFormProps {
  postId: string;
}

export default function SubmitForm({ postId }: SubmitFormProps) {
  const [githubUrl, setGithubUrl] = useState("");
  const auth = useAuth();
  const username = auth?.currentUser?.displayName;

  async function sendSubmission() {
    const postRef = doc(firestore, "posts", postId);
    await updateDoc(postRef, {
      submissions: arrayUnion({
        username: username || "Anonymous",
        githubLink: githubUrl,
        timestamp: new Date(),
      }),
    });
    setGithubUrl("");
  }

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
        <form onSubmit={sendSubmission}>
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
