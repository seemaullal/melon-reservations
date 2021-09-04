import { useState } from "react";
import { useHistory } from "react-router";
import "date-fns";
import { startOfDay } from "date-fns";
import { Button, Container, Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import DateAdapter from "@mui/lab/AdapterDateFns";
import TextField from "@mui/material/TextField";
import { DateTimePicker, LocalizationProvider } from "@mui/lab";
import AppointmentInfo from "./AppointmentInfo";

export default function Schedule({ username }) {
  const [startTime, setStartTime] = useState(new Date());
  const [endTime, setEndTime] = useState(new Date());
  const [availableAppointments, setAvailableAppointments] = useState([]);
  const useStyles = makeStyles((theme) => ({
    label: {
      justifyContent: "left",
    },
    submitBtn: {
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
        setAvailableAppointments(
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
        {availableAppointments.length > 0 && (
          <AppointmentInfo
            appointments={availableAppointments}
            username={username}
          />
        )}
      </LocalizationProvider>
    </Container>
  );
}
