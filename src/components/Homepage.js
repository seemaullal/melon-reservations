import { Container, Typography } from "@material-ui/core";
import { useHistory } from "react-router";

export default function Homepage({ username }) {
  const history = useHistory();

  if (!username) {
    history.push("/login");
  }

  return (
    <Container maxWidth="md">
      <Typography variant="h3">Welcome, {username}!</Typography>
    </Container>
  );
}
