import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-dark-tan border-top border-border-tan mt-auto">
      <div className="container py-3">
        <div className="d-flex justify-content-center align-items-center flex-wrap gap-3">
          <span className="text-muted small">
            © 2024 Charity Code
          </span>
          <div className="d-flex gap-3">
            <Link
              href="/terms"
              className="text-muted text-decoration-none small"
            >
              Terms & Conditions
            </Link>
            <Link
              href="/privacy"
              className="text-muted text-decoration-none small"
            >
              Privacy Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
