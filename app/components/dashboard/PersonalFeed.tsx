"use client";

import React, { useEffect, useState } from "react";
import OldPost from "./OldPost";
import {
  query,
  collection,
  orderBy,
  onSnapshot,
  QueryDocumentSnapshot,
  DocumentData,
  where,
} from "firebase/firestore";
import { firestore } from "../../../firebase/client";
import { useAuth } from "../../../context/auth";

export default function PersonalFeed() {
  const [posts, setPosts] = useState<
    QueryDocumentSnapshot<DocumentData, DocumentData>[]
  >([]);
  const [loading, setLoading] = useState(true);
  const auth = useAuth();

  useEffect(() => {
    if (!auth?.currentUser) {
      setPosts([]);
      setLoading(false);
      return;
    }

    const q = query(
      collection(firestore, "posts"),
      where("email", "==", auth.currentUser.email || "")
    );

    const unsubscribe = onSnapshot(q, (snapshot) => {
      // Sort the posts by timestamp on the client side
      const snapshotDocs = snapshot.docs.sort((a, b) => {
        const timestampA = a.data().timestamp?.toDate() || new Date(0);
        const timestampB = b.data().timestamp?.toDate() || new Date(0);
        return timestampB.getTime() - timestampA.getTime();
      });
      setPosts(snapshotDocs);
      setLoading(false);
    });

    return unsubscribe;
  }, [auth?.currentUser]);

  if (loading) {
    return (
      <div>
        <h5 className="mb-3">Your Previous Posts</h5>
        <p className="text-muted">Loading your posts...</p>
      </div>
    );
  }

  if (!auth?.currentUser) {
    return (
      <div>
        <h5 className="mb-3">Your Previous Posts</h5>
        <p className="text-muted">Please sign in to view your posts.</p>
      </div>
    );
  }

  return (
    <div>
      <h5 className="mb-3">Your Previous Posts</h5>
      {posts.length > 0 ? (
        <div className="row">
          {posts.map((post) => (
            <OldPost key={post.id} data={post.data()} id={post.id} />
          ))}
        </div>
      ) : (
        <p className="text-muted">
          No posts yet. Create your first post to get started!
        </p>
      )}
    </div>
  );
}
