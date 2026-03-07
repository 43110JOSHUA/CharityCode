import React from "react";

jest.mock("@/firebase/client", () => ({
  auth: {
    onAuthStateChanged: jest.fn(),
    signOut: jest.fn(),
  },
}));
jest.mock("firebase/auth", () => ({
  GoogleAuthProvider: jest.fn(),
  signInWithPopup: jest.fn(),
}));

import { render, screen, act } from "@testing-library/react";
import { AuthProvider, useAuth } from "@/context/auth";
import { auth } from "@/firebase/client";

const mockOnAuthStateChanged = auth.onAuthStateChanged as jest.Mock;
const mockSignOut = auth.signOut as jest.Mock;

const TestConsumer = () => {
  const ctx = useAuth();
  return <div>{ctx?.currentUser ? String(ctx.currentUser.email) : "no-user"}</div>;
};

beforeEach(() => {
  jest.clearAllMocks();
  mockOnAuthStateChanged.mockReturnValue(jest.fn());
});

describe("AuthContext", () => {
  it("renders children", () => {
    render(
      <AuthProvider>
        <div>child content</div>
      </AuthProvider>
    );
    expect(screen.getByText("child content")).toBeInTheDocument();
  });

  it("currentUser is null initially", () => {
    render(
      <AuthProvider>
        <TestConsumer />
      </AuthProvider>
    );
    expect(screen.getByText("no-user")).toBeInTheDocument();
  });

  it("currentUser updates when onAuthStateChanged fires", () => {
    let capturedCallback: (user: unknown) => void = () => {};
    mockOnAuthStateChanged.mockImplementation((cb: (user: unknown) => void) => {
      capturedCallback = cb;
      return jest.fn();
    });

    render(
      <AuthProvider>
        <TestConsumer />
      </AuthProvider>
    );

    act(() => {
      capturedCallback({ email: "user@example.com" });
    });

    expect(screen.getByText("user@example.com")).toBeInTheDocument();
  });

  it("logout() calls auth.signOut()", async () => {
    mockSignOut.mockResolvedValue(undefined);

    const TestLogout = () => {
      const ctx = useAuth();
      return <button onClick={() => ctx?.logout()}>Logout</button>;
    };

    render(
      <AuthProvider>
        <TestLogout />
      </AuthProvider>
    );

    await act(async () => {
      screen.getByRole("button", { name: "Logout" }).click();
    });

    expect(mockSignOut).toHaveBeenCalled();
  });
});
