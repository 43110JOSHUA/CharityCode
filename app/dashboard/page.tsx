import PageBorder from "../components/PageBorder";
import LoginCard from "../components/dashboard/LoginCard";

export default function Dashboard() {
  return (
    <div className="bg-light-tan vh-100">
      <PageBorder>
        <LoginCard />
        <div>Dashboard Page</div>
      </PageBorder>
    </div>
  );
}
