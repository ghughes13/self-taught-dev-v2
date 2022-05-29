import React from "react"
import PropTypes from "prop-types"
import Header from "../Header"
import Footer from "../Footer"

import "./styles.scss"

type LayoutProps = {
  children: JSX.Element | JSX.Element[],
  footerClasses?: string,
  className?: string,
}

const Layout = ({ children, footerClasses = '', className }: LayoutProps) => {
  return (
    <div className={className}>
      <Header siteTitle={'Self Taught Dev'}/>
      <div>
        <main>{children}</main>
        <Footer footerClass={footerClasses} />
      </div>
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
