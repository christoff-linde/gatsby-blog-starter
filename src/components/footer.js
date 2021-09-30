import * as React from "react"

import { Link } from "gatsby"

const PageFooter = ({ data }) => {
    return (
        <footer>
            <div className="global-footer expand">
                <div className="tester">
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
            </div>

            {/* © {new Date().getFullYear()}, Built with
        {` `}
        <a href="https://www.gatsbyjs.com">Gatsby</a> */}
        </footer>
    )
}

export default PageFooter;
