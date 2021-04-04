import React from 'react';
import { Link } from 'react-router-dom';

const SidebarComponent = () => {
  return (
    <div className="sidebar-component">
      <Link to="/">Home </Link>
      <Link to="/2about">About Us </Link>
      <Link to="/shop">Shop Now </Link>
      <Link to="/signin">Sign In </Link>
    </div>
  );
}

export default SidebarComponent;
