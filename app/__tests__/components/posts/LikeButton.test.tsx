import React from "react";

jest.mock("@/firebase/client", () => ({ firestore: {}, auth: {} }));
jest.mock("firebase/firestore", () => ({
  doc: jest.fn(() => "mock-doc-ref"),
  onSnapshot: jest.fn(),
  updateDoc: jest.fn(),
  arrayUnion: jest.fn((v) => ({ _type: "union", v })),
  arrayRemove: jest.fn((v) => ({ _type: "remove", v })),
}));
jest.mock("@/context/auth", () => ({ useAuth: jest.fn() }));
jest.mock("@/app/components/auth/LoginCard", () => ({
  __esModule: true,
  default: () => <div data-testid="login-card">Login Required</div>,
}));

import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import LikeButton from "@/app/components/posts/LikeButton";
import { useAuth } from "@/context/auth";
import { onSnapshot, updateDoc } from "firebase/firestore";

const mockUseAuth = useAuth as jest.Mock;

function mockSnapshot(likes: string[]) {
  (onSnapshot as jest.Mock).mockImplementation((_ref, cb) => {
    cb({ exists: () => true, data: () => ({ likes }) });
    return jest.fn();
  });
}

beforeEach(() => {
  jest.clearAllMocks();
});

describe("LikeButton", () => {
  it("renders the correct like count from the snapshot", () => {
    mockSnapshot(["user1", "user2"]);
    mockUseAuth.mockReturnValue({ currentUser: null });
    render(<LikeButton postId="post1" />);
    expect(screen.getByText(/2 Likes/)).toBeInTheDocument();
  });

  it("shows LoginCard when an unauthenticated user clicks the button", async () => {
    mockSnapshot([]);
    mockUseAuth.mockReturnValue({ currentUser: null });
    render(<LikeButton postId="post1" />);
    await userEvent.click(screen.getByRole("button"));
    expect(screen.getByTestId("login-card")).toBeInTheDocument();
  });

  it("calls updateDoc with arrayUnion when an authenticated user likes a post", async () => {
    const uid = "user1";
    mockSnapshot([]);
    mockUseAuth.mockReturnValue({ currentUser: { uid } });
    render(<LikeButton postId="post1" />);
    await userEvent.click(screen.getByRole("button"));
    expect(updateDoc).toHaveBeenCalledWith("mock-doc-ref", {
      likes: { _type: "union", v: uid },
    });
  });

  it("calls updateDoc with arrayRemove when an authenticated user unlikes a post", async () => {
    const uid = "user1";
    mockSnapshot([uid]);
    mockUseAuth.mockReturnValue({ currentUser: { uid } });
    render(<LikeButton postId="post1" />);
    await userEvent.click(screen.getByRole("button"));
    expect(updateDoc).toHaveBeenCalledWith("mock-doc-ref", {
      likes: { _type: "remove", v: uid },
    });
  });
});
