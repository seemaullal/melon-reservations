import { AppBar, Toolbar, Typography, Button } from "@material-ui/core";
import { Link as RouterLink } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import ScheduleIcon from "@material-ui/icons/Schedule";


export default function Navbar({username, setUsername}) {
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
  return (
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
        {username && (
          <Button color="inherit" onClick={() => setUsername(null)}>
            Log out
          </Button>
        )}
      </Toolbar>
    </AppBar>
  );
}
