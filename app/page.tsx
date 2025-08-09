import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className="bg-light-tan min-vh-100">
      <div className="container py-5">
        <div className="row">
          <div className="col-12 text-center mb-5">
            <h1 className="display-4 fw-bold mb-4">Welcome to Charity Code</h1>
            <p className="lead">
              Helping developers build meaningful projects for real-world
              problems.
            </p>
          </div>
        </div>

        <div className="row g-4">
          <div className="col-md-6 col-lg-4">
            <div className="card h-100 shadow">
              <div className="card-body">
                <h5 className="card-title">For Developers</h5>
                <p className="card-text">
                  Use your coding skills to help charitable organizations build
                  and improve their digital presence. Contribute to meaningful
                  projects that make a real difference in the world.
                </p>
              </div>
            </div>
          </div>

          <div className="col-md-6 col-lg-4">
            <div className="card h-100 shadow">
              <div className="card-body">
                <h5 className="card-title">For Charities</h5>
                <p className="card-text">
                  Connect with skilled volunteer developers who can help you
                  create websites, apps, and digital tools to expand your reach
                  and improve your impact in the community.
                </p>
              </div>
            </div>
          </div>

          <div className="col-md-6 col-lg-4">
            <div className="card h-100 shadow">
              <div className="card-body">
                <h5 className="card-title">Our Mission</h5>
                <p className="card-text">
                  To bridge the gap between technology professionals and
                  charitable organizations, creating powerful partnerships that
                  drive positive social change through innovative solutions.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="row mt-5">
          <div className="col-12 text-center">
            <h2 className="mb-4">Get Started Today</h2>
            <div className="d-flex gap-3 justify-content-center flex-wrap">
              <button className="btn btn-dark btn-lg px-4">
                Join as Developer
              </button>
              <button className="btn btn-dark btn-lg px-4">
                Register Charity
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
