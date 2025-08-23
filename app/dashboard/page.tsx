"use client";

import PageBorder from "../components/PageBorder";
import LoginCard from "../components/auth/LoginCard";
import { useAuth } from "../../context/auth";
import CreatePost from "../components/dashboard/CreatePost";
import OldPost from "../components/dashboard/OldPost";

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
              <OldPost />
            </div>
          </div>
        </div>
      </PageBorder>
    </div>
  );
}
