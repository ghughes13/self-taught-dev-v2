import React from "react";
// import { Link } from "gatsby";

import { slide as Menu } from "react-burger-menu";
// import { useIdentityContext } from "react-netlify-identity-gotrue"

import "./styles.scss";

const BurgerMenu = () => {
  // const identity = useIdentityContext();

  return (
    <Menu right>
      <a id="home" className="menu-item" href="/">
        Home
      </a>
      <a id="archive" className="menu-item" href="/project-archive">
        Project Archive
      </a>
      <a
        href="https://blog.selftaught-dev.com"
        target="_blank"
        className="login-text"
      >
        Blog
      </a>
      {/* TODO: Fix login/out functionality */}
      {/* {identity.user ? (
        <button onClick={identity.logout} className="login-btn">
          Logout
        </button>
      ) : (
        <>
          <Link to="/new-user" className="login-text">
            Create Account
          </Link>
          <Link to="/login" className="login-text">
            Login
          </Link>
        </>
      )} */}
    </Menu>
  );
};

export default BurgerMenu;
