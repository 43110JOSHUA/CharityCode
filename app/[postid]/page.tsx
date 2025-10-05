import React from "react";
import PageBorder from "../components/PageBorder";
import { getDoc, doc } from "firebase/firestore";
import { firestore } from "../../firebase/client";

const fetchPost = async (id: string) => {
  const postRef = doc(firestore, "posts", id);
  const postSnap = await getDoc(postRef);
  return postSnap.data();
};

interface PageProps {
  params: { postid: string }; // Change to 'postid' to match your folder name
}

export default async function PostPage({ params }: PageProps) {
  const { postid } = params;
  const post = await fetchPost(postid);

  if (!post) {
    return (
      <div className="bg-light-tan min-vh-100">
        <PageBorder>
          <div className="container py-5">
            <div className="text-center">
              <h1>Post not found</h1>
              <p>The post you're looking for doesn't exist.</p>
            </div>
          </div>
        </PageBorder>
      </div>
    );
  }

  return (
    <div className="bg-light-tan min-vh-100">
      <PageBorder>
        <div className="container py-5">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              {/* Back Button */}
              <div className="mb-4">
                <button className="btn btn-outline-secondary">
                  <i className="bi bi-arrow-left me-2"></i>
                  Back to Feed
                </button>
              </div>

              {/* Post Header */}
              <div className="card bg-tan mb-4">
                <div className="card-body">
                  <div className="d-flex justify-content-between align-items-start mb-3">
                    <div className="flex-grow-1">
                      <h1 className="card-title h3 mb-2">{post.title}</h1>
                      <div className="text-muted">
                        <span className="me-3">
                          <i className="bi bi-person-circle me-1"></i>
                          {post.username}
                        </span>
                        <span>
                          <i className="bi bi-clock me-1"></i>
                          {post.timestamp
                            ? new Date(post.timestamp.seconds * 1000).toLocaleDateString()
                            : "Unknown"}
                        </span>
                      </div>
                    </div>
                    <span
                      className={`badge px-3 py-2 fs-6 ${
                        post.open ? "bg-light-green" : "bg-secondary"
                      }`}
                    >
                      {post.open ? "Open" : "Closed"}
                    </span>
                  </div>

                  {/* Stats */}
                  <div className="d-flex align-items-center gap-3 mb-3">
                    <span className="badge rounded-pill border border-border-tan text-muted fw-normal d-flex align-items-center gap-1 fs-6">
                      <i className="bi bi-heart-fill text-danger"></i>
                      {post.likes?.length || 0} Likes
                    </span>
                    <span className="badge rounded-pill border border-border-tan text-muted fw-normal d-flex align-items-center gap-1 fs-6">
                      <i className="bi bi-upload text-primary"></i>
                      {post.submissions?.length || 0} Submissions
                    </span>
                  </div>

                  {/* Short Description */}
                  <p className="lead mb-0">{post.shortDesc}</p>
                </div>
              </div>

              {/* Full Description */}
              <div className="card bg-tan mb-4">
                <div className="card-body">
                  <h4 className="card-title mb-3">Project Details</h4>
                  <p className="card-text" style={{ whiteSpace: "pre-wrap" }}>
                    {post.fullDesc}
                  </p>
                </div>
              </div>

              {/* Submit Solution Form */}
              <div className="card bg-tan mb-4">
                <div className="card-body">
                  <h5 className="card-title mb-3">
                    <i className="bi bi-github me-2"></i>
                    Submit Your Solution
                  </h5>
                  <p className="text-muted mb-3">
                    Share your GitHub repository URL containing your solution to
                    this project.
                  </p>
                  <div className="mb-3">
                    <label className="form-label">GitHub Repository URL</label>
                    <div className="input-group">
                      <span className="input-group-text bg-dark-tan border-border-tan">
                        <i className="bi bi-github"></i>
                      </span>
                      <input
                        type="url"
                        className="form-control bg-dark-tan border-border-tan"
                        placeholder="https://github.com/username/repository"
                      />
                    </div>
                    <div className="form-text">
                      Make sure your repository is public and includes a README
                      with setup instructions.
                    </div>
                  </div>

                  <button className="btn btn-primary w-100">
                    <i className="bi bi-upload me-2"></i>
                    Submit Solution
                  </button>
                </div>
              </div>

              {/* Existing Submissions */}
              <div className="card bg-tan">
                <div className="card-body">
                  <h5 className="card-title mb-3">
                    <i className="bi bi-list-ul me-2"></i>
                    Current Submissions ({post.submissions?.length || 0})
                  </h5>

                  <div className="list-group list-group-flush">
                    <div className="list-group-item bg-dark-tan border-border-tan d-flex justify-content-between align-items-center">
                      <div>
                        <div className="fw-semibold">johndoe/garden-website</div>
                        <small className="text-muted">Submitted 1 day ago</small>
                      </div>
                      <div className="d-flex gap-2">
                        <span className="badge bg-light-green">3 ⭐</span>
                        <a href="#" className="btn btn-sm btn-outline-primary">
                          <i className="bi bi-github me-1"></i>
                          View
                        </a>
                      </div>
                    </div>
                    <div className="list-group-item bg-dark-tan border-border-tan d-flex justify-content-between align-items-center">
                      <div>
                        <div className="fw-semibold">jane-dev/community-garden</div>
                        <small className="text-muted">Submitted 3 hours ago</small>
                      </div>
                      <div className="d-flex gap-2">
                        <a href="#" className="btn btn-sm btn-outline-primary">
                          <i className="bi bi-github me-1"></i>
                          View
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </PageBorder>
    </div>
  );
}
