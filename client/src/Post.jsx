import { useQuery } from "@tanstack/react-query";
import { getAuthor, getPost } from "./api/apiCalls";

const Post = ({ id }) => {
  const postQuery = useQuery({
    queryKey: ["posts", id],
    queryFn: () => getPost(id),
  });

  const authorQuery = useQuery({
    queryKey: ["authors", postQuery?.data?.authorId],
    enabled: postQuery?.data?.authorId != null,
    queryFn: () => getAuthor(postQuery.data.authorId),
  });

  if (postQuery.status === "loading") return <h1>Loading...</h1>;
  if (postQuery.status === "error") {
    return <h1>{JSON.stringify(postQuery.error)}</h1>;
  }

  return (
    <>
      <h1>
        {postQuery.data.title} <br />
        <small>
          {authorQuery.isLoading
            ? "Loading Author..."
            : authorQuery.isError
            ? "Error Loading Author..."
            : authorQuery.data.name}
        </small>
      </h1>
      <p>{postQuery.data.content}</p>
    </>
  );
};

export default Post;
