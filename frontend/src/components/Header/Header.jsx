import React from "react";
// Own components
import Nav from "../Nav/Nav";
const Header = () => {
  return (
    <header className="header">
      <h4>Welcome to Fullstack Store!</h4>
      <Nav clase="header--nav"/>
    </header>
    );
};

export default Header;
