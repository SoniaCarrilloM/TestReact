import { useState } from "react";

const Home = () => {
  const [blogs, setBlogs] = useState([
    {
      title: "My favourite website",
      body: "lorem ipsum...",
      author: "Mario",
      id: 1,
    },
    { title: "Best ever!", body: "lorem ipsum...", author: "Yoshi", id: 2 },
    {
      title: "Unbeatable",
      body: "lorem ipsum...",
      author: "Pippa",
      id: 3,
    },
  ]);
  return (
    <div className="Home">
      <h3
        style={{
          color: "blue",
        }}
      >
        Reviews
      </h3>

      {blogs.map((blog) => (
        <div className="blog-preview" key={blog.id}>
          <h2>{blog.title}</h2>
          <p>Written by {blog.author}</p>
        </div>
      ))}
    </div>
  );
};

export default Home;
