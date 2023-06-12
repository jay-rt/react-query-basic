import axios from "axios";

export const getPosts = async () => {
  try {
    const res = await axios.get("/api/posts");
    return res.data;
  } catch (err) {
    console.log(err);
  }
};

export const getPost = async (id) => {
  try {
    const res = await axios.get(`/api/posts/${id}`);
    return res.data;
  } catch (err) {
    console.log(err);
  }
};

export const createPost = async ({ title, content }) => {
  try {
    const res = await axios.post(`/api/posts`, {
      id: Date.now(),
      authorId: 2,
      title,
      content,
    });
    return res.data;
  } catch (err) {
    console.log(err);
  }
};

export const getAuthor = async (id) => {
  try {
    const res = await axios.get(`/api/authors/${id}`);
    return res.data;
  } catch (err) {
    console.log(err);
  }
};
