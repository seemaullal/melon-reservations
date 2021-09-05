import { useState } from "react";
import { Button, Container, TextField, Typography } from "@material-ui/core";
import { useHistory } from "react-router";

export default function LogIn(props) {
  const history = useHistory();
  const [currentUsername, setCurrentUsername] = useState("");

  function loginUser(event) {
    event.preventDefault();
    props.setUsername(currentUsername);
    history.push("/");
  }

  return (
    <Container component="main" maxWidth="xs">
      <div>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <form noValidate>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="username"
            label="Username"
            name="username"
            autoFocus
            onChange={(evt) => setCurrentUsername(evt.target.value)}
            value={currentUsername}
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            onClick={loginUser}
          >
            Log In
          </Button>
        </form>
      </div>
    </Container>
  );
}
