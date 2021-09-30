import * as React from 'react'

import { Link } from 'gatsby'

const PageHeader = ({ data }) => {
    return (
        <header className="global-header">
            <nav>
                <ul>
                    <li>
                        <h1 className="main-heading">
                            <Link to="/">
                                {data} &trade;
                            </Link>
                        </h1>
                    </li>
                    <li>
                        <ul className="aside-container">
                            <h5>
                                <Link to="/">Home</Link>
                            </h5>
                            <h5>
                                <Link to="/">Blog</Link>
                            </h5>
                            <h5>
                                <Link to="/">Shop</Link>
                            </h5>
                        </ul>
                    </li>
                </ul>
            </nav>
            <div className="expand">
                <div className="tester">
                    <h3>BLOG</h3>
                </div>
            </div>
        </header>
    )
}

export default PageHeader
