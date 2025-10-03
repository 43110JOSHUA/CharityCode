import PageBorder from "../components/PageBorder";
import PostFeed from "../components/posts/PostFeed";

export default function Explore() {
  return (
    <div className="bg-light-tan min-vh-100">
      <PageBorder>
        <div className="text-center border-bottom pt-5 py-2">
          <h3>Explore 2 Project Ideas</h3>
        </div>
        <PostFeed />
      </PageBorder>
    </div>
  );
}
