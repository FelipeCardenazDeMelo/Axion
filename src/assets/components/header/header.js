import React, { useState, useEffect } from "react";
import styled from "styled-components";
import logo from "../../img/aeon.png";
import { SlArrowDown } from "react-icons/sl";
import { FaCog, FaChartBar } from "react-icons/fa";
import { LiaLaptopCodeSolid } from "react-icons/lia";
import { TbChartInfographic, TbDeviceMobileCode } from "react-icons/tb";
import { CgWebsite } from "react-icons/cg";
import { AiOutlineCloudServer, AiOutlineRobot } from "react-icons/ai";
import logoMobile from "../../img/image-removebg-preview.png"; // Caminho da imagem para telas menores

const HeaderWrapper = styled.header`
  background-color: ${(props) => props.theme.colors.primary};
  position: fixed;
  left: 0;
  width: 100vw;
  z-index: 1;
  height: 11vh;
`;

const WrapperTeste = styled.div`
    width: 100%;
    display: flex;
    height: 100%;
    align-items: center;
    justify-content: space-between;
    box-shadow: -3px 10px 19px -5px rgba(0, 0, 0, 0.75);
    z-index: 1;
    background-color: ${(props) => props.theme.colors.primary};
`;

const Logo = styled.div`
  display: flex;
  align-items: center;
  padding: 12vw;

  @media (max-width: 1000px) {
    padding: 7%;
  }

  img {
    width: 8vw;
    height: auto;

    @media (max-width: 1000px) {
      width: 50vw;
    }
  }
`;

const Nav = styled.nav`
  position: absolute;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: ${props => props.theme.fontSize.header};
  margin: 0;
  padding: 0;
  font-family: 'Poppins';

   @media (max-width: 1000px) {
          justify-content: flex-start;
  align-items: flex-start;
    top:0;
    z-index: -1;


    }

  ul {
    display: "flex";
    flex-direction: column;
    position: fixed;
    top: 0;
    left: 0;
    height: 0vh;
    width: 100%;
    background-color: ${(props) => props.theme.colors.primary};
    justify-content: center;
    align-items: center;
    gap: 4vw;
    transition: height 0.4s ease-out;
    @media (min-width: 1024px) {
      display: flex;
      flex-direction: row;
      position: static;
      height: auto;
      width: auto;
      background-color: transparent;
    }

     @media (max-width: 1000px) {
         width: 100%;
         padding-left: 0;
         margin-top: 16%;
         align-items: flex-start;
         justify-content: flex-start;
         gap: 0vh;
         background-color:#161F2B;
         overflow: hidden;

    }
  }

  li {
    font-weight: 300;
    position: relative;
    display: flex; /* Flexbox dentro do li */
    align-items: center; /* Centraliza o conteúdo verticalmente */
    text-align: center; /* Centraliza o texto */
    transition: 0.3s ease;

     @media (max-width: 1000px) {
      width: 80vw;
      padding-left: 7%;
      justify-content: space-between;
      font-size: 20px;
      margin-top:15%;
    }

    .icon {
      color: white;
      transition: transform 0.3s ease;
      margin-left: 0.7vw;
      font-size: 15px;

      @media (min-width: 1024px) and (max-width: 1396px) {
        font-size: 12px;
      }

        @media (max-width: 1000px ) {
                 margin-left: 7vw;
                  font-size: 20px;

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
      @media (max-width: 1000px ) {
                  width: 0%;
          }
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
    gap: 15px;
    padding:10px;
    margin-top: 20px;
    margin-bottom:20px;
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

const MenuIcon = styled.div`
  display: none;
  cursor: pointer;
  z-index: 25;

  @media (max-width: 1000px) {
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.6rem;
    color: ${(props) => props.theme.colors.buttonBackgroundPrimary};
    padding-right: 10%;

          
  }


  .icon {
      color: white;
      transition: transform 0.3s ease;
      margin-left: 0.7vw;



      &.rotated {
        transform: rotate(180deg);
      }
    
`;

const Header = () => {
  const [servicesActive, setServicesActive] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [logoSrc, setLogoSrc] = useState(logo);


  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 1000) {
        setLogoSrc(logoMobile);
      } else {
        setLogoSrc(logo);
      }
    };

    window.addEventListener("resize", handleResize);

    // Chama o handleResize ao carregar o componente
    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

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


  function open() {

    var ul = document.querySelector(".ul-mobile");

    if (ul.style.height  === "80vh") {
        ul.style.height = "0vh";
    } else {
      ul.style.height = "80vh";


    }

  }

  return (
    <>
      <HeaderWrapper>
        <WrapperTeste>
        <Logo>
          <img src={logoSrc} alt="Logo" />
        </Logo>
        <MenuIcon onClick={() => { open(); setMenuOpen(!menuOpen)}}>
          <SlArrowDown className={`icon ${menuOpen ? "rotated" : ""}`} />
        </MenuIcon>
        <Nav menuOpen={menuOpen}>
        <ul className="ul-mobile">
    <li className="li1">
      <a href="#home">Home</a>
    </li>
    <li
      className="li2"
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
                <div className="icon2">
                  <div className="icon3">{service.icon}</div>
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
</WrapperTeste>
      </HeaderWrapper>
      <Spacer />
    </>
  );
};

export default Header;
