import PageBorder from "../components/PageBorder";
import ProjectPost from "../components/posts/ProjectPost";

export default function Explore() {
  return (
    <div className="bg-light-tan">
      <PageBorder>
        <div className="text-center border-bottom pt-5 py-2">
          <h3>Explore Projects</h3>
        </div>
        <div className="container py-3">
          <ProjectPost
            title="Food Bank Inventory App"
            status="Open"
            likes={23}
            description="A web app to help local food banks track inventory and donations in real time. Built with React and Firebase. Looking for frontend and backend contributors."
            username="jane_doe"
            datePosted="2025-08-10"
          />
          <ProjectPost
            title="Charity Event Scheduler"
            status="Closed"
            likes={15}
            description="A tool for non-profits to schedule, manage, and promote charity events. Built with Next.js and MongoDB. Project is currently closed for new contributors."
            username="john_smith"
            datePosted="2025-08-05"
          />
        </div>
      </PageBorder>
    </div>
  );
}
