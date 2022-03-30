import React, { useState } from 'react';
import { ThemeProvider, createTheme } from '@material-ui/core/styles';

import AppHeader from './components/appHeader/AppHeader';
import About from './components/about/About';
import Intro from './components/intro/Intro';
import ExpertiseTypes from './components/expertiseTypes/ExpertiseTypes';
import Services from './components/servicesMenu/Services';
import StepByWork from './components/stepByWork/StepByWork';
import News from './components/news/News';
import ReasonsForExpertise from './components/reasons/ReasonsComponent';
import FooterComponent from './components/footer/FooterComponent';


function App() {
  const [darkMode, setDarkMode] = useState(false);
  
  const theme = createTheme({
    palette: {
      type: darkMode ? 'dark' : 'light',
      primary: {
        light: '#508BB6',
        main: '#256EA4',
        dark: '#006EAA',
        contrastText: '#F0F0F1'
      },
      secondary: {
        light: '#FFF',
        main: '#E0E1E2',
        dark: '#F0F0F1',
        contrastText: '#000'
      },
    },
    typography: {
      h2: {
        '@media (max-width: 501px)': {
          fontSize: '40px',
        },
        '@media (max-width: 401px)': {
          fontSize: '30px',
        },
        '@media (max-width: 301px)': {
          fontSize: '20px',
        },
      },
      h6: {
        fontSize: '1rem',
        '@media (min-width: 1280px)': {
          fontSize: '1.25rem',
        },
        '@media (min-width: 1920px)': {
          fontSize: '1.5rem',
        }
      }
    }
  });

  return (
    <ThemeProvider theme={theme}>
      <AppHeader darkTheme={darkMode} onChangeTheme={setDarkMode} />
      <main>
        <Intro />
        <About darkTheme={darkMode} />
        <ExpertiseTypes />
        <Services darkMode={darkMode} />
        <StepByWork />
        <ReasonsForExpertise />
        <News />
        
      </main>
      <footer>
        <FooterComponent />
      </footer>
    </ThemeProvider>
  );
}

export default App;
