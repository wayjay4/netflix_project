import React, {Component} from 'react';
import logo from '../files/svg/logo.svg';
import {NavLink} from 'react-router-dom';
import styled from 'styled-components';

class Header extends Component{
  render(){
    return (
      <HeaderComponent className="header-container">
        <div className="header-top">
          <Logo src={logo} alt="logo" />
          <NavLink to="/" className="signIn-btn">Sign In</NavLink>
        </div>

        {/* Header Content */}
        <div className="header-content">
          <Title>See What's next...</Title>
          <h2>WATCH ANYWHERE. CANCEL ANYTIME.</h2>
          <button>try it now</button>
        </div>
      </HeaderComponent>
    );
  }
}

export default Header;

// Logo
const Logo = styled.img`
  width: 10rem;
  height: 3.5rem;
  position: absolute;
  top: 25%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

// Header Container
const HeaderComponent = styled.div`
  .signIn-btn {
    right: 0;
    margin: 1.125rem 3% 0;
    padding: 0.4375rem 1.0625rem;
    font-weight: 400;
    line-height: normal;
    border-radius: 0.1875rem;
    font-size: 1rem;
    background: var(--main-red);
    position: absolute;
    translate: transform(-50%, -50%);
    cursor: pointer;
    transition: background 0.2s ease-in;
    &:hover {
      background: var(--main-red-hover);
    }
  }

  // Header Top
  .header-top {
    position: relative;
    height: 10rem;
    z-index: 1;
  }
`;

// Main Title
const Title = styled.h1`
  margin: 0 0 1.2rem;
  font-size:5rem;
  font-weight: 700;
  line-height: 1.1em;
`;
