import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

const POSTS = [
  { id: 1, title: "Post 1" },
  { id: 2, title: "Post 2" },
];

const wait = (duration) => {
  return new Promise((resolve) => setTimeout(resolve, duration));
};
const Basic = () => {
  //Access the client
  const queryClient = useQueryClient();

  //Queries
  const postQuery = useQuery({
    queryKey: ["posts"],
    queryFn: () => wait(1000).then(() => [...POSTS]),
  });

  //Mutations
  const newPostMutation = useMutation({
    mutationFn: async (title) => {
      await wait(1000);
      return POSTS.push({ id: crypto.randomUUID(), title });
    },
    onSuccess: () => {
      //Invalidate and refresh
      queryClient.invalidateQueries(["posts"]);
    },
  });

  if (postQuery.isLoading) return <h1>Loading...</h1>;
  if (postQuery.isError) return <pre>{JSON.stringify(postQuery.error)}</pre>;

  return (
    <div>
      {postQuery.data.map((post) => (
        <div key={post.id}>{post.title}</div>
      ))}
      <button
        disabled={newPostMutation.isLoading}
        onClick={() => newPostMutation.mutate("New Post")}
      >
        Add Post
      </button>
    </div>
  );
};

export default Basic;
