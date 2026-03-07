import React from "react";

jest.mock("@/firebase/client", () => ({ firestore: {}, auth: {} }));
jest.mock("firebase/firestore", () => ({
  doc: jest.fn(() => "mock-doc-ref"),
  onSnapshot: jest.fn(),
  updateDoc: jest.fn(),
  arrayUnion: jest.fn((v) => ({ _type: "union", v })),
}));
jest.mock("@/context/auth", () => ({ useAuth: jest.fn() }));

import { render, screen } from "@testing-library/react";
import SubmitForm from "@/app/components/posts/SubmitForm";
import { useAuth } from "@/context/auth";
import { onSnapshot } from "firebase/firestore";

const mockUseAuth = useAuth as jest.Mock;

function mockSnapshot(data: object) {
  (onSnapshot as jest.Mock).mockImplementation((_ref, cb) => {
    cb({ exists: () => true, data: () => data });
    return jest.fn();
  });
}

beforeEach(() => {
  jest.clearAllMocks();
  mockUseAuth.mockReturnValue({
    currentUser: { displayName: "Test User", email: "test@example.com" },
  });
});

describe("SubmitForm", () => {
  it("disables input and button when post open === false", () => {
    mockSnapshot({ open: false });
    render(<SubmitForm postId="post1" />);
    expect(screen.getByRole("textbox")).toBeDisabled();
    expect(
      screen.getByRole("button", { name: /Submissions Closed/i })
    ).toBeDisabled();
  });

  it("enables input and button when post open === true", () => {
    mockSnapshot({ open: true });
    render(<SubmitForm postId="post1" />);
    expect(screen.getByRole("textbox")).not.toBeDisabled();
    expect(
      screen.getByRole("button", { name: /Submit Solution/i })
    ).not.toBeDisabled();
  });

  it("renders the form when the user is authenticated", () => {
    mockSnapshot({ open: true });
    render(<SubmitForm postId="post1" />);
    expect(screen.getByRole("textbox")).toBeInTheDocument();
  });
});
