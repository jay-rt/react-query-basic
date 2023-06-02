import express from "express";

const posts = [
  {
    id: 1,
    authorId: 1,
    title: "Lorem ipsum",
    body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
  {
    id: 2,
    authorId: 2,
    title: "Whatever",
    body: "Whatever happens happens, do I look like I give a shit.",
  },
];

const authors = [
  {
    id: 1,
    name: "Cicero",
  },
  {
    id: 2,
    name: "Jay",
  },
];

const app = express();

app.use(express.json());

app.get("/api/posts", (req, res) => {
  res.status(200).json(posts);
});

app.get("/api/posts/:id", (req, res) => {
  const post = posts.filter((post) => post.id.toString() === req.params.id);
  res.status(200).json(post[0]);
});

app.get("/api/authors/:id", (req, res) => {
  const author = authors.filter(
    (author) => author.id.toString() === req.params.id
  );
  res.status(200).json(author[0]);
});

app.listen(5000, () => {
  console.log("Server started at port 5000");
});
