import { Link } from "gatsby";
import React, { useEffect } from "react";
// import { useIdentityContext } from "react-netlify-identity-gotrue";
import BurgerMenu from "../HamburgerMenu";

import "./styles.scss";

type HeaderProps = {
  siteTitle: string
}

const Header = ({ siteTitle }: HeaderProps) => {
  useEffect(() => {}, []);

  // const identity = useIdentityContext()

  return (
    <header>
      <link
        href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500&display=swap"
        rel="stylesheet"
      ></link>
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
      />
      <div className="nav">
        <Link to="/">
          <img
            className="logo"
            src={require("../../svgs/selftaughtdev-logo-mini.svg").default}
            alt="logo"
          />
        </Link>
        <div className="nav-links">
          <Link id="archive" className="login-text" to="/project-archive">
            Project Archive
          </Link>
          <a
            href="https://blog.selftaught-dev.com"
            target="_blank"
            className="login-text"
          >
            Blog
          </a>
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
        </div>
      </div>
      <BurgerMenu />
    </header>
  );
};

export default Header;
