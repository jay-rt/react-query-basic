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

export const getAuthor = async (id) => {
  try {
    const res = axios.get(`/api/authors/${id}`);
    return (await res).data;
  } catch (err) {
    console.log(err);
  }
};
