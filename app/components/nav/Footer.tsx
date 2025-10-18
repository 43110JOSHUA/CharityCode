import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-dark-tan border-top border-border-tan mt-auto">
      <div className="container py-3">
        <div className="d-flex justify-content-center align-items-center flex-wrap gap-3">
          <div>
            <Link href="https://github.com/43110JOSHUA/CharityCode" target="_blank">
              <button className="btn btn-dark-tan border-border-tan btn-icon)">
                <i className="bi bi-github text-body-secondary pe-1"></i>
                <span className="text-muted small">Charity Coder</span>
              </button>
            </Link>
          </div>
          <div>
            <Link
              href="/terms"
              className="text-muted text-decoration-none small"
            >
              Terms & Conditions
            </Link>
          </div>
          <div>
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
