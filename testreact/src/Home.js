import { useState } from "react";
import AssignList from "./AssignList";

const Home = () => {
  const [blogs, setBlogs] = useState([
    {
      title: "Nudging",
      body: "lorem ipsum...",
      skill: "Watching",
      id: 1,
    },
    {
      title: "Why you Procrastinate",
      body: "lorem ipsum...",
      skill: "Reading",
      id: 2,
    },
    {
      title: "The Power of Silence",
      body: "lorem ipsum...",
      skill: "Listening",
      id: 3,
    },
  ]);
  return (
    <div className="Home">
      <h3
        style={{
          color: "blue",
          padding: 8,
        }}
      ></h3>
      <AssignList assign={blogs} title="Assignments" />
    </div>
  );
};

export default Home;
