import * as React from "react"

import { useState } from "react"
import { Link } from "gatsby"
import { slide as Menu } from "react-burger-menu"
import styled from "styled-components"

const Navbar = () => {
  const menuIcon = (
    <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="6" y="12" width="36" height="4" rx="1" fill="#000033" />
      <rect x="6" y="22" width="36" height="4" rx="1" fill="#000033" />
      <rect x="6" y="32" width="36" height="4" rx="1" fill="#000033" />
    </svg>
  )

  const crossIcon = (
    <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M0 0H48V48H0V0Z" fill="#000033" />
      <rect x="9.85785" y="35.3137" width="36" height="4" rx="1" transform="rotate(-45 9.85785 35.3137)" fill="#F0F0F0" />
      <rect x="12.6863" y="9.85785" width="36" height="4" rx="1" transform="rotate(45 12.6863 9.85785)" fill="#F0F0F0" />
    </svg>
  )

  const [menuState, setMenuOpen] = useState({ menuOpen: false });

  const closeMenu = () => {
    setMenuOpen({ menuOpen: false })
  }

  return (
    <TopNav>
      <h2>
        <Link to="/">
          My Animals&trade;
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
        <Menu
          width={'100%'}
          right
          customBurgerIcon={menuIcon}
          customCrossIcon={crossIcon}
          noOverlay
          isOpen={menuState.menuOpen}
        >
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
  padding-left: 1rem;

  @media(max-width: 1432px) {
    padding-right: 1rem;
  }
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
    position: relative;
    width: 36px;
    height: 30px;
    margin: 1rem;
  }

  .bm-burger-bars {
    background: #000033;
  }

  .bm-cross-button {
    height: 42px;
    width: 42px;
    margin: 2rem;
  }

  .bm-cross {
    // background: #F0F0F0;
    // border-radius: 3px;
  }

  .bm-menu {
    background: #000033;
    padding: 2.5em 2.5em 0;
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
