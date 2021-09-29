import * as React from "react"
import { Link } from "gatsby"

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
      <header className="global-header expand">
        <h1 className="main-heading">
          <Link to="/">
            {title} &trade;
          </Link>
        </h1>
        <div className="aside-container">
          <h5>
            <Link to="/">Home</Link>
          </h5>
          <h5>
            <Link to="/">Blog</Link>
          </h5>
          <h5>
            <Link to="/">Shop</Link>
          </h5>
        </div>
      </header>
      <main>{children}</main>
      <footer>
        <div className="global-footer expand">
          <div>
            <h4>My Animals &trade;</h4>
            <p>&copy; TeamGeek</p>
          </div>
          <div>
            <h5>About Us</h5>
            <ul>
              <li>
                <Link to="">
                  Locations
                </Link>
              </li>
              <li>
                <Link to="">
                  What we do
                </Link>
              </li>
              <li>
                <Link to="">
                  How we do it
                </Link>
              </li>
              <li>
                <Link to="">
                  Who we are
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h5>Product</h5>
            <ul>
              <li>
                <Link to="">
                  Prints
                </Link>
              </li>
              <li>
                <Link to="">
                  Lorem ipsum
                </Link>
              </li>
              <li>
                <Link to="">
                  This is dummy text
                </Link>
              </li>
              <li>
                <Link to="">
                  Hello
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h5>Contact Us</h5>
            <ul>
              <li>
                <Link to="">
                  work@teamgeek.io
                </Link>
              </li>
              <li>
                <Link to="">
                  +27 891 2008
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* © {new Date().getFullYear()}, Built with
        {` `}
        <a href="https://www.gatsbyjs.com">Gatsby</a> */}
      </footer>
    </div>
  )
}

export default Layout
