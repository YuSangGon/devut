import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <div className="header">
        <Link to={"/"}>Home</Link>&nbsp;
        <Link to={"/login"}>Login</Link>&nbsp;
        <Link to={"/portfolio"}>Portfolio</Link>
      </div>
    </>
  );
};

export default Header;
