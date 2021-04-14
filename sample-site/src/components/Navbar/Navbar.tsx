import React from 'react'
import styled from 'styled-components'
import Logo from '../../images/icon.png'
export interface NavbarProps {}

const Nav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 8px;
  img {
    width: 30px;
    height: 30px;
  }
`

const Menu = styled.ul`
  display: flex;
  padding: 0;
  list-style-type: none;
  li {
    display: inline-flex;
    margin: 0 20px;
  }
`
const Navbar: React.FC<NavbarProps> = () => {
  return (
    <Nav>
      <img src={Logo} alt='Logo' />
      <Menu>
        <li>About</li>
        <li>Services</li>
        <li>Contact</li>
      </Menu>
    </Nav>
  )
}

export default Navbar
