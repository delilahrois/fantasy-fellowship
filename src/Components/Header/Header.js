import React from 'react';
import {Link} from 'react-router-dom';
import './Header.css';

const Header = () => {

  return (
    <div className="header">
      <header className="header-title"><Link to="/" style={{textDecoration: 'none'}}>Fantasy Fellowship</Link></header>
    </div>
  )
}

export default Header;