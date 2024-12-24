// components/Button.js
import styled, { css } from 'styled-components';
import '../css/style.css';

const Button = styled.button`
  display: inline-block;
  font-size: ${props => props.theme.fontSize.buttonBig};
  padding: 12px 30px;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  transition: all 0.3s ease-in-out; /* Transição suave e rápida */
  font-family: "Inter";
  outline: none;
  position: relative;

  /* Estilo para cores, baseado na prop variant */
  ${props =>
    props.variant === 'primary' &&
    css`
      background-color: ${props.theme.colors.buttonTextSeconday};
      color: ${props.theme.colors.buttonTextPrimary};
      border: 2px solid ${props.theme.colors.buttonTextSeconday};

      /* Efeito hover */
      &:hover {
        
        transform: scale(1.05) translateY(-3px); /* Aumento suave e deslocamento */
        box-shadow: 0px 8px 20px rgba(0, 0, 0, 0.2); /* Sombra elegante */
      }

      /* Efeito de pressionar */
      &:active {

        transform: scale(0.95) translateY(2px); /* Reduz o tamanho e desloca */
        box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.15); /* Sombra mais suave */
      }
    `}

  ${props =>
    props.variant === 'secondary' &&
    css`
      background-color: ${props.theme.colors.buttonBackgroundSecondary};
      color: ${({ theme }) => theme.colors.buttonTextSeconday};
      border: 2px solid ${props.theme.colors.buttonBackgroundSecondary};

      /* Efeito hover */
      &:hover {
        background-color: ${props.theme.colors.primario};
        color: ${props.theme.colors.buttonTextHover};
        transform: scale(1.05) translateY(-3px); /* Aumento suave e deslocamento */
        box-shadow: 0px 8px 20px rgba(0, 0, 0, 0.2); /* Sombra elegante */
      }

      /* Efeito de pressionar */
      &:active {
        background-color: ${props.theme.colors.primario};
        color: ${props.theme.colors.buttonTextSeconday};
        transform: scale(0.95) translateY(2px); /* Reduz o tamanho e desloca */
        box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.15); /* Sombra mais suave */
      }
    `}

    ${props =>
      props.variant === 'success' &&
      css`
      background-color: ${props.theme.colors.buttonBackgroundSecondary};
      color: ${({ theme }) => theme.colors.buttonTextSeconday};
      border: 2px solid ${props.theme.colors.buttonBackgroundSecondary};

      /* Efeito hover */
      &:hover {
        background-color: ${props.theme.colors.primario};
        color: ${props.theme.colors.buttonTextHover};
        transform: scale(1.05) translateY(-3px); /* Aumento suave e deslocamento */
        box-shadow: 0px 8px 20px rgba(0, 0, 0, 0.2); /* Sombra elegante */
      }

      /* Efeito de pressionar */
      &:active {
        background-color: ${props.theme.colors.primario};
        color: ${props.theme.colors.buttonTextSeconday};
        transform: scale(0.95) translateY(2px); /* Reduz o tamanho e desloca */
        box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.15); /* Sombra mais suave */
      }
      `}
  

  /* Estilo para tamanhos, baseado na prop size */
  ${props =>
    props.size === 'small' &&
    css`
      font-size: ${props.theme.fontSize.buttonSmall};
      padding: 12px 30px;
      width: 180px;
    `}

  ${props =>
    props.size === 'large' &&
    css`
      font-size: ${props.theme.fontSize.buttonBig};
      padding: 15px 40px;
    `}

  ${props =>
    props.size === 'largeLP' &&
    css`
      font-size: ${props.theme.fontSize.buttonSmall};
      font-weight: 500;
      padding: 18px 70px;
      width: 40%;
      height: 10vh;

        @media (min-width: 1024px) and (max-width: 1396px ) {
  /* zoom 125% - 150%*/
      padding: 8px 20px;
      height: 10vh;
      font-size: 14px;

}
    `}

  ${props =>
    props.size === 'largeServices' &&
    css`
      font-size: ${props.theme.fontSize.buttonSmall};
      font-weight: 500;
      padding: 18px 70px;
      height: 70px;
      @media (min-width: 1024px) and (max-width: 1396px ) {
  /* zoom 125% - 150%*/
      padding: 8px 60px;
      height: 12vh;
      font-size: 14px;
      height: 10vh;

}
    `}
`;

export default Button;
