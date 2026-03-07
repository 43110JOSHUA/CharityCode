import React from "react";

jest.mock("@/firebase/client", () => ({ firestore: {}, auth: {} }));
jest.mock("firebase/firestore", () => ({
  collection: jest.fn(),
  addDoc: jest.fn(),
  serverTimestamp: jest.fn(() => "SERVER_TS"),
}));
jest.mock("@/context/auth", () => ({ useAuth: jest.fn() }));

import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import CreatePost from "@/app/components/dashboard/CreatePost";
import { useAuth } from "@/context/auth";

const mockUseAuth = useAuth as jest.Mock;

beforeEach(() => {
  mockUseAuth.mockReturnValue({
    currentUser: { displayName: "Test User", email: "test@example.com" },
  });
});

describe("CreatePost", () => {
  it("submit button is disabled when all fields are empty", () => {
    render(<CreatePost currentPostCount={0} maxPosts={3} />);
    expect(screen.getByRole("button", { name: /Create Post/i })).toBeDisabled();
  });

  it("submit button is disabled when currentPostCount >= maxPosts", () => {
    render(<CreatePost currentPostCount={3} maxPosts={3} />);
    expect(screen.getByRole("button", { name: /Create Post/i })).toBeDisabled();
  });

  it("shows a warning alert when at the post limit", () => {
    render(<CreatePost currentPostCount={3} maxPosts={3} />);
    expect(screen.getByText(/maximum/i)).toBeInTheDocument();
  });

  it("does not show a warning alert below the post limit", () => {
    render(<CreatePost currentPostCount={1} maxPosts={3} />);
    expect(screen.queryByRole("alert")).toBeNull();
  });

  it("title character counter updates as user types", async () => {
    render(<CreatePost currentPostCount={0} maxPosts={3} />);
    const titleInput = screen.getByPlaceholderText("Project title");
    await userEvent.type(titleInput, "Hello");
    expect(screen.getByText("5/30")).toBeInTheDocument();
  });

  it("shortDesc character counter updates as user types", async () => {
    render(<CreatePost currentPostCount={0} maxPosts={3} />);
    await userEvent.type(
      screen.getByPlaceholderText(/Short description/i),
      "Hi"
    );
    expect(screen.getByText("2/400")).toBeInTheDocument();
  });

  it("fullDesc character counter updates as user types", async () => {
    render(<CreatePost currentPostCount={0} maxPosts={3} />);
    await userEvent.type(
      screen.getByPlaceholderText(/Full description/i),
      "Hey"
    );
    expect(screen.getByText("3/3000")).toBeInTheDocument();
  });

  it("submit button enabled when all fields filled and under limit", async () => {
    render(<CreatePost currentPostCount={0} maxPosts={3} />);
    await userEvent.type(screen.getByPlaceholderText("Project title"), "Title");
    await userEvent.type(
      screen.getByPlaceholderText(/Short description/i),
      "Short desc"
    );
    await userEvent.type(
      screen.getByPlaceholderText(/Full description/i),
      "Full desc"
    );
    expect(
      screen.getByRole("button", { name: /Create Post/i })
    ).not.toBeDisabled();
  });
});
