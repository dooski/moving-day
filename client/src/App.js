import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link, Redirect } from "react-router-dom";
import About from "./pages/About.js"
import RMG from "./pages/RMG.js"
import RCG from "./pages/RCG.js"
import Game from "./pages/Game.js"
import Login from "./pages/Login.js"
import { NotificationContainer, NotificationManager } from 'react-notifications';
import 'react-notifications/lib/notifications.css';
import 'fontsource-roboto';
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import { AppBar, Toolbar, Typography, Button, ButtonGroup } from '@material-ui/core'
import './App.css';
import API from "./utils/API"

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

  const Logout = e => {
    console.log()
    API.logoutUser()
      .then((res) => {
        console.log(res.data);
        NotificationManager.info("smell ya later", "bye bye!", 4000)
      })
      .catch((err) => {
        console.log(err)
      })
  }
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <AppBar position="static">
          <Toolbar>
            <ButtonGroup variant="text" color="secondary" aria-label="text primary button group">
              <Button><Link to="/"><i>Home</i></Link></Button>
              {/* <Button><Link to="/rmg"><i>Random Mayor Generator</i></Link></Button>
              <Button><Link to="/rcg"><i>Random City Generator</i></Link></Button> */}
              <Button><Link to="/game"><i>Alpha</i></Link></Button>
              <Button onClick={Logout}>Logout</Button>
            </ButtonGroup>
          </Toolbar>
        </AppBar>
        <Switch>
          <Route exact path="/" component={About} />
          <Route exact path="/rmg" component={RMG} />
          <Route exact path="/rcg" component={RCG} />
          <Route exact path="/game" component={Game} />
          <Route exact path="/login" component={Login} />
        </Switch>
        <NotificationContainer />
      </ThemeProvider>
    </Router>
  );

}

export default App;
