"use client";

import React, { useState, useEffect } from "react";
import {
  doc,
  updateDoc,
  arrayUnion,
  arrayRemove,
  onSnapshot,
} from "firebase/firestore";
import { firestore } from "../../../firebase/client";
import { useAuth } from "../../../context/auth";
import LoginCard from "../auth/LoginCard";

interface LikeButtonProps {
  postId: string;
}

export default function LikeButton({ postId }: LikeButtonProps) {
  const [likes, setLikes] = useState<string[]>([]);
  const [showLogin, setShowLogin] = useState(false);
  const auth = useAuth();
  const userId = auth?.currentUser?.uid;
  const isLiked = userId && likes.includes(userId);

  useEffect(() => {
    const postRef = doc(firestore, "posts", postId);

    const unsubscribe = onSnapshot(postRef, (doc) => {
      if (doc.exists()) {
        const data = doc.data();
        setLikes(data.likes || []);
      }
    });

    return unsubscribe;
  }, [postId]);

  async function handleLike() {
    if (!auth?.currentUser) {
      setShowLogin(true);
      return;
    }


    const postRef = doc(firestore, "posts", postId);

    if (isLiked) {
      // Unlike the post
      await updateDoc(postRef, {
        likes: arrayRemove(userId),
      });
    } else {
      // Like the post
      await updateDoc(postRef, {
        likes: arrayUnion(userId),
      });
    }
  
  }

  return (
    <>
      <button
        onClick={handleLike}
        className={`badge rounded-pill border border-border-tan fw-normal d-flex align-items-center gap-1 fs-6 btn p-2 ${
          isLiked ? "text-danger bg-light-danger" : "text-muted bg-transparent"
        }`}
        style={{ cursor: "pointer" }}
      >
        <i
          className={`bi ${isLiked ? "bi-heart-fill" : "bi-heart"} text-danger`}
        ></i>
        {likes.length} Likes
      </button>

      {showLogin && (
        <div onClick={() => setShowLogin(false)}>
          <LoginCard />
        </div>
      )}
    </>
  );
}
