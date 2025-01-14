import './App.css';
import React, { useEffect } from 'react';
import { ThemeProvider } from 'styled-components';
import { theme } from './assets/UI/theme';
import Header from './assets/components/header/header';
import Home from './assets/components/home/home';
import Footer from './assets/components/footer/footer';
import styled from 'styled-components';

const AppWrapper = styled.div`
  width: 100vw ;
  height: auto;

`;

const Site = styled.div`
  display: flex;
  justify-content: center;
`;

function App() {
  useEffect(() => {
    const isFirefox = navigator.userAgent.toLowerCase().includes("firefox");
    if (isFirefox) {
      document.body.style.transform = "scale(1.25)";
      document.body.style.transformOrigin = "0 0"; // Define a origem do zoom
    } else {
      document.body.style.zoom = "100%"; // Define o zoom inicial para outros navegadores
    }
  }, []);

  return (
    <Site>
    <ThemeProvider theme={theme}>
      <AppWrapper>
        <Header />
        <Home />
        <Footer />
      </AppWrapper>
    </ThemeProvider>
    </Site>
  );
}

export default App;
