import "./App.css";
import { useState } from "react";
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
import Schedule from "./components/Schedule";
import LogIn from "./components/LogIn";

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
    },
  }));

  const classes = useStyles();

  if (!username) {
    history.push("/login");
  }

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
          >
            Melon Tasting Scheduler
          </Typography>
          <Button to="/schedule" component={RouterLink} color="inherit">
            Schedule Tasting
          </Button>
        </Toolbar>
      </AppBar>
      <Switch>
        <Route path="/schedule">
          <Schedule isLoggedIn={username} />
        </Route>
        <Route path="/login">
          <LogIn setUsername={setUsername} />
        </Route>
        <>
          <Typography variant="h3">Welcome, {username}!</Typography>
        </>
      </Switch>
    </ThemeProvider>
  );
}

export default App;
