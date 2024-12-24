import React from "react";
import styled from "styled-components";
import image from "../../img/lp.pdf.png"
import Button from '../button';
import { SlArrowDown } from 'react-icons/sl';
import Section1 from "./section1";
import Section2 from "./section2";
import ProjectSteps from "./projectSteps";
import Teste from "./teste";

const HomeWrapper = styled.div`

z-index:0;
  background-color:black;
  width:100%;
  height:auto;
      background-color: white;

  .landingPage {
    display: flex;
    width: 100%;
    height: 98vh;
  
`;

const Image = styled.div`
display: flex;
width: 100%;
  align-items: center; /* Alinha verticalmente o texto */
  justify-content: center;


  .icon {
    margin-left: 15px;
    position: absolute;
    color: white;
    margin-top: 60vh;
    cursor: pointer;

    @media (min-width: 1024px) and (max-width: 1396px ) {
    margin-top: 60vh;

  }
  }
  .img{
    position: absolute;
    top: 20px; 
    width: 100%; 
    height: 100%; 
    
    
} 
`;

const StyledH1 = styled.h1`
  font-size: 3rem;
  color: ${({ theme }) => theme.colors.secondary};
  text-align: center;
  position: absolute;
  margin-bottom: 60vh;
  letter-spacing: 2px;
    font-family: "Inter";
    font-weight: 300;

    @media (min-width: 1024px) and (max-width: 1396px ) {
  font-size: 2.5rem;

  }
  span {
    font-weight: bold;
  }

  
`;  

const StyledH2 = styled.h1`
  font-size: 1.2rem;
  color: ${({ theme }) => theme.colors.buttonTextSeconday};
  text-align: center;
  position: absolute;
  text-align: center;
  width: 50%;
  margin-bottom: 33vh;
  font-family: "Inter";
  font-weight: 400;
 
`;  

const Buttons = styled.h1`
  position: absolute;
  display: flex;
  width: 60%;
  margin-top: 10%;
  justify-content: space-around;
`;  



const Home = () => {
  return (
    <HomeWrapper>
     <div class="landingPage">
        <Image>
            <img src={image} alt="Logo" class="img" />
            <StyledH1><span>Unique</span> solutions for <span>exclusive</span> needs. </StyledH1>
            <StyledH2>We transform your needs by developing custom software solutions focused on optimizing and boosting your business. </StyledH2>
            <Buttons>
              <Button variant="primary" size="largeLP">Get a quote in 1 minute</Button>
              <Button variant="secondary" size="largeLP">Get a call</Button>
            </Buttons>
            <SlArrowDown fontSize={45} className="icon" />
        </Image>
     </div>
      <Section1/>
      <Section2/>
      <ProjectSteps/>
    </HomeWrapper>
  );
};

export default Home;
