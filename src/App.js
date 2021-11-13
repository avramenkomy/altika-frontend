import React, { useState } from 'react';
import { ThemeProvider, createTheme } from '@material-ui/core/styles';
import { Paper } from '@material-ui/core';

import AppHeader from './components/appHeader/AppHeader';

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
    }
  });
  console.log(theme)

  return (
    <ThemeProvider theme={theme}>
      <AppHeader darkTheme={darkMode} onChangeTheme={setDarkMode} />
      <Paper
        style={{
          height: '100vh',
          width: '90vw',
          margin: "1rem auto 1rem auto"
        }}
      />
    </ThemeProvider>
  );
}

export default App;
