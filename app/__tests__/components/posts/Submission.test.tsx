import React from "react";
import { render, screen } from "@testing-library/react";
import Submission from "@/app/components/posts/Submission";

describe("Submission", () => {
  const defaultProps = {
    githubLink: "https://github.com/owner/repo",
    timestamp: "2 hours ago",
  };

  it("renders the repo name parsed from the GitHub URL", () => {
    render(<Submission {...defaultProps} />);
    expect(screen.getByText("owner/repo")).toBeInTheDocument();
  });

  it("renders the timestamp", () => {
    render(<Submission {...defaultProps} />);
    expect(screen.getByText(/2 hours ago/)).toBeInTheDocument();
  });

  it("'View' link has the correct href", () => {
    render(<Submission {...defaultProps} />);
    const link = screen.getByRole("link", { name: /View/i });
    expect(link).toHaveAttribute("href", "https://github.com/owner/repo");
  });

  it("renders the username when provided", () => {
    render(<Submission {...defaultProps} username="alice" />);
    expect(screen.getByText(/alice/)).toBeInTheDocument();
  });

  it("renders 'anonymous' when no username is provided", () => {
    render(<Submission {...defaultProps} />);
    expect(screen.getByText(/anonymous/)).toBeInTheDocument();
  });
});
