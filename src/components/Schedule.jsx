import { useState } from "react";
import { useHistory } from "react-router";
import "date-fns";
import { startOfDay } from "date-fns";
import { Button, Container, Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { Alert, AlertTitle, Stack, TextField } from "@mui/material";
import DateAdapter from "@mui/lab/AdapterDateFns";
import { DateTimePicker, LocalizationProvider } from "@mui/lab";
import ReservationInfo from "./ReservationInfo";

export default function Schedule({ username }) {
  const [startTime, setStartTime] = useState(new Date());
  const [endTime, setEndTime] = useState(new Date());
  const [error, setError] = useState(null);
  const [availableReservations, setAvailableReservations] = useState([]);
  const useStyles = makeStyles((theme) => ({
    label: {
      justifyContent: "left",
    },
    submitBtn: {
      marginBottom: "10px",
      backgroundColor: "#00745d",
      color: "white",
      "&:hover": {
        backgroundColor: "#015041",
        borderColor: "#54ffde",
        boxShadow: "none",
      },
    },
  }));

  function onSubmit() {
    setError(null);
    const data = JSON.stringify({ startTime, endTime });
    fetch("/api/reservations", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: data,
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        setAvailableReservations(
          data.map((dateString) => new Date(dateString))
        );
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }
  const classes = useStyles();

  const history = useHistory();
  if (!username) {
    history.push("/login");
  }

  return (
    <Container maxWidth="lg">
      <LocalizationProvider dateAdapter={DateAdapter}>
        <Grid
          container
          direction="column"
          justifyContent="center"
          alignItems="center"
          spacing={4}
        >
          <Grid item className={classes.label} htmlFor="date-picker-dialog">
            Pick a date for your reservation:
          </Grid>
          <Grid container direction="row" spacing={3} justifyContent="center">
            <Grid item>
              <DateTimePicker
                renderInput={(props) => <TextField {...props} />}
                label="DateTimePicker"
                value={startTime}
                onChange={(time) => setStartTime(time)}
                minDate={startOfDay(new Date())}
              />
            </Grid>
            <Grid item>
              <DateTimePicker
                renderInput={(props) => <TextField {...props} />}
                label="DateTimePicker"
                value={endTime}
                onChange={(time) => setEndTime(time)}
                minDate={startOfDay(new Date())}
              />
            </Grid>
          </Grid>
          <Grid item>
            <Button
              variant="contained"
              className={classes.submitBtn}
              onClick={onSubmit}
            >
              Search for reservations
            </Button>
          </Grid>
        </Grid>
        {error && (
          <Stack
            sx={{ width: "100%", marginBottom: "10px" }}
            spacing={4}
          >
            <Alert severity="error">
              <AlertTitle>Error</AlertTitle>
              {error}
            </Alert>
          </Stack>
        )}
        {availableReservations.length > 0 && (
          <ReservationInfo
            reservations={availableReservations}
            username={username}
            setError={setError}
          />
        )}
      </LocalizationProvider>
    </Container>
  );
}
