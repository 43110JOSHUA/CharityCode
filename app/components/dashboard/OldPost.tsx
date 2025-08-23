import React from "react";

interface OldPost {
  id: string;
  title: string;
  status: "Open" | "Closed";
  likes: number;
  description: string;
  username: string;
  datePosted: string;
  submissionCount: number;
}

const samplePosts: OldPost[] = [
  {
    id: "1",
    title: "Food Bank Inventory App",
    status: "Open",
    likes: 23,
    description:
      "A web app to help local food banks track inventory and donations in real time. Built with React and Firebase.",
    username: "jane_doe",
    datePosted: "2025-08-10",
    submissionCount: 5,
  },
  {
    id: "2",
    title: "Charity Events Portal",
    status: "Closed",
    likes: 12,
    description:
      "A portal for organizing and promoting charity events. Includes RSVP and donation tracking.",
    username: "jane_doe",
    datePosted: "2025-07-22",
    submissionCount: 2,
  },
];

const OldPosts: React.FC = () => (
  <div>
    <h5 className="mb-3">Your Previous Posts</h5>
    <div className="row">
      {samplePosts.map((post) => (
        <div className="col-12 mb-3" key={post.id}>
          <div className="card w-100 bg-tan">
            <div className="card-body">
              <div className="d-flex justify-content-between align-items-top gap-2 mb-2">
                <div className="d-flex flex-wrap gap-2">
                  <h5 className="card-title text-start mb-0">{post.title}</h5>
                  <span className="text-muted text-start small mt-1">
                    {post.username} • {post.datePosted}
                  </span>
                </div>
                <span
                  className={`badge px-3 py-2 fs-6 mb-auto ${
                    post.status === "Open" ? "bg-light-green" : "bg-secondary"
                  }`}
                >
                  {post.status}
                </span>
              </div>
              <p className="card-text text-start mb-2">{post.description}</p>
              <div className="d-flex align-items-center gap-2 mt-3">
                <span className="badge rounded-pill border border-border-tan text-muted fw-normal d-flex align-items-center gap-1 fs-6">
                  <i className="bi bi-heart-fill text-danger"></i>
                  {post.likes}
                </span>
                <span className="badge rounded-pill border border-border-tan text-muted fw-normal d-flex align-items-center gap-1 fs-6">
                  <i className="bi bi-upload text-primary"></i>{" "}
                  {post.submissionCount} Submissions
                </span>
                <div className="ms-auto d-flex gap-2">
                  <button className="btn btn-sm btn-outline-primary">
                    Edit
                  </button>
                  <button className="btn btn-sm btn-outline-secondary">
                    View Submissions
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
);

export default OldPosts;
