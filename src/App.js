import './App.css';
import React from 'react';
import { ThemeProvider } from 'styled-components';
import { theme } from './assets/UI/theme';
import Header from './assets/components/header/header';
import Home from './assets/components/home/home';
import Footer from './assets/components/footer/footer';
import styled from 'styled-components';
const AppWrapper = styled.div`
  width: auto;
  height: auto;
`;



function App() {
  return (
    <ThemeProvider theme={theme}>
      <AppWrapper>
        <Header />
        <Home />
        <Footer />
      </AppWrapper>
    </ThemeProvider>
  );
}

export default App;
