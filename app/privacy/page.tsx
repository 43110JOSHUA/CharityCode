import PageBorder from "../components/PageBorder";

export default function Privacy() {
  return (
    <div className="bg-light-tan min-vh-100">
      <PageBorder>
        <div className="container py-5">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <h2 className="mb-4">Privacy Policy</h2>
              <p className="text-muted mb-4">Last updated: 10/7/2025</p>

              <div className="card bg-tan mb-4">
                <div className="card-body">
                  <h4>1. Information We Collect</h4>
                  <h6>Account Information</h6>
                  <p>
                    We may collect personal information from you, such as your
                    email address, only if you voluntarily provide it to us.
                    This information is collected solely for account creation.
                    Providing your email address is optional, and you can still
                    use our website anonymously.
                  </p>
                  <h6>User-Generated Content</h6>
                  <p>
                    When you submit solutions or upload projects, you are
                    providing us with user-generated content. By uploading your
                    project description or solution, you grant us permission to
                    use this content on our website for displaying project
                    information, solutions, and reviews.
                  </p>
                  <h6>Automatically Collected Information:</h6>
                  <p>
                    We may automatically collect certain information when you
                    visit our website, including your browser type, operating
                    system, IP address, and browsing behavior. This information
                    is used for analytics and improving website performance.
                  </p>
                  <h6>Cookies and Tracking:</h6>
                  <p>
                    We use cookies and similar tracking technologies to enhance
                    your experience. You may adjust your browser settings to
                    refuse cookies, but this may limit certain functionalities.
                  </p>
                </div>
              </div>

              <div className="card bg-tan mb-4">
                <div className="card-body">
                  <h4>2. Use of Information</h4>
                  <p>
                    We do not use your information anywhere else but in the
                    website database for keeping track of your posts and likes.
                    We do not sell, trade, or otherwise transfer your personal
                    information to outside parties, except as required by law or
                    for essential services like website hosting and analytics.
                    Any third parties assisting us are required to keep your
                    information confidential.
                  </p>
                </div>
              </div>

              <div className="card bg-tan mb-4">
                <div className="card-body">
                  <h4>3. Data Security</h4>
                  <p>
                    We implement appropriate security measures to protect your
                    personal information. However, no method of transmission
                    over the Internet is 100% secure. While we strive to protect
                    your data, we cannot guarantee absolute security.
                  </p>
                </div>
              </div>

              <div className="card bg-tan mb-4">
                <div className="card-body">
                  <h4>4. Children&apos;s Privacy</h4>
                  <p>
                    Our website is not directed at individuals under 13, and we
                    do not knowingly collect personal information from children.
                    If you believe a child has provided us with personal data,
                    please contact us at contact@charitycoder.com, and we will
                    take appropriate steps to remove the information.
                  </p>
                </div>
              </div>

              <div className="card bg-tan mb-4">
                <div className="card-body">
                  <h4>5. Legal Compliance</h4>
                  <p>
                    We comply with applicable privacy laws, including the
                    General Data Protection Regulation (GDPR) and the California
                    Consumer Privacy Act (CCPA). If you are a resident of these
                    regions, you may have specific rights regarding your
                    personal data, such as accessing, deleting, or restricting
                    processing. To exercise these rights, please contact us.
                  </p>
                </div>
              </div>

              <div className="card bg-tan mb-4">
                <div className="card-body">
                  <h4>8. Changes to this Privacy Policy</h4>
                  <p>
                    We may update this Privacy Policy periodically. Any
                    significant changes will be posted on this page with an
                    updated revision date. We encourage users to review this
                    policy regularly.
                  </p>
                </div>
              </div>

              <div className="card bg-tan mb-4">
                <div className="card-body">
                  <h4>9. Contact Us</h4>
                  <p>
                    If you have any questions about these Terms, you can contact
                    us at:
                  </p>
                  <p>contact@charitycoder.com</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </PageBorder>
    </div>
  );
}
