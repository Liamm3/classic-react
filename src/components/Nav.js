import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const Nav = styled.nav`
  display: flex;
  background-color: #eee;
  align-items: center;
  justify-content: space-between;
`

const NavItems = styled.ul`
  list-style-type: none;
  display: flex;
  margin: 0;
`

const NavLink = styled(Link)`
  text-decoration: none;
  padding: 0.5rem 1rem;

  :hover {
    background-color: #ccc;
  }
`
const NavItem = ({ to, children }) => (
  <li style={{ margin: 0 }}>
    <NavLink to={to}>{children}</NavLink>
  </li>
)

export default () => (
  <Nav>
    <NavLink to="/">Classic React</NavLink>
    <NavItems>
      <NavItem to="/">Home</NavItem>
      <NavItem to="/news">News</NavItem>
      <NavItem to="/todos">TodoApp</NavItem>
      <NavItem to="/products">Products</NavItem>
    </NavItems>
  </Nav>
)
