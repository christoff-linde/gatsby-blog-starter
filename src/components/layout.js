import * as React from "react"

import PageFooter from "./footer"
import Navbar from "./navbar"

const Layout = ({ location, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`
  const isRootPath = location.pathname === rootPath

  return (
    <div className="global-wrapper" data-is-root-path={isRootPath}>
      <header className="global-header">
        <Navbar />
      </header>
      <main>{children}</main>
      <PageFooter />
    </div>
  )
}

export default Layout;
