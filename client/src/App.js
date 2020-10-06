import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import About from "./pages/About.js"
import RMG from "./pages/RMG.js"
import RCG from "./pages/RCG.js"
import Battles from "./pages/Battles.js"
import 'fontsource-roboto';
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import { AppBar, Toolbar, Typography, Button, ButtonGroup } from '@material-ui/core'
import './App.css';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#000000',
      contrastText: '#9CF6F6'
    },
    secondary: {
      main: '#E8FFB7',
      contrastText: '#F5E9E2'
    }
  }
});

function App() {
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <AppBar position="static">
          <Toolbar>
            <ButtonGroup variant="text" color="secondary" aria-label="text primary button group">
              <Button><Link to="/"><i>Home</i></Link></Button>
              <Button><Link to="/rmg"><i>Random Mayor Generator</i></Link></Button>
              <Button><Link to="/rcg"><i>Random City Generator</i></Link></Button>
              <Button><Link to="/battles"><i>Battles!</i></Link></Button>
            </ButtonGroup>
          </Toolbar>
        </AppBar>
        <Switch>
          <Route exact path="/" component={About} />
          <Route exact path="/rmg" component={RMG} />
          <Route exact path="/rcg" component={RCG} />
          <Route exact path="/battles" components={Battles} />
        </Switch>
      </ThemeProvider>
    </Router>
  );

}

export default App;
