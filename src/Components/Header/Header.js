import React from 'react';
import {Link} from 'react-router-dom';
import './Header.css';

const Header = () => {

  return (
    <section className="header">
      <div className="title-container">
        <h1 className="header-title"><Link to="/" style={{textDecoration: 'none'}}>Fantasy Fellowship</Link></h1>
      </div>
      <div className="nav-container">
        <Link to="/fellowship" style={{textDecoration: 'none'}}>Your Fellowship</Link>
      </div>
    </section>
  )
}

export default Header;