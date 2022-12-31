import React from 'react';

function Header() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <a href='https://i.imgur.com/dnx7URH.png'><img src='https://i.imgur.com/dnx7URH.png' height='25px' alt='logo' /></a>
      <a className="navbar-brand" href="/">Crocodile Tiers</a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarText">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item">
            <a className="nav-link" href="#">NavLink1</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">NavLink2</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Header;