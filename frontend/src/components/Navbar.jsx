import React from 'react';
import './Navbar.scss';

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <a className="navbar-brand" href="/"><img src='https://i.imgur.com/dnx7URH.png' height='25px' alt='logo' /> Crocodile Tiers</a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarText">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item">
            <a className="nav-link" href="http://localhost:3000/new">New List</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">My Lists</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;