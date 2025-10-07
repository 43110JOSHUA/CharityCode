import PageBorder from "../components/PageBorder";
import PostFeed from "../components/posts/PostFeed";

export default function Explore() {
  return (
    <div className="bg-light-tan min-vh-100">
      <PageBorder>
        <PostFeed />
      </PageBorder>
    </div>
  );
}
