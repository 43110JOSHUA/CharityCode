import React from "react";

jest.mock("@/context/auth", () => ({ useAuth: jest.fn() }));
jest.mock("next/link", () => ({
  __esModule: true,
  default: ({ children }: { children: React.ReactNode }) => <>{children}</>,
}));

import { render, screen } from "@testing-library/react";
import SideNav from "@/app/components/nav/SideNav";
import { useAuth } from "@/context/auth";

const mockUseAuth = useAuth as jest.Mock;

describe("SideNav", () => {
  it("renders a truncated email for long emails", () => {
    const longEmail = "averylongemailaddressthatexceedslimit@example.com";
    mockUseAuth.mockReturnValue({
      currentUser: { email: longEmail },
      logout: jest.fn(),
    });
    render(<SideNav isOpen={true} onClose={jest.fn()} />);
    expect(
      screen.getByText(longEmail.substring(0, 30) + "...")
    ).toBeInTheDocument();
  });

  it("renders the full email for short emails", () => {
    const shortEmail = "short@example.com";
    mockUseAuth.mockReturnValue({
      currentUser: { email: shortEmail },
      logout: jest.fn(),
    });
    render(<SideNav isOpen={true} onClose={jest.fn()} />);
    expect(screen.getByText(shortEmail)).toBeInTheDocument();
  });

  it("does not render any email when currentUser is null", () => {
    mockUseAuth.mockReturnValue({ currentUser: null, logout: jest.fn() });
    render(<SideNav isOpen={true} onClose={jest.fn()} />);
    expect(screen.queryByText(/@/)).toBeNull();
  });
});
