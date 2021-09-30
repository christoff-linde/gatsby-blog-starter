import * as React from "react"

import { Link } from "gatsby"

import PageFooter from "./footer"
import Navbar from "./navbar"

const Layout = ({ location, title, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`
  const isRootPath = location.pathname === rootPath
  let header

  if (isRootPath) {
    header = (
      <div>
        <h1 className="main-heading">
          <Link to="/">{title} &trade;</Link>
        </h1>
      </div>
    )
  } else {
    header = (
      <Link className="header-link-home" to="/">
        {title} &trade;
      </Link>
    )
  }

  return (
    <div className="global-wrapper" data-is-root-path={isRootPath}>
      {/* <header className="global-header expand">{header}</header> */}
      <header className="global-header">
        <Navbar />
      </header>
      <main>{children}</main>
      <PageFooter />
    </div>
  )
}

export default Layout;
