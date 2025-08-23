"use client";

import PageBorder from "../components/PageBorder";
import LoginCard from "../components/auth/LoginCard";
import { useAuth } from "../../context/auth";

export default function Dashboard() {
  const auth = useAuth();

  return (
    <div className="bg-light-tan vh-100">
      <PageBorder>
        {!auth?.currentUser && <LoginCard />}
        <div>Dashboard Page</div>
      </PageBorder>
    </div>
  );
}
