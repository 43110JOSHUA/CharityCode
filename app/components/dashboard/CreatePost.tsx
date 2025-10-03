"use client";
import React, { useState } from "react";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { firestore } from "../../../firebase/client"; // Change to client
import { useAuth } from "../../../context/auth";

export default function CreatePost() {
  const [title, setTitle] = useState("");
  const [shortDesc, setShortDesc] = useState("");
  const [fullDesc, setFullDesc] = useState("");
  const auth = useAuth();
  const username = auth?.currentUser?.displayName;

  async function sendPost() {
    await addDoc(collection(firestore, "posts"), {
      title: title,
      shortDesc: shortDesc,
      fullDesc: fullDesc,
      username: username,
      timestamp: serverTimestamp(),
      likes: [],
      submissions: [],
      open: true,
    });

    setTitle("");
    setShortDesc("");
    setFullDesc("");  
  }

  return (
    <div className="card mb-4 bg-tan">
      <div className="card-body">
        <h5 className="card-title mb-3">Create New Project Post</h5>
        <div className="mb-3">
          <label className="form-label">Title</label>
          <input
            type="text"
            className="form-control bg-dark-tan border-border-tan"
            maxLength={30}
            value={title}
            onChange={(event) => setTitle(event.target.value)}
            placeholder="Project title"
          />
          <div className="form-text">{title.length}/30</div>
        </div>
        <div className="mb-3">
          <label className="form-label">Short Description</label>
          <textarea
            className="form-control bg-dark-tan border-border-tan"
            maxLength={200}
            rows={2}
            value={shortDesc}
            onChange={(event) => setShortDesc(event.target.value)}
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
            onChange={(event) => setFullDesc(event.target.value)}
            placeholder="Full description (max 1000 chars)"
          />
          <div className="form-text">{fullDesc.length}/1000</div>
        </div>
        <button
          className="btn btn-light-green w-100"
          onClick={sendPost}
          disabled={!title.trim() || !shortDesc.trim() || !fullDesc.trim()}
        >
          Create Post
        </button>
      </div>
    </div>
  );
}
