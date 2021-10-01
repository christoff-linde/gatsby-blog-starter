import * as React from "react"

import { useState } from "react"
import { Link } from "gatsby"
import { stack as Menu } from "react-burger-menu"
import styled from "styled-components"

const Navbar = () => {
    const [menuState, setMenuOpen] = useState({ menuOpen: false });

    const closeMenu = () => {
        setMenuOpen({ menuOpen: false })
    }

    return (
        <TopNav>
            <h2>
                <Link to="/">
                    My Animals &trade;
                </Link>
            </h2>
            <NavItems>
                <h5>
                    <Link to="/">Home</Link>
                </h5>
                <h5>
                    <Link to="/">Blog</Link>
                </h5>
                <h5>
                    <Link to="/">Shop</Link>
                </h5>
            </NavItems>
            <SideMenu>
                <Menu width={'100%'} right isOpen={menuState.menuOpen}>
                    <Logo>
                        <h2>
                            <Link to="/">
                                My Animals &trade;
                            </Link>
                        </h2>
                    </Logo>
                    <h5>
                        <Link to="/" onClick={() => closeMenu()}>Home</Link>
                    </h5>
                    <h5>
                        <Link to="/" onClick={() => closeMenu()}>Blog</Link>
                    </h5>
                    <h5>
                        <Link to="/" onClick={() => closeMenu()}>Shop</Link>
                    </h5>
                </Menu>
            </SideMenu>
        </TopNav>
    )
}

const TopNav = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  overflow: hidden;
  z-index: 1101;
  top: 0;
  max-width: 1432px;
  width: 100%;
  margin: 0 auto;
`

const NavItems = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: space-between;
  align-items: center;
  margin-top: 1em;
  gap: 42px;

  @media(max-width: 721px) {
    display: none;
  }
`

const Logo = styled.div`
    h2 {
        color: #F0F0F0;
    }
`

const SideMenu = styled.div`
    .bm-item {
      display: inline-block;
      text-decoration: none;
      margin-bottom: 10px;
      color: #F0F0F0;
      transition: color 0.2s;
    }

    .bm-item:hover {
      color: white;
    }

    .bm-burger-button {
      position: fixed;
      width: 36px;
      height: 30px;
    }

    .bm-burger-bars {
      background: #000033;
    }

    .bm-cross-button {
      height: 42px;
      width: 42px;
    }

    .bm-cross {
      background: #F0F0F0;
      border-radius: 3px;
    }

    .bm-menu {
      background: #373a47;
      padding: 2.5em 1.5em 0;
    }

    .bm-morph-shape {
      fill: #373a47;
    }

    .bm-item-list {
      color: #b8b7ad;
    }

    .bm-overlay {
      background: #000033;
    }
    @media(min-width: 720px) {
      display: none;
    }
`

// const Navbar = () => {
//     return (
//         <nav className="nav-bar">
//             <h2>
//                 <Link to="/">
//                     My Animals &trade;
//                 </Link>
//             </h2>
//             <div className="aside-container">
//                 <h5>
//                     <Link to="/">Home</Link>
//                 </h5>
//                 <h5>
//                     <Link to="/">Blog</Link>
//                 </h5>
//                 <h5>
//                     <Link to="/">Shop</Link>
//                 </h5>
//             </div>
//         </nav>
//     )
// }

export default Navbar;
