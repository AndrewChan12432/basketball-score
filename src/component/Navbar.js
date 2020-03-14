import React from "react";
import {Link} from 'react-router-dom'

function Navbar() {
  return (
    <div className="Navbar">
      <a href="https://www.onlinebah.com/" class="link">
        JosDrew
      </a>
      <ul>
        <Link to="/">
          <li>Home</li>
        </Link>
        <Link to="/scoreboard">
          <li>ScoreBoard</li>
        </Link>
        <Link to="/result">
          <li>Result</li>
        </Link>
      </ul>
    </div>
  );
}

export default Navbar;
