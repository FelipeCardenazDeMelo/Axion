import React, { useState } from 'react';
import styled from 'styled-components';
import logo from '../../img/axion_logo.png';
import { SlArrowDown } from 'react-icons/sl';
import Services from './services';

const HeaderWrapper = styled.header`
  z-index: 1;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 0;
  background-color: ${props => props.theme.colors.primary};
  height: 10vh;
  position: fixed; /* Alterado para fixed */
  top: 0;
  left: 0;
  width: 100%;
  box-shadow: -3px 10px 19px -5px rgba(0, 0, 0, 0.75);
  -webkit-box-shadow: -3px 10px 19px -5px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: -3px 10px 19px -5px rgba(0, 0, 0, 0.75);

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

const Logo = styled.div`
  display: flex;
  align-items: center;
  padding: 5vw;

  img {
    width: 10vw;
    height: auto;
  }

`;

const Nav = styled.nav`
  position: absolute;
  width: 100%;
  margin: 0;
  padding: 0;

  ul {
    display: flex;
    justify-content: center;
    list-style: none;
    gap: 4vw;
    margin: 0;
    padding: 0;
    font-size: ${props => props.theme.fontSize.header};
    font-family: 'Poppins';
    margin-left: 60px;

    @media (max-width: 768px) {
      flex-wrap: wrap;
      gap: 10px;
    }

    @media (min-width: 1024px) and (max-width: 1396px ) {
  /* zoom 125% - 150%*/
    font-size: 16px;

  }
  }

  li {
    font-weight: 300;
    position: relative;
    transition: 0.3s ease;
    align-items: center;

    .icon {
      color: white;
      transition: transform 0.3s ease;
      margin-left: .7vw;
        font-size: 15px;
    @media (min-width: 1024px) and (max-width: 1396px ) {
      /* zoom 125% - 150%*/
    font-size: 12px;

  }

      &.rotated {
        transform: rotate(180deg);
      }
    }
  }

  a {
    text-decoration: none;
    color: ${props => props.theme.colors.buttonBackgroundPrimary};
    transition: color 0.3s;
  }

  a:hover {
    color: ${props => props.theme.colors.subtitleTextPrimary};
  }

  li:hover a {
    color: ${props => props.theme.colors.subtitleTextPrimary};
    cursor: pointer;
  }

  li {
    transition: color 0.3s;

    &::after {
      content: '';
      position: absolute;
      bottom: -3px;
      left: 50%;
      width: 0;
      border-radius: 20px;
      height: 2px;
      background-color: ${props => props.theme.colors.subtitleTextPrimary};
      transition: width 0.3s ease;
      transform: translateX(-50%);
    }

    &:hover::after {
      width: 100%;
    }
  }

  li:hover .icon {
    color: ${props => props.theme.colors.subtitleTextPrimary};
    cursor: pointer;
  }
`;

const Spacer = styled.div`
  height: 60px; /* Altura igual à do Header para evitar sobreposição */
`;

const Header = () => {
  const [servicesActive, setServicesActive] = useState(false);

  const handleMouseEnter = () => setServicesActive(true);
  const handleMouseLeave = () => setServicesActive(false);

  return (
    <>
      <HeaderWrapper>
        <Logo>
          <img src={logo} alt="Logo" />
        </Logo>
        <Nav>
          <ul className="ul-style">
            <li><a href="#home">Home</a></li>
            <li
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <a href="#services">Services</a>
              <SlArrowDown
                className={`icon ${servicesActive ? 'rotated' : ''}`}
              />
            </li>
            <li><a href="#pricing">Pricing</a></li>
            <li>
              <a href="#products">Products</a>
              <SlArrowDown className="icon" />
            </li>
            <li><a href="#work">Work with us</a></li>
            <li><a href="#about">About</a></li>
          </ul>
        </Nav>
        {servicesActive && (
          <div
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <Services active={servicesActive} />
          </div>
        )}
      </HeaderWrapper>
      <Spacer /> {/* Garante espaçamento no layout abaixo do header */}
    </>
  );
};

export default Header;
