import { useQuery } from "@tanstack/react-query";
import { getPosts } from "./api/apiCalls";

const PostList2 = () => {
  const postQuery = useQuery({
    queryKey: ["posts"],
    queryFn: getPosts,
    // staleTime: 1000,
    // refetchInterval :1000
  });

  if (postQuery.status === "loading") return <h1>Loading...</h1>;
  if (postQuery.status === "error") {
    return <h1>{JSON.stringify(postQuery.error)}</h1>;
  }
  return (
    <>
      <h1>Post List 2</h1>
      <ol>
        {postQuery.data.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ol>
    </>
  );
};

export default PostList2;
