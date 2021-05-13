import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/components/Nav.scss';

export default function nav() {
  return (
    <div className="navbar">
      <h1>Peter Lofland</h1>
      <div className="links">
        <Link to="/projects" className="link">
          Projects
        </Link>
        <Link to="/aboutMe" className="link">
          About Me
        </Link>
        <Link to="/contact" className="link">
          Contact
        </Link>
      </div>
    </div>
  );
}
