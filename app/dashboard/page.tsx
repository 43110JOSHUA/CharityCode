"use client";

import PageBorder from "../components/PageBorder";
import LoginCard from "../components/auth/LoginCard";
import { useAuth } from "../../context/auth";
import CreatePost from "../components/dashboard/CreatePost";
import PersonalFeed from "../components/dashboard/PersonalFeed";
import { useState } from "react";

const MAX_POSTS_PER_USER = 3;

export default function Dashboard() {
  const auth = useAuth();
  const [currentPostCount, setCurrentPostCount] = useState(0);

  return (
    <div className="bg-light-tan min-vh-100">
      <PageBorder>
        {!auth?.currentUser && <LoginCard />}
        <div className="container py-5">
          <div className="row pt-2">
            <div className="col-12 col-md-6">
              <CreatePost
                currentPostCount={currentPostCount}
                maxPosts={MAX_POSTS_PER_USER}
              />
              <p className="text-center text-muted small">
                Posts: {currentPostCount}/{MAX_POSTS_PER_USER} • You can delete
                old posts to create new ones.
              </p>
            </div>
            <div className="col-12 col-md-6">
              <PersonalFeed onPostCountChange={setCurrentPostCount} />
            </div>
          </div>
        </div>
      </PageBorder>
    </div>
  );
}
