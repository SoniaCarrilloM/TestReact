import React from "react";
import { Link } from "react-router-dom";

function Navigation() {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/pages/Reading.js">Reading</Link>
        </li>
        <li>
          <Link to="/pages/Writing.js">Writing</Link>
        </li>

        <li>
          <Link to="/pages/Listening.js">Listening</Link>
        </li>

        <li>
          <Link to="/pages/Watching.js">Watching</Link>
        </li>

        <li>
          <Link to="/pages/Speaking.js">Speaking</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;
