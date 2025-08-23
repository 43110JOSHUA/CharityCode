import PageBorder from "../components/PageBorder";
import ProjectPost from "../components/posts/ProjectPost";

export default function Explore() {
  return (
    <div className="bg-light-tan vh-100">
      <PageBorder>
        <div className="text-center border-bottom pt-5 py-2">
          <h3>Explore 2 Project Ideas</h3>
        </div>
        <div className="container py-3 d-flex flex-column align-items-center justify-content-center">
          <ProjectPost
            title="Example App 1"
            status="Open"
            likes={23}
            submissionCount={5}
            description="A program to help local food banks track inventory and donations in real time with persistent data storage. Key functions: Adding, editing, and removing items from a database, interface to display data."
            username="CharityCode"
            datePosted="08-14-2025"
          />
          <ProjectPost
            title="Example App 2"
            status="Closed"
            likes={15}
            submissionCount={2}
            description="A calendar/scheduling tool for users to build a weekly schedule. Users should be able to add custom events, set the time and days per week, and set a location for said event. Users should also be able to remove and edit events. Users should be able to save their schedules and login to load it up."
            username="CharityCode"
            datePosted="08-14-2025"
          />
        </div>
      </PageBorder>
    </div>
  );
}
