import React from "react";
import styled from "styled-components";
import { FaCog, FaChartBar } from "react-icons/fa";
import { LiaLaptopCodeSolid } from "react-icons/lia";

import { TbChartInfographic , TbDeviceMobileCode  } from "react-icons/tb";
import { CgWebsite } from "react-icons/cg";

import { AiOutlineCloudServer, AiOutlineRobot } from "react-icons/ai";

const ServicesWrapper = styled.div`
  position: absolute;
  margin-top: 230px;
  

  @media (min-width: 1024px) and (max-width: 1396px ) {
  margin-top: 210px;

  
  }

  @media (min-width: 1396px) and (max-width: 1399px ) {
  /* zoom 110% */
      margin-top: 240px;


}

  left: 50%;
  transform: translate(-50%, -50%);
  width: 85%;
  z-index: 10; 

  .hiddenContainer {
    height: 5px;
  }

  .servicesContainer {
    background-color: white;
    padding: 20px 30px;
    border-radius: 10px;
    box-shadow: 0px 4px 7.4px 2px rgba(0, 0, 0, 0.25);
    z-index: 11; /* Mantém o conteúdo dentro do container acima da camada do container */
    transition: 0.8s ease;
  }

  h1 {
    font-size: ${({ theme }) => theme.fontSize.header};
    color: ${({ theme }) => theme.colors.buttonTextPrimary};
    opacity: 70%;
    font-family: "Inter";
    margin-bottom: 20px;
    @media (min-width: 1024px) and (max-width: 1396px ) {
        font-size: 1.2rem;
      margin-bottom: 13px;

  }
  }

  .services-list {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 10px;
    width: 100%;
  }

  .service-item {
    display: flex;
    align-items: center;
    padding: 15px;
    border-radius: 10px;
    text-align: left;
    transition: transform 0.3s ease;
    margin-top: 15px;


    &:hover {
      transform: scale(1.05);
      cursor: pointer;
    }

    &:hover .icon {
      box-shadow: 0px 1px 10px 6px #a6bbd6;
    }

    .icon2 {
      position: absolute;
      display: flex;
      justify-content: center;
      align-items: center;
      width: 50px;
      height: 50px;
      background-color: #dce6f2;
      border-radius: 100%;

       @media (min-width: 1024px) and (max-width: 1396px ) {
        width: 40px;
        height: 40px;
  
  }

    }

    .icon {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 38px;
      height: 38px;
      font-size: 24px;
      transition: 0.3s ease;
      background-color: #c6d7ed;
      opacity: 20;
      border-radius: 50%;
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
      margin-left: 75px;
      @media (min-width: 1024px) and (max-width: 1396px ) {
        margin-left: 60px;
  
  }

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

const Services = () => {
  const services = [
      { id: 1, name: "Software Development", desc: "Create custom software solutions tailored to your needs.", icon: <LiaLaptopCodeSolid   /> },
      { id: 2, name: "IT Consulting", desc: "Strategic IT advice to boost your business.", icon: <TbChartInfographic   /> },
      { id: 3, name: "Business Intelligence", desc: "Turn data into insights for smarter decisions.", icon: <FaChartBar  /> },
      { id: 4, name: "Mobile App Development", desc: "Build user-friendly mobile applications for iOS and Android.", icon: <TbDeviceMobileCode   /> },
      { id: 5, name: "IT Management", desc: "Keep your IT systems secure and efficient.", icon: <FaCog  /> },
      { id: 6, name: "IT Infrastructure Management", desc: "Manage servers and networks for security and uptime.", icon: <AiOutlineCloudServer  /> },
      { id: 7, name: "Website Development", desc: "Design and develop responsive, engaging websites.", icon: <CgWebsite   /> },
      { id: 8, name: "AI & Machine Learning Consulting", desc: "Implement AI for automation and optimization.", icon: <AiOutlineRobot  /> },
  ];

  return (
    <ServicesWrapper>
      <div className="hiddenContainer"></div>
      <div className="servicesContainer">
        <h1>Services</h1>
        <div className="services-list">
          {services.map((service) => (
            <div key={service.id} className="service-item">
              <div className="icon2">
                <div className="icon">{service.icon}</div>
              </div>
              <div className="content">
                <h4>{service.name}</h4>
                <p>{service.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </ServicesWrapper>
  );
};

export default Services;
