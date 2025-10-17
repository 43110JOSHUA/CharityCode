import PageBorder from "../components/PageBorder";
import PostFeed from "../components/posts/PostFeed";

export default async function Explore({
  searchParams,
}: {
  searchParams?: Promise<{
    search_query?: string;
    page?: string;
  }>;
}) {
  const query = (await searchParams)?.search_query || "";
  return (
    <div className="bg-light-tan min-vh-100">
      <PageBorder>
        <PostFeed search_query={query} />
      </PageBorder>
    </div>
  );
}
