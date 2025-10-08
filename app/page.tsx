import PageBorder from "./components/PageBorder";
import Link from "next/link";

export default function Home() {
  return (
    <div className="bg-light-tan vh-100">
      <PageBorder>
        <div className="container py-5">
          <div className="row">
            <div className="col-12 text-center mb-3 mt-5">
              <span className="badge rounded-pill text-bg-light-orange fs-6 px-3 py-2">
                🎉 Released v0.0.1
              </span>
            </div>
          </div>
          <div className="row">
            <div className="col-12 text-center mb-3">
              <h2 className="display-4 fw-bold mb-3">
                He
              </h2>
              <p className="lead">Helping organizations achieve their goals.</p>
            </div>
          </div>

          <div className="row mb-5">
            <div className="col-12 text-center">
              <div className="d-flex gap-3 justify-content-center flex-wrap">
                <Link href="/explore" className="text-decoration-none">
                  <button className="btn btn-light-green btn-lg px-4">
                    Build a Project
                  </button>
                </Link>
                <Link href="/dashboard" className="text-decoration-none">
                  <button className="btn btn-outline-light-green btn-lg px-4">
                    List a Project
                  </button>
                </Link>
              </div>
            </div>
          </div>

          <div className="row g-4">
            <div className="col-md-6 col-lg-4">
              <div className="card h-100 shadow border-danger border-3">
                <div className="card-body">
                  <h5 className="card-title">For Developers</h5>
                  <p className="card-text">
                    Use your coding skills to help people, organizations, or
                    companies build and improve their digital presence.
                    Contribute to meaningful projects that make a real
                    difference in the world.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-md-6 col-lg-4">
              <div className="card h-100 shadow border-success border-3">
                <div className="card-body">
                  <h5 className="card-title">For Organizations</h5>
                  <p className="card-text">
                    Connect with ambitious developers who can help you create
                    websites, apps, and digital tools to expand your reach and
                    improve your impact in the community.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-md-6 col-lg-4">
              <div className="card h-100 shadow border-warning border-3">
                <div className="card-body">
                  <h5 className="card-title">Our Mission</h5>
                  <p className="card-text">
                    To empower aspiring developers by providing them with
                    real-world project opportunities that build practical
                    skills, create meaningful portfolios, and make a positive
                    impact in their communities.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </PageBorder>
    </div>
  );
}
