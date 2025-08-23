"use client";

import { useAuth } from "../../../context/auth";

export default function AuthButtons() {
  const auth = useAuth();

  return (
    <div>
      {!!auth?.currentUser && (
        <>
          <div>{auth.currentUser.email}</div>
          <div>Logout</div>
        </>
      )}
    </div>
  );
}
