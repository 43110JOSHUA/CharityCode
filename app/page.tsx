import PageBorder from "./components/PageBorder";
import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <div className="bg-light-tan min-vh-100">
      <meta
        name="google-site-verification"
        content="E6hE-ANzbZ9MGFhjFbE1_NmONKR5IDHnCuhHAQJ_Fgg"
      />
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
                Helping developers build meaningful solutions to real-world
                problems.
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

          {/* For Developers - Image on Right */}
          <div className="row px-2 px-lg-5 align-items-center">
            <div className="col-md-8 col-lg-6 order-2 order-md-1">
              <h5 className="fw-bold mb-3 text-center">For Developers</h5>
              <p>
                Use your coding skills to help people, organizations, or
                companies build and improve their digital presence. Contribute
                to meaningful projects that make a real difference in the world.
              </p>
            </div>
            <div className="col-md-4 col-lg-6 text-center order-1 order-md-2">
              <Image
                src="/siteOrange.png"
                alt="For Developers"
                width="300"
                height="300"
                className="img-fluid"
              />
            </div>
          </div>

          {/* For Organizations - Image on Left */}
          <div className="row px-2 px-lg-5 align-items-center">
            <div className="col-md-4 col-lg-6 text-center">
              <Image
                src="/sitePurple.png"
                alt="For Organizations"
                width="300"
                height="300"
                className="img-fluid"
              />
            </div>
            <div className="col-md-8 col-lg-6">
              <h5 className="fw-bold mb-3 text-center">For Organizations</h5>
              <p>
                Connect with ambitious developers who can help you create
                websites, apps, and digital tools to expand your reach and
                improve your impact in the community.
              </p>
            </div>
          </div>

          {/* Our Mission - Image on Right */}
          <div className="row px-2 px-lg-5 align-items-center">
            <div className="col-md-8 col-lg-6 order-2 order-md-1">
              <h5 className="fw-bold mb-3 text-center">Our Mission</h5>
              <p>
                To empower ambitious developers by providing them with
                real-world project opportunities that build practical skills,
                create meaningful portfolios, and make a positive impact in
                their communities.
              </p>
            </div>
            <div className="col-md-4 col-lg-6 text-center order-1 order-md-2">
              <Image
                src="/siteBlue.png"
                alt="Our Mission"
                width="300"
                height="300"
                className="img-fluid"
              />
            </div>
          </div>
        </div>
      </PageBorder>
    </div>
  );
}
