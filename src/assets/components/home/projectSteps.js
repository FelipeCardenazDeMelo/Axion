import React, { useState } from "react";
import styled from "styled-components";
import Button from '../button';

const steps = [
  { title: "Requirement Analysis & Planning", subtitle: "We work closely with you to understand your business needs, define the project scope, and create a clear plan with timelines and resources to ensure success." },
  { title: "Design & Development", subtitle: "We design the software architecture, develop features, and create intuitive user interfaces, all tailored to your specific requirements." },
  { title: "Testing & Deployment", subtitle: "Rigorous testing ensures everything works flawlessly before deploying the software into your systems for seamless integration." },
  { title: "Training & Support", subtitle: "We provide training to ensure your team is comfortable with the software, along with ongoing support to address any issues." },
  { title: "Maintenance & Updates", subtitle: "Continuous monitoring, bug fixes, and updates keep your software running smoothly and up to date with new features." },
];

// Styled Components
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width:1000px;
  height: auto;

`;

const StyledH1 = styled.h1`
  font-size: 2rem;
  color: ${({ theme }) => theme.colors.primary};
  text-align: center;
  font-family: "Inter";
  font-weight: 550;
  margin-bottom: 0px; 
    margin: 30px ;

`;

const StyledH2 = styled.h2`
  font-size: 1.2rem;
  color: #303e4f;
  text-align: center;
  font-family: "Inter";
  font-weight: 400;
  width: 42%;
      margin-top:-1% ;

`;

const StepsContainer = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  width: 100%;
  margin-top: 100px;
  font-family: "Inter";
  z-index: 0; /* Atribua um valor menor de z-index para garantir que o serviço fique sobre ele */

  &::before {
    content: "";
    position: absolute;
    top: 50%;
    left: 0;
    width: 100%;
    height: 3px;
    border-radius: 30px;
    background-color: ${(props) => props.theme.colors.primary};
    transform: translateY(-50%);
    z-index: 0; /* Certifique-se de que a linha não sobreponha os serviços */
  }
`;

const StepWrapper = styled.div`
  position: relative;
  flex: 1;
  text-align: center;
`;

const StepTitle = styled.div`
  position: absolute;
  bottom: 90px; /* Move o título para cima da bolinha */
  left: 50%;
  transform: translateX(-50%);
  color: ${(props) => (props.active ? props.theme.colors.primary : "rgba(117, 139, 183, 0.7)")};
  font-size: 14px;
  font-weight: bold;
  white-space: nowrap;
  transition: 0.4s ease;
`;

const StepSubtitle = styled.div`
  position: absolute;
  top: 90px; /* Move o subtítulo abaixo da bolinha */
  left: 50%;
  transform: translateX(-50%);
  color: ${(props) => (props.active ?"#475467" : "rgba(117, 139, 183, 0.7)")};
  font-size: 12px;
  text-align: center;

  transition: 0.4s ease;
  width: 180px;
`;
const StepCircle = styled.div`
  width: 70px;
  height: 70px;
  border-radius: 100%;
  background-color: ${(props) =>
    props.active ? props.theme.colors.primary : "rgba(117, 139, 183, 0.45)"};
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  position: relative;
  z-index: 1; /* Garante que o círculo fique acima da linha */
  margin: 0 auto;
  transition: 0.6s ease;

  &::before {
    content: "";
    transition: 0.6s ease;
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: ${(props) =>
      props.active ? props.theme.colors.primary : "#AEB4C0"};
    border-radius: 50%;
    z-index: -1; /* Coloca o fundo do círculo atrás do círculo */
  }
`;

const Buttons = styled.div`
  margin-top: 80px;
  display: flex;
  gap: 100px;
  padding: 80px;
`;

// Componente Principal
const ProjectSteps = () => {
  const [currentStep, setCurrentStep] = useState(0);

  const handleNext = () => {
    if (currentStep < steps.length - 1) setCurrentStep(currentStep + 1);
  };

  const handlePrevious = () => {
    if (currentStep > 0) setCurrentStep(currentStep - 1);
  };

  return (
    <Container>
      <StyledH1>Project Steps</StyledH1>
      <StyledH2>
        These steps might be changed depending on the Project Size and client’s needs.
      </StyledH2>
      <StepsContainer>
        {steps.map((step, index) => (
          <StepWrapper key={index}>
            <StepTitle active={index <= currentStep}>{step.title}</StepTitle>
            <StepCircle active={index <= currentStep}>{index + 1}</StepCircle>
            <StepSubtitle active={index <= currentStep}>{step.subtitle}</StepSubtitle>
          </StepWrapper>
        ))}
      </StepsContainer>
      <Buttons>
        <Button variant="primary" size="small" onClick={handlePrevious} disabled={currentStep === 0}>
          Back
        </Button>
        {currentStep === steps.length - 1 ? (
          <Button variant="success" size="small">
            Get a call
          </Button>
        ) : (
          <Button variant="secondary" size="small" onClick={handleNext}>
            Next
          </Button>
        )}
      </Buttons>
    </Container>
  );
};

export default ProjectSteps;
