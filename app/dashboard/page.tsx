"use client";

import PageBorder from "../components/PageBorder";
import LoginCard from "../components/auth/LoginCard";
import { useAuth } from "../../context/auth";
import CreatePost from "../components/dashboard/CreatePost";
import PersonalFeed from "../components/dashboard/PersonalFeed";

export default function Dashboard() {
  const auth = useAuth();

  return (
    <div className="bg-light-tan min-vh-100">
      <PageBorder>
        {!auth?.currentUser && <LoginCard />}
        <div className="container py-5">
          <div className="row pt-2">
            <div className="col-12 col-md-6">
              <CreatePost />
            </div>
            <div className="col-12 col-md-6">
              <PersonalFeed />
            </div>
          </div>
        </div>
      </PageBorder>
    </div>
  );
}
