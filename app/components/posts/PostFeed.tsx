"use client";

import React, { useEffect, useState } from "react";
import { ProjectPost } from "./ProjectPost";
import {
  query,
  collection,
  orderBy,
  onSnapshot,
  QueryDocumentSnapshot,
  DocumentData,
} from "firebase/firestore";
import { firestore } from "../../../firebase/client";

export default function PostFeed() {
  const [posts, setPosts] = useState<
    QueryDocumentSnapshot<DocumentData, DocumentData>[]
  >([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const q = query(
      collection(firestore, "posts"),
      orderBy("timestamp", "desc")
    );

    const unsubscribe = onSnapshot(q, (snapshot) => {
      const snapshotDocs = snapshot.docs;
      setPosts(snapshotDocs);
      setLoading(false);
    });

    return unsubscribe;
  }, []);

  return (
    <div>
      <div className="text-center border-bottom pt-5 py-2">
        <h3>
          {loading
            ? "Loading Projects..."
            : `Explore ${posts.length} Project ${
                posts.length === 1 ? "Idea" : "Ideas"
              }`}
        </h3>
      </div>
      <div className="container py-3 d-flex flex-column align-items-center justify-content-center">
        {posts.map((post) => (
          <ProjectPost key={post.id} data={post.data()} id={post.id} />
        ))}
      </div>
    </div>
  );
}
