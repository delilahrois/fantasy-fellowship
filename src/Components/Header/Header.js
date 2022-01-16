import React from 'react';
import {Link} from 'react-router-dom';
import './Header.css';

const Header = () => {

  return (
    <div className="header">
      <div className="title-container">
        <header className="header-title"><Link to="/" style={{textDecoration: 'none'}}>Fantasy Fellowship</Link></header>
      </div>
      <div className="nav-container">
        <Link to="/fellowship" style={{textDecoration: 'none'}}>Your Fellowship</Link>
      </div>
    </div>
  )
}

export default Header;