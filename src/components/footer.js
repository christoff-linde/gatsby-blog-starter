import * as React from "react"

import { Link } from "gatsby"

const PageFooter = () => {
    return (
        <footer>
            <div className="global-footer expand">
                <div className="help">
                    <div>
                        <h4>My Animals &trade;</h4>
                        <p className="copyright-text">&copy; 2021 TeamGeek</p>
                    </div>
                    <div>
                        <h5>About Us</h5>
                        <ul className="footer-list">
                            <li className="">
                                <Link to="/">
                                    Locations
                                </Link>
                            </li>
                            <li>
                                <Link to="/">
                                    What we do
                                </Link>
                            </li>
                            <li>
                                <Link to="/">
                                    How we do it
                                </Link>
                            </li>
                            <li>
                                <Link to="/">
                                    Who we are
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h5>Product</h5>
                        <ul className="footer-list">
                            <li>
                                <Link to="/">
                                    Prints
                                </Link>
                            </li>
                            <li>
                                <Link to="/">
                                    Lorem ipsum
                                </Link>
                            </li>
                            <li>
                                <Link to="/">
                                    This is dummy text
                                </Link>
                            </li>
                            <li>
                                <Link to="/">
                                    Hello
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h5>Contact Us</h5>
                        <ul className="footer-list">
                            <li>
                                <div itemscope itemtype="http://schema.org/LocalBusiness">
                                    <span itemprop="email">
                                        <a href="mailto:work@teamgeek.io">
                                            work@teamgeek.io
                                        </a>
                                    </span>
                                </div>
                            </li>
                            <li>
                                <div itemscope itemtype="http://schema.org/LocalBusiness">
                                    <span itemprop="telephone">
                                        <a href="tel:+278912008">
                                            +278912008
                                        </a>
                                    </span>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* © {new Date().getFullYear()}, Built with
        {` `}
        <a href="https://www.gatsbyjs.com">Gatsby</a> */}
        </footer>
    )
}

export default PageFooter;
