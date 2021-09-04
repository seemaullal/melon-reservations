import { useState } from "react";
import { useHistory } from "react-router";
import "date-fns";
import { startOfDay } from "date-fns";
import { Button, Container, Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import DateAdapter from "@mui/lab/AdapterDateFns";
import TextField from "@mui/material/TextField";
import { DatePicker, LocalizationProvider, TimePicker } from "@mui/lab";

export default function Schedule({ isLoggedIn }) {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [startTime, setStartTime] = useState(new Date());
  const [endTime, setEndTime] = useState(new Date());
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
    const date = selectedDate.toISOString();
    console.log(date)
    const data = JSON.stringify({ date, startTime, endTime });
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
        console.log("Success:", data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }

  const classes = useStyles();

  const history = useHistory();
  if (!isLoggedIn) {
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
          <Grid item>
            <DatePicker
              margin="normal"
              id="date-picker-dialog"
              label="Date picker dialog"
              format="MM/dd/yyyy"
              value={selectedDate}
              onChange={(date) => setSelectedDate(date)}
              KeyboardButtonProps={{
                "aria-label": "change date",
              }}
              minDate={startOfDay(new Date())}
              renderInput={(params) => <TextField {...params} />}
              variant="static"
            />
          </Grid>
          <Grid container direction="row" spacing={3} justifyContent="center">
            <Grid item>
              <TimePicker
                margin="normal"
                label="Start time"
                value={startTime}
                onChange={(time) => setStartTime(time)}
                renderInput={(params) => <TextField {...params} />}
                KeyboardButtonProps={{
                  "aria-label": "change start time",
                }}
                sx={{ marginRight: 5 }}
              />
            </Grid>
            <Grid item>
              <TimePicker
                margin="normal"
                label="End time"
                value={endTime}
                onChange={(time) => setEndTime(time)}
                renderInput={(params) => <TextField {...params} />}
                KeyboardButtonProps={{
                  "aria-label": "change end time",
                }}
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
        <div>
          <p>Selected date: {selectedDate.toDateString()}</p>
          <p>
            Time: {startTime.toTimeString()}–{endTime.toTimeString()}
          </p>
        </div>
      </LocalizationProvider>
    </Container>
  );
}
