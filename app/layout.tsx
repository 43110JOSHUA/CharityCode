import type { Metadata } from "next";
import "../scss/custom.scss";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./globals.css";
import NavBar from "./components/nav/NavBar";
import { AuthProvider } from "../context/auth";
import Footer from "./components/nav/Footer";

export const metadata: Metadata = {
  title: "Charity Coder | Develop solutions to real-world problems",
  description: "Connecting ambitious developers with organizations with real world needs.",
  icons: {
    icon: "/CCiconRound.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-scroll-behavior="smooth">
      <body>
        <AuthProvider>
          <NavBar />
          {children}
        </AuthProvider>
        <Footer />
      </body>
    </html>
  );
}
