import React from 'react';
import {Link} from 'react-router-dom';
import './ErrorPage.css';

const ErrorPage = () => {

  return(
    <div className="error-msg">
      <h2>Sorry!</h2>
      <p>This page does not exist.</p>
      <Link to="/" className="link">Let's head on home.</Link>
    </div>
  )
}

export default ErrorPage;