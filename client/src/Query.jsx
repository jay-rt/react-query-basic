import { useState } from "react";
import PostList1 from "./PostList1";
import PostList2 from "./PostList2";
import Post from "./Post";

const Query = () => {
  const [currentPage, setCurrentPage] = useState(<PostList1 />);
  return (
    <>
      <button onClick={() => setCurrentPage(<PostList1 />)}>Post List 1</button>
      <button onClick={() => setCurrentPage(<PostList2 />)}>Post List 2</button>
      <button onClick={() => setCurrentPage(<Post id="2" />)}>
        Second Post
      </button>
      <br />
      {currentPage}
    </>
  );
};

export default Query;
