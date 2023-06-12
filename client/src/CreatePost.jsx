import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useRef } from "react";
import { createPost } from "./api/apiCalls";
import Post from "./Post";

const CreatePost = ({ setCurrentPage }) => {
  const titleRef = useRef();
  const contentRef = useRef();
  const queryClient = useQueryClient();
  const createPostMutation = useMutation({
    mutationFn: createPost,
    onSuccess: (data) => {
      console.log("New post successfully created");
      queryClient.setQueryData(["posts", data.id], data);
      queryClient.invalidateQueries(["posts"], { exact: true });
      setCurrentPage(<Post id={data.id} />);
    },
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    createPostMutation.mutate({
      title: titleRef.current.value,
      content: contentRef.current.value,
    });
  };
  return (
    <div>
      {createPostMutation.isError && JSON.stringify(createPostMutation.error)}
      <h1>Create Post</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="title">Title</label>
          <input type="text" name="title" id="title" ref={titleRef} />
        </div>
        <div>
          <label htmlFor="content">Content</label>
          <input type="text" name="content" id="content" ref={contentRef} />
        </div>
        <button disabled={createPostMutation.isLoading}>
          {createPostMutation.isLoading ? "Loading..." : "Create"}
        </button>
      </form>
    </div>
  );
};

export default CreatePost;
