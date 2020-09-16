import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home.js"
import MGB from "./components/MayorGeneratorBox"
import logo from './logo.svg';
import 'fontsource-roboto';
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import { AppBar, Box, Toolbar, Typography, Button, IconButton } from '@material-ui/core'
import './App.css';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#d44d5c',
      contrastText: '#f5e9e2'
    },
    secondary: {
      main: '#698F3F',
      contrastText: '#F5E9E2'
    }
    // error: {
    //   main: '#0b0014',
    //   contrastText: '#d44d5c'
    // },
    // info: {
    //   main: '#f5e9e2',
    //   contrastText: '#0b0014'
    // },
  }
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h3">
            MOVING DAY
          </Typography>
          <Typography variant="h6">
            Random Mayor Generator
          </Typography>
        </Toolbar>
      </AppBar>
      <Box m={5}>
        <MGB />
      </Box>
    </ThemeProvider>
  );

}

export default App;
