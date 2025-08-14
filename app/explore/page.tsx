import PageBorder from "../components/PageBorder";
import ProjectPost from "../components/posts/ProjectPost";

export default function Explore() {
  return (
    <div className="bg-light-tan">
      <PageBorder>
        <div className="container py-5">
          <ProjectPost
            title="Food Bank Inventory App"
            status="Open"
            likes={23}
            description="A web app to help local food banks track inventory and donations in real time. Built with React and Firebase. Looking for frontend and backend contributors."
          />
          <ProjectPost
            title="Charity Event Scheduler"
            status="Closed"
            likes={15}
            description="A tool for non-profits to schedule, manage, and promote charity events. Built with Next.js and MongoDB. Project is currently closed for new contributors."
          />
        </div>
      </PageBorder>
    </div>
  );
}
