import React from 'react';
import { render } from 'react-dom';
import './index.css';
import App from './App';
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles'
import { green } from '@material-ui/core/colors'


const theme = createMuiTheme({
    palette: {
      primary: green
    }
})
  
render(
    <MuiThemeProvider theme={theme}>
      <App />
    </MuiThemeProvider>,
    document.getElementById('root')
);