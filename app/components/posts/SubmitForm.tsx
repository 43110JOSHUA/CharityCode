"use client";

import React, { useState, useEffect } from "react";
import { doc, updateDoc, arrayUnion, onSnapshot } from "firebase/firestore";
import { firestore } from "../../../firebase/client";
import { useAuth } from "../../../context/auth";

interface SubmitFormProps {
  postId: string;
}

export default function SubmitForm({ postId }: SubmitFormProps) {
  const [githubUrl, setGithubUrl] = useState("");
  const [isOpen, setIsOpen] = useState(true);
  const [loading, setLoading] = useState(true);
  const auth = useAuth();
  const username = auth?.currentUser?.displayName;

  useEffect(() => {
    const postRef = doc(firestore, "posts", postId);

    const unsubscribe = onSnapshot(postRef, (doc) => {
      if (doc.exists()) {
        const data = doc.data();
        setIsOpen(data.open || false);
      }
      setLoading(false);
    });

    return unsubscribe;
  }, [postId]);

  async function sendSubmission(e: React.FormEvent) {
    e.preventDefault();

    if (!isOpen) {
      alert("This project is closed for submissions");
      return;
    }

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

  if (loading) {
    return (
      <div className="card bg-tan mb-4">
        <div className="card-body">
          <p className="text-muted">Loading...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="card bg-tan mb-4">
      <div className="card-body">
        <h5 className="card-title mb-3">
          <i className="bi bi-github me-2"></i>
          Submit Your Solution
        </h5>

        {!isOpen && (
          <div className="alert alert-warning mb-3">
            <i className="bi bi-lock me-2"></i>
            This project is closed for new submissions.
          </div>
        )}

        <p className="text-muted mb-3">
          Share your GitHub repository URL containing your solution to this
          project.
        </p>

        <form onSubmit={sendSubmission}>
          <div className="mb-3">
            <label className="form-label">GitHub Repository URL</label>
            <div className="input-group">
              <span
                className={`input-group-text border-border-tan ${
                  isOpen ? "bg-dark-tan" : "bg-secondary"
                }`}
              >
                <i className="bi bi-github"></i>
              </span>
              <input
                type="url"
                className={`form-control border-border-tan ${
                  isOpen ? "bg-dark-tan" : "bg-secondary"
                }`}
                placeholder={
                  isOpen
                    ? "https://github.com/username/repository"
                    : "Submissions are closed"
                }
                value={githubUrl}
                onChange={(e) => setGithubUrl(e.target.value)}
                required
                disabled={!isOpen}
              />
            </div>
            <div className="form-text">
              {isOpen
                ? "Make sure your repository is public and includes a README with setup instructions."
                : "This project is no longer accepting submissions."}
            </div>
          </div>
          <button
            type="submit"
            className="btn btn-primary w-100"
            disabled={!isOpen}
          >
            <i className={`bi ${isOpen ? "bi-upload" : "bi-lock"} me-2`}></i>
            {isOpen ? "Submit Solution" : "Submissions Closed"}
          </button>
        </form>
      </div>
    </div>
  );
}
