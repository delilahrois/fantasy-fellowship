import React from 'react';
import {Link} from 'react-router-dom';
import './Header.css';

const Header = () => {

  return (
    <section className="header">
      <div className="title-container">
        <h1 className="header-title"><Link to="/" class="link">Fantasy Fellowship</Link></h1>
      </div>
      <div className="nav-container">
        <p className="header-link"><Link to="/" class="link">Players</Link></p>
        <p className="header-link"><Link to="/fellowship" class="link">Your Fellowship</Link></p>
      </div>
    </section>
  )
}

export default Header;