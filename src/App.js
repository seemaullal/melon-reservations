import "./App.css";
import { Fragment } from "react";
import { AppBar, Toolbar, Typography, CssBaseline } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import ScheduleIcon from "@material-ui/icons/Schedule";

function App() {
  const useStyles = makeStyles((theme) => ({
    icon: {
      marginRight: theme.spacing(2),
    },
  }));

  const classes = useStyles();

  return (
    <Fragment>
      <CssBaseline />
      <AppBar position="absolute">
        <Toolbar>
          <ScheduleIcon className={classes.icon} />
          <Typography variant="h6" color="inherit" noWrap>
            Melon Tasting Scheduler
          </Typography>
        </Toolbar>
      </AppBar>
    </Fragment>
  );
}

export default App;
