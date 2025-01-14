import React, { useState } from "react";
import styled from "styled-components";
import logo from "../../img/axion_logo.png";
import { SlArrowDown } from "react-icons/sl";
import { FaCog, FaChartBar } from "react-icons/fa";
import { LiaLaptopCodeSolid } from "react-icons/lia";
import { TbChartInfographic, TbDeviceMobileCode } from "react-icons/tb";
import { CgWebsite } from "react-icons/cg";
import { AiOutlineCloudServer, AiOutlineRobot } from "react-icons/ai";

const HeaderWrapper = styled.header`
  z-index: 3;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 0;
  background-color: ${(props) => props.theme.colors.primary};
  height: 9%;
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  box-shadow: -3px 10px 19px -5px rgba(0, 0, 0, 0.75);

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
  display: flex; /* Flexbox para alinhamento */
  justify-content: center; /* Centraliza os itens horizontalmente */
  align-items: center; /* Alinha os itens verticalmente */
  margin: 0 auto;
  padding: 0;

  ul {
    display: flex;
    justify-content: center; /* Centraliza os itens da lista */
    align-items: center; /* Garante alinhamento vertical */
    list-style: none;
    gap: 4vw;
    margin: 0;
    padding: 0;
    font-size: ${props => props.theme.fontSize.header};
    font-family: 'Poppins';

    @media (max-width: 768px) {
      flex-wrap: wrap; /* Permite que os itens quebrem linha em telas menores */
      gap: 10px;
    }

    @media (min-width: 1024px) and (max-width: 1396px) {
      font-size: 16px; /* Ajusta o tamanho da fonte em telas médias */
    }
  }

  li {
    font-weight: 300;
    position: relative;
    display: flex; /* Flexbox dentro do li */
    justify-content: center; /* Centraliza o conteúdo horizontalmente */
    align-items: center; /* Centraliza o conteúdo verticalmente */
    text-align: center; /* Centraliza o texto */
    transition: 0.3s ease;

    .icon {
      color: white;
      transition: transform 0.3s ease;
      margin-left: 0.7vw;
      font-size: 15px;

      @media (min-width: 1024px) and (max-width: 1396px) {
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



const ServicesMenu = styled.div`
  position: absolute;
  width: 80vw;
  left: -30vw;
  top: 120%;
  background-color: white;
  padding: 15px 30px;
  border-radius: 10px;
  box-shadow: 0px 4px 7.4px 2px rgba(0, 0, 0, 0.25);
  z-index: 10;
  height: auto;
  text-align: left;
   
  h1 {
    font-size: ${({ theme }) => theme.fontSize.header};
    color: ${({ theme }) => theme.colors.buttonTextPrimary};
    opacity: 70%;
    font-family: "Inter";
    margin-bottom: 10px;

    @media (min-width: 1024px) and (max-width: 1396px ) {
      font-size: 1.2rem;
      margin-bottom: 13px;

  }
}
  
  .services-list {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 5px;
    padding:10px;
    }

  .service-item {
    display: flex;
    align-items: center;
    padding: 15px;
    border-radius: 10px;
    transition: transform 0.3s ease;
    &:hover {
      transform: scale(1.05);
      cursor: pointer;
    }
      &:hover .icon3 {
      box-shadow: 0px 1px 10px 6px #a6bbd6;
    }

    .icon2 {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 50px;
      height: 50px;
      background-color: #dce6f2;
      border-radius: 100%;
      margin-right: 15px;

          @media (min-width: 1024px) and (max-width: 1396px ) {
            width: 40px;
            height: 40px;
  
          }

    }

    .icon3 {
      display: flex;
      font-size: 24px;
      justify-content: center;
      align-items: center;
      margin:0;
      width: 38px;
      height: 38px;
      font-size: 24px;
      transition: 0.3s ease;
      background-color: #c6d7ed;
      opacity: 20;
      border-radius: 100%;
      box-shadow: 0px 1px 6px #a6bbd6;
            color: ${({ theme }) => theme.colors.primary};

      font-size:20px;

             @media (min-width: 1024px) and (max-width: 1396px ) {
              width: 28px;
              height: 28px;
              font-size:17px;

              }
              
    }

    .content {
     h4 {
        font-size: 1rem;
        margin: 0;
        font-weight: 600;
        font-family: "Inter";

        @media (min-width: 1024px) and (max-width: 1396px ) {
               font-size: 0.8rem;
  
  }
}

        p {
        margin: 5px 0 0;
        font-size: 0.8rem;
        color: #73859d;
        font-weight: 500;
        font-family: "Inter";
         @media (min-width: 1024px) and (max-width: 1396px ) {
               font-size: 0.7rem;
  
  }
      }
    }
  }
`;

const Spacer = styled.div`
  height: 60px; /* Altura igual à do Header para evitar sobreposição */
`;

const Header = () => {
  const [servicesActive, setServicesActive] = useState(false);

  const services = [
    {
      id: 1,
      name: "Software Development",
      desc: "Custom software solutions tailored to your needs.",
      icon: <LiaLaptopCodeSolid />,
    },
    { id: 2, name: "IT Consulting", desc: "Strategic IT advice.", icon: <TbChartInfographic /> },
    { id: 3, name: "Business Intelligence", desc: "Turn data into insights.", icon: <FaChartBar /> },
    { id: 4, name: "Mobile App Development", desc: "User-friendly mobile apps.", icon: <TbDeviceMobileCode /> },
    { id: 5, name: "IT Management", desc: "Secure and efficient IT systems.", icon: <FaCog /> },
    { id: 6, name: "IT Infrastructure", desc: "Manage servers and networks.", icon: <AiOutlineCloudServer /> },
    { id: 7, name: "Website Development", desc: "Responsive, engaging websites.", icon: <CgWebsite /> },
    { id: 8, name: "AI Consulting", desc: "Implement AI for optimization.", icon: <AiOutlineRobot /> },
  ];

  return (
    <>
      <HeaderWrapper>
        <Logo>
          <img src={logo} alt="Logo" />
        </Logo>
        <Nav>
          <ul>
            <li>
              <a href="#home">Home</a>
            </li>
            <li
              onMouseEnter={() => setServicesActive(true)}
              onMouseLeave={() => setServicesActive(false)}
            >
              <a href="#services">Services</a>
              <SlArrowDown className={`icon ${servicesActive ? "rotated" : ""}`} />
              {servicesActive && (
                <ServicesMenu>
                  <h1>Services</h1>
                  <div className="services-list">
                    {services.map((service) => (
                      <div key={service.id} className="service-item">
                        <div className="icon2" >
                          <div className="icon3" >{service.icon}</div>
                        </div>
                        <div className="content">
                          <h4>{service.name}</h4>
                          <p>{service.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </ServicesMenu>
              )}
            </li>
            <li>
              <a href="#pricing">Pricing</a>
            </li>
            <li>
              <a href="#products">Products</a>
            </li>
            <li>
              <a href="#about">About</a>
            </li>
          </ul>
        </Nav>
      </HeaderWrapper>
      <Spacer />
    </>
  );
};

export default Header;
