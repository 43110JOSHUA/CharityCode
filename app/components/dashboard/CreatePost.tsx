"use client";
import React, { useState } from "react";

const CreatePost: React.FC = () => {
  const [title, setTitle] = useState("");
  const [shortDesc, setShortDesc] = useState("");
  const [fullDesc, setFullDesc] = useState("");

  return (
    <div className="card mb-4 bg-tan">
      <div className="card-body">
        <h5 className="card-title mb-3">Create New Project Post</h5>
        <div className="mb-3">
          <label className="form-label">Title</label>
          <input
            type="text"
            className="form-control bg-dark-tan border-border-tan"
            maxLength={20}
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Project title"
          />
          <div className="form-text">{title.length}/20</div>
        </div>
        <div className="mb-3">
          <label className="form-label">Short Description</label>
          <textarea
            className="form-control bg-dark-tan border-border-tan"
            maxLength={200}
            rows={2}
            value={shortDesc}
            onChange={(e) => setShortDesc(e.target.value)}
            placeholder="Short description (max 200 chars)"
          />
          <div className="form-text">{shortDesc.length}/200</div>
        </div>
        <div className="mb-3">
          <label className="form-label">Full Description</label>
          <textarea
            className="form-control bg-dark-tan border-border-tan"
            maxLength={1000}
            rows={5}
            value={fullDesc}
            onChange={(e) => setFullDesc(e.target.value)}
            placeholder="Full description (max 1000 chars)"
          />
          <div className="form-text">{fullDesc.length}/1000</div>
        </div>
        <button className="btn btn-light-green w-100" disabled>
          Create Post
        </button>
      </div>
    </div>
  );
};

export default CreatePost;
