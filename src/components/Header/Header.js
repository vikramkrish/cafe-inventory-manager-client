import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../Button/Button';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <h1>Cafe Inventory Manager</h1>
      <nav>
        <Link to="/login">
          <Button className="header-button">Login</Button>
        </Link>
        <Link to="/signup">
          <Button className="header-button">Sign Up</Button>
        </Link>
      </nav>
    </header>
  );
};

export default Header;
