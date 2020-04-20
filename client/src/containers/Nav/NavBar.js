import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';

export const NavBar = () => {
  return (
    <div className="navbar">
      <div className="logo">
        <span>
          <Link to="/stories">StoryBuilder</Link>
        </span>
      </div>
      <ul className="nav">
        <li>Register</li>
      </ul>
    </div>
  );
};

export default NavBar;