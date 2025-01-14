import React from "react";
import styled from "styled-components";
import image from "../../img/phone.png"

const WrapperSection1 = styled.div`
  position: relative;
  height: auto;
  display: flex;
  flex-direction: column; /* Organiza os filhos em coluna */
  align-items: center; /* Centraliza horizontalmente */
  text-align: center;
  margin: 0px;
  padding:0px;
  background-color: white;
  width:1000px;

`;

const StyledH1 = styled.h1`
  font-size: 2rem;
  color: ${({ theme }) => theme.colors.primary};
  text-align: center;
  font-family: "Inter";
  font-weight: 550;
  margin-bottom: 0px; 

`;

const StyledH2 = styled.h2`
  font-size: 1.2rem;
  color: #303e4f;
  text-align: center;
  font-family: "Inter";
  font-weight: 400;
  width: 40%;
`;

const Image = styled.div`

display: flex;
width: 55%;
  align-items: center; /* Alinha verticalmente o texto */
  justify-content: center;
    padding: 10px;
    padding-bottom: 30px;
.img{
    width: 100%; 
    height: 100%; 
    
} 


`


const Section1 = () => {
  return (
    <WrapperSection1>
      <StyledH1>Multi-platform applications</StyledH1>
      <StyledH2>
        From mobile apps to software that enhances your team's productivity and
        optimizes the efficiency of your daily workflow
      </StyledH2>
      <Image>
            <img src={image} alt="Logo" class="img" />
        </Image>
    </WrapperSection1>
  );
};

export default Section1;
