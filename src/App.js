import "./App.css";
import { useState, useEffect } from "react";
import { Switch, Route, Link as RouterLink } from "react-router-dom";
import {
  AppBar,
  Toolbar,
  Typography,
  CssBaseline,
  Button,
} from "@material-ui/core";
import {
  makeStyles,
  createTheme,
  ThemeProvider,
} from "@material-ui/core/styles";
import ScheduleIcon from "@material-ui/icons/Schedule";
import green from "@material-ui/core/colors/green";
import { useHistory } from "react-router";
import CurrentReservations from "./components/CurrentReservations";
import LogIn from "./components/LogIn";
import Schedule from "./components/Schedule";
import Homepage from "./components/Homepage";

const theme = createTheme({
  palette: {
    primary: {
      main: "#ffa177",
    },
    secondary: {
      main: green["A100"],
    },
  },
});

function App() {
  const history = useHistory();
  const [username, setUsername] = useState();
  const useStyles = makeStyles((theme) => ({
    appBar: {
      marginBottom: theme.spacing(2),
    },
    icon: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
      textDecoration: "none",
    },
  }));

  const classes = useStyles();

  useEffect(() => {
    if (!username) {
      history.push("/login");
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [username]);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AppBar position="static" className={classes.appBar}>
        <Toolbar>
          <ScheduleIcon className={classes.icon} />
          <Typography
            variant="h6"
            color="inherit"
            noWrap
            className={classes.title}
            to="/"
            component={RouterLink}
          >
            Melon Tasting Scheduler
          </Typography>
          <Button to="/schedule" component={RouterLink} color="inherit">
            Schedule Tasting
          </Button>
          <Button
            to="/current_reservations"
            component={RouterLink}
            color="inherit"
          >
            Current Reservations
          </Button>
          <Button color="inherit" onClick={() => setUsername(null)}>
            Log out
          </Button>
        </Toolbar>
      </AppBar>
      <Switch>
        <Route path="/schedule">
          <Schedule username={username} />
        </Route>
        <Route path="/current_reservations">
          <CurrentReservations username={username} />
        </Route>
        <Route path="/login">
          <LogIn setUsername={setUsername} />
        </Route>
        <Route path="/">
          <Homepage username={username} />
        </Route>
      </Switch>
    </ThemeProvider>
  );
}

export default App;
