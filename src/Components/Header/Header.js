import React from 'react';
import {Link} from 'react-router-dom';
import './Header.css';

const Header = ({playerCount}) => {

  return (
    <section className="header">
      <div className="title-container">
        <h1 className="header-title"><Link to="/" style={{textDecoration: 'none', color: '#daa520'}}>Fantasy Fellowship</Link></h1>
      </div>
      <div className="nav-container">
        <p className="header-link"><Link to="/fellowship" style={{textDecoration: 'none', color: '#daa520'}}>Your Fellowship</Link></p>
        <p className="counter">{playerCount}</p>
      </div>
    </section>
  )
}

export default Header;