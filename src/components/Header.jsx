import React from 'react'
import { Link } from 'react-router-dom'
import { HeaderContainer, Nav } from '../styles/HeaderStyled'
const Header = () => {
  return (
    <HeaderContainer>
      <Nav>
        <ul>
          <li><Link to='/' >Home</Link></li>
          <li><Link>Acessorios</Link></li>
          <li><Link>Promoçoes</Link></li>
          <li><Link to='/Login'>Login</Link></li>
        </ul>
      </Nav>
    </HeaderContainer>
  )
}

export default Header
