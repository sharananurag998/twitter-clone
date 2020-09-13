import React from 'react';
import './App.css';
import Login from './Components/Login/Login';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#1A91DA'
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <Login />
      </div>
    </ThemeProvider>
  );
}

export default App;
