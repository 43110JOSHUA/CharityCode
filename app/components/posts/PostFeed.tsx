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

  useEffect(() => {
    const q = query(
      collection(firestore, "posts"),
      orderBy("timestamp", "desc")
    );

    const unsubscribe = onSnapshot(q, (snapshot) => {
      const snapshotDocs = snapshot.docs

      setPosts(snapshotDocs)
    });

    return unsubscribe;
  }, []);

  return (
    <div className="container py-3 d-flex flex-column align-items-center justify-content-center">
      {posts.map((post) => (
        <ProjectPost key={post.id} data={post.data()} id={post.id} />
      ))}
    </div>
  );
}
