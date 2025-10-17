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

export default function PostFeed({ search_query }: { search_query?: string }) {
  const [posts, setPosts] = useState<
    QueryDocumentSnapshot<DocumentData, DocumentData>[]
  >([]);

  useEffect(() => {
    const q = query(
      collection(firestore, "posts"),
      orderBy("timestamp", "desc")
    );

    const unsubscribe = onSnapshot(q, (snapshot) => {
      const snapshotDocs = snapshot.docs;
      setPosts(snapshotDocs);
    });

    return unsubscribe;
  }, []);

  // Filter posts based on search query
  const filteredPosts = posts.filter((post) => {
    if (!search_query) return true;

    const data = post.data();
    const searchTerm = search_query.toLowerCase();

    return (
      data.title?.toLowerCase().includes(searchTerm) ||
      data.shortDesc?.toLowerCase().includes(searchTerm) ||
      data.fullDesc?.toLowerCase().includes(searchTerm) ||
      data.username?.toLowerCase().includes(searchTerm)
    );
  });

  return (
    <div>
      <div className="text-center border-bottom pt-5 py-2">
        <h3>
          {search_query
            ? `Found ${filteredPosts.length} Project Ideas for "${search_query}"`
            : `Explore ${filteredPosts.length} Project Ideas`}
        </h3>
      </div>
      <div className="container py-3 d-flex flex-column align-items-center justify-content-center">
        {filteredPosts.length === 0 && search_query ? (
          <div className="text-center">
            <p className="text-muted">Try adjusting your search</p>
          </div>
        ) : (
          filteredPosts.map((post) => (
            <ProjectPost key={post.id} data={post.data()} id={post.id} />
          ))
        )}
      </div>
    </div>
  );
}
