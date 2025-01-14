import React from "react";
import styled from "styled-components";
import { LiaLaptopCodeSolid } from "react-icons/lia";
import { FaCog, } from "react-icons/fa";
import Button from '../button';
import { TbChartInfographic } from "react-icons/tb";

const WrapperSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  height: auto;
  background-color: ${({ theme }) => theme.colors.third};
  box-shadow: inset 0 8px 16px rgba(0, 0, 0, 0.15), 
              inset 0 -8px 16px rgba(0, 0, 0, 0.15);
  text-align: center;
  width: 100%;

`;

const Container = styled.div`
  width:1000px;
  height: 100%;
  text-align: center;    
  padding-top: 30px;
`;

const ContainerIcons = styled.div`
  width: 100%;
  padding-top: 20px;
  @media (min-width: 1024px) and (max-width: 1396px ) {
  padding-top: 20px;
  }
  display: flex;
  justify-content: space-around;
  text-align: center;
  margin-top: 1%;
`;

const ServiceCard = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  position: relative;
  width: 270px;

`;

const IconWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 60px;
  height: 60px;

  @media (min-width: 1024px) and (max-width: 1396px ) {
        width: 45px;
        height: 45px;
  
  }
  background-color: #dce6f2;
  border-radius: 50%;
    opacity: 0.9;
    transition: .4s ease;
  margin: 0 auto 15px;
  cursor: pointer;

  &:hover{
  opacity: 1.5;
    box-shadow: 0px 1px 10px #a6bbd6;
  }
`;

const Icon = styled.div`
  width: 43px;
  height: 43px;
  @media (min-width: 1024px) and (max-width: 1396px ) {
        width: 30px;
        height: 30px;
        font-size:17px;

  }
  font-size: 18px;
  background-color: #c6d7ed;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  box-shadow: 0px 1px 6px #a6bbd6;
  color: ${({ theme }) => theme.colors.primary};
`;

const Title = styled.h4`
  font-size: 1.2rem;
  font-weight: 600;
  margin: 0;

  @media (min-width: 1024px) and (max-width: 1396px ) {
        font-size: 1rem;


  }
`;

const Description = styled.p`
  font-size: 0.9rem;
  color: #475467;
  font-weight: 450;
  width: 100%; /* Faz com que a descrição ocupe toda a largura disponível */
  text-align: center;  /* Garante a centralização do texto */
`;

const Description2 = styled.p`
  font-size: 0.9rem;
  color: #475467;
  font-weight: 450;
  width: 100%; /* Faz com que a descrição ocupe toda a largura disponível */
  text-align: center;  /* Garante a centralização do texto */
`;

const StyledH1 = styled.h1`
  font-size: 2rem;
  color: ${({ theme }) => theme.colors.primary};
  text-align: center;
  font-family: "Inter";
  font-weight: 550;
  margin-bottom: 0px;
@media (min-width: 1024px) and (max-width: 1396px ) {
      
        font-size:1.7rem;

  }
`;

const ContainerA = styled.div`
  width: 60%;
  margin-top: 2%;
  margin-left: 20%;
  padding-bottom: 2px;


  @media (min-width: 1024px) and (max-width: 1396px ) {
        
  margin-top: .5%;

  }
  p{
    text-decoration: underline;
    transition: ease .4s;
    opacity: 0.6;
    cursor: pointer;
    @media (min-width: 1024px) and (max-width: 1396px ) {
        
        font-size:15px;

  }

    &:hover {
        opacity: 1;
    }
  }
`; 


const Buttons = styled.h1`
  width: 60%;
  margin-top: 3.5%;
  margin-left: 20%;
  padding-bottom: 50px;

  @media (min-width: 1024px) and (max-width: 1396px ) {
  margin-top: 1%;

  }

`; 

const Section2 = () => {
  return (
    <WrapperSection>
      <Container>
        <StyledH1>Services</StyledH1>
        <ContainerIcons>
          <ServiceCard>
            <IconWrapper>
              <Icon><LiaLaptopCodeSolid /></Icon>
            </IconWrapper>
            <Title>Software Development</Title>
            <Description>At Axion, we deliver custom software solutions that optimize efficiency and drive success.</Description>
          </ServiceCard>
          <ServiceCard>
            <IconWrapper>
              <Icon><FaCog /></Icon>
            </IconWrapper>
            <Title>IT Management</Title>
            <Description>IT outsourcing to manage your systems, implementing enhances and improving your IT ability.</Description>
          </ServiceCard>
          <ServiceCard>
            <IconWrapper>
              <Icon><TbChartInfographic /></Icon>
            </IconWrapper>
            <Title>IT Consulting</Title>
            <Description2>A 3-week immersive program designed to identify and implement IT solutions that drive growth, save time, and reduce costs for your business.
            </Description2>
          </ServiceCard>
        </ContainerIcons>
        <ContainerA>
            <p>Explore all services</p>
        </ContainerA>
        <Buttons>
            <Button variant="secondary" size="largeServices">Get Started with Expert IT Consulting</Button>
        </Buttons>
      </Container>
    </WrapperSection>
  );
};

export default Section2;
