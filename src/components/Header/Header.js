import React from 'react'
import { IndexLink, Link } from 'react-router'
import '../../styles/components/header.scss'

export const Header = () => (
  <div>
    <h1>Demo</h1>
    <IndexLink to='/' activeClassName='route--active'>
      Home
    </IndexLink>
    {' · '}
    <Link to='/counter' activeClassName='route--active'>
      Counter
    </Link>
    {' · '}
    <Link to='/form' activeClassName='route--active'>
      Form
    </Link>
  </div>
)

export default Header
