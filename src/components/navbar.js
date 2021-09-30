import * as React from 'react'

import { Link } from 'gatsby';

const Navbar = () => {
    return (
        <nav >
            <h1 className="main-heading">
                <Link to="/">
                    My Animals &trade;
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
        </nav>
    )
}

export default Navbar;
