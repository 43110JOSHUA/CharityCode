import PageBorder from "../components/PageBorder";
import ProjectPost from "../components/posts/ProjectPost";

export default function Explore() {
  return (
    <div className="bg-light-tan vh-100">
      <PageBorder>
        <div className="text-center border-bottom pt-5 py-2">
          <h3>Explore 2 Requests</h3>
        </div>
        <div className="container py-3 d-flex flex-column align-items-center justify-content-center">
          <ProjectPost
            title="Example App 1"
            status="Open"
            likes={23}
            submissionCount={5}
            description="A program to help local food banks track inventory and donations in real time with persistent data storage."
            username="CharityCode"
            datePosted="08-14-2025"
          />
          <ProjectPost
            title="Charity Event Scheduler"
            status="Closed"
            likes={15}
            submissionCount={2}
            description="A tool for non-profits to schedule, manage, and promote charity events. Built with Next.js and MongoDB. Project is currently closed for new contributors."
            username="CharityCode"
            datePosted="08-14-2025"
          />
        </div>
      </PageBorder>
    </div>
  );
}
