import { useState, useEffect } from "react";
import { Switch, Route } from "react-router-dom";
import { CssBaseline } from "@material-ui/core";
import { createTheme, ThemeProvider } from "@material-ui/core/styles";
import { useHistory } from "react-router";
import CurrentReservations from "./components/CurrentReservations";
import Homepage from "./components/Homepage";
import LogIn from "./components/LogIn";
import Navbar from "./components/Navbar";
import Schedule from "./components/Schedule";

const theme = createTheme({
  palette: {
    primary: {
      main: "#ffa177",
    },
  },
});

function App() {
  const history = useHistory();
  const [username, setUsername] = useState(null);

  useEffect(() => {
    if (!username) {
      history.push("/login");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [username]);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Navbar setUsername={setUsername} username={username} />
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
