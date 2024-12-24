import React from "react";
import styled from "styled-components";


const Teste2 = styled.div`
height: 500px;
background-color: black;

@media (min-width: 1396px) and (max-width: 1399px ) {
  /* zoom 110% /

  border: 2px solid green;
}


@media (min-width: 1024px) and (max-width: 1396px ) {
  /* zoom 125% - 150%*/

  border: 2px solid gold;
}

@media (min-width: 1400px) {
  /* Estilos para desktops grandes */
    border: 2px solid purple;

}


`

function Teste() {

    return(
        <>
        <Teste2/>
        </>
    );

}

export default Teste;