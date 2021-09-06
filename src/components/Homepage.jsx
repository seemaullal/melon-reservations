import { Container, Typography } from "@material-ui/core";
import { useHistory } from "react-router";
import { useUsername } from "../hooks/useUsername";

export default function Homepage() {
  const { username } = useUsername();
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
