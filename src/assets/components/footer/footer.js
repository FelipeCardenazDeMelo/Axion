// Footer.js
import React from "react";
import styled from "styled-components";
import { FaMapMarkerAlt, FaEnvelope, FaPhoneAlt, FaClock } from "react-icons/fa";
import { FaInstagram, FaLinkedin } from "react-icons/fa";
import logo from '../../img/axion_logo.png';

const FooterContainer = styled.footer`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  padding: 40px 60px;
  background-color: ${props => props.theme.colors.primary};
  color: #a1a7b3;
  font-family: "Inter";

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 20px;
    text-align: center;
  }
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;

  @media (max-width: 768px) {
    align-items: center;
  }
`;

const ContactInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 14px;
  color:#435A75;
  transition: .4s ease;
  cursor: pointer;
  &:hover {
    color: ${({ theme }) => theme.colors.buttonTextSeconday};

  }


`;

const NavLink = styled.a`
  text-decoration: none;
  color: #a1a7b3;
  font-size: 16px;
   cursor: pointer;
      transition: .4s ease; 

  &:hover {
    color: #fff;
  }
`;

const LogoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 16px;

  @media (max-width: 768px) {
    align-items: center;
  }
`;

const Logo = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
transition: .4s ease; 

  img {
    width: 150px;
  }

  span {
    font-size: 18px;
    font-weight: bold;
    color: #a1a7b3;
  }
`;

const SocialIcons = styled.div`
  display: flex;
  gap: 10px;
  cursor: pointer;
  
  .icon{
    color: #a1a7b3;
     transition: .4s ease; 

    font-size: 20px;

    &:hover {
      color: #fff;
    }
  }
`;

const FooterBottom = styled.div`
  text-align: center;
  font-size: 12px;
  color: #a1a7b3;
  padding-bottom: 20px;
  background-color: ${props => props.theme.colors.primary};
  margin-top: -10px;
`;

const Footer = () => {
  return (
    <>
      <FooterContainer>

        <Column>
          <ContactInfo>
            <FaMapMarkerAlt fontSize={18} />
            <span>
              350 West Georgia Street, L4 North
              <br />
              Vancouver, BC - Canada V6B 6B1
            </span>
          </ContactInfo>
          <ContactInfo>
            <FaEnvelope fontSize={18} />
            <span>contact@axion.com</span>
          </ContactInfo>
          <ContactInfo>
            <FaPhoneAlt fontSize={18} />
            <span>+01 (236) 818-5533</span>
          </ContactInfo>
          <ContactInfo>
            <FaClock fontSize={18} />
            <span>Mon to Fri - 09AM-6PM</span>
          </ContactInfo>
        </Column>

        <Column>
          <NavLink href="#">About Axion</NavLink>
          <NavLink href="#">Services</NavLink>
          <NavLink href="#">Products</NavLink>
          <NavLink href="#">Consulting</NavLink>
          <NavLink href="#">Work with us</NavLink>
          <NavLink href="#">Pricing</NavLink>
        </Column>

        <LogoContainer>
          <Logo>
            <img src={logo} alt="Logo" />
          </Logo>
          <SocialIcons>
              <FaInstagram className="icon" />
              <FaLinkedin className="icon"/>
          </SocialIcons>
        </LogoContainer>
      </FooterContainer>
      <FooterBottom>© 2024 Axion. All rights reserved.</FooterBottom>
    </>
  );
};

export default Footer;