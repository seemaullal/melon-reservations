import "./App.css";
import {
  BrowserRouter,
  Switch,
  Route,
  Link as RouterLink,
} from "react-router-dom";
import {
  AppBar,
  Toolbar,
  Typography,
  CssBaseline,
  Button,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import ScheduleIcon from "@material-ui/icons/Schedule";
import Schedule from "./components/Schedule";

function App() {
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

  return (
    <BrowserRouter>
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
          <Schedule />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
