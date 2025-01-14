import React from "react";
import styled from "styled-components";
import image from "../../img/lp.pdf.png";
import Button from "../button";
import { SlArrowDown } from "react-icons/sl";
import Section1 from "./section1";
import Section2 from "./section2";
import ProjectSteps from "./projectSteps";

const HomeWrapper = styled.div`
  background-color: white;
  height: auto;
  justify-content: center;
`;


const Image = styled.div`
  position: absolute;
  background: url(${image}) center/cover no-repeat;
  width: 100%;
  height: 100vh;
  left:0;
  margin-top: -5%;

`;

const LandingPageWrapper= styled.div`
    width: auto;
    display:flex;
    justify-content: center;
`;
const LandingPage = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width:1000px;
  top: -7vw; /* Move o container para cima sem afetar a imagem */

`;

const Title = styled.h1`
  font-size: clamp(2rem, 4vw, 3.7rem);
  color: ${({ theme }) => theme.colors.secondary};
  text-align: center;
  font-family: "Inter", sans-serif;
  font-weight: 300;
  margin-bottom: 20px;
  letter-spacing: 3px;
  white-space: nowrap;
  span {
    font-weight: bold;
  }
`;

const Subtitle = styled.h2`
  font-size: clamp(1rem, 2vw,1.3rem);
  color: ${({ theme }) => theme.colors.buttonTextSeconday};
  text-align: center;
  font-family: "Inter", sans-serif;
  font-weight: 400;
  width: 80%;
  margin-bottom: 40px;
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: 40px; /* Espaçamento entre os botões */
  justify-content: center;
  margin-top: 5%;
  button {
    flex: 1; /* Faz com que todos os botões tenham o mesmo tamanho */
    max-width: 400px; /* Opcional: defina um limite máximo */
  }
`;

const Content = styled.div`
    width: auto;
    display:flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
`;


const ArrowIcon = styled(SlArrowDown)`
  position: absolute;
  bottom: 10%;
  font-size: 2.5rem;
  color: white;
  cursor: pointer;

`;

const Section1Wrapper = styled.div`
    width: auto;
    display:flex;
    justify-content: center;
    margin-top:-6%;
`;

const ProjectStepsWrapper = styled.div`
    width: auto;
    display:flex;
    justify-content: center;
`;



const Home = () => {
  return (
    <HomeWrapper>
      <Image></Image>
      <LandingPageWrapper>

      <LandingPage>
        <Title>
          <span>Unique</span> solutions for <span>exclusive</span> needs.
        </Title>
        <Subtitle>
          We transform your needs by developing custom software solutions
          focused on optimizing and boosting your business.
        </Subtitle>
        <ButtonGroup>
          <Button variant="primary" size="largeLP">
            Get a quote in 1 minute
          </Button>
          <Button variant="secondary" size="largeLP">
            Get a call
          </Button>
        </ButtonGroup>
        <ArrowIcon />
      </LandingPage>
      </LandingPageWrapper>

      <Content>

      <Section1Wrapper>
          <Section1 />
      </Section1Wrapper>
      <Section2 />
      <ProjectStepsWrapper>
        <ProjectSteps />
      </ProjectStepsWrapper>
      </Content>
    </HomeWrapper>
  );
};

export default Home;
