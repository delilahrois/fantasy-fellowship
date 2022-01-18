import React from 'react';
import {Link} from 'react-router-dom';
import './Header.css';

const Header = () => {

  return (
    <section className="header">
      <div className="title-container">
        <h1 className="header-title"><Link to="/" style={{textDecoration: 'none', color: 'white'}}>Fantasy Fellowship</Link></h1>
      </div>
      <div className="nav-container">
        <p className="header-link"><Link to="/fellowship" style={{textDecoration: 'none', color: 'black'}}>Your Fellowship</Link></p>
      </div>
    </section>
  )
}

export default Header;