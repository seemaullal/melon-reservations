import { useState } from "react";
import "date-fns";
import { startOfDay } from "date-fns";
import { Button, Container, Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import DateFnsUtils from "@date-io/date-fns";
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  KeyboardDatePicker,
} from "@material-ui/pickers";

export default function Schedule() {
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

  const classes = useStyles();
  return (
    <Container maxWidth="lg">
      <MuiPickersUtilsProvider utils={DateFnsUtils}>
        <Grid
          container
          direction="column"
          justifyContent="center"
          alignItems="flex-start"
        >
          <div className={classes.label} htmlFor="date-picker-dialog">
            Pick a date for your reservation:
          </div>
          <KeyboardDatePicker
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
            variant="static"
          />
          <KeyboardTimePicker
            margin="normal"
            id="time-picker"
            label="Start time"
            value={startTime}
            onChange={(time) => setStartTime(time)}
            KeyboardButtonProps={{
              "aria-label": "change start time",
            }}
          />
          <KeyboardTimePicker
            margin="normal"
            id="time-picker"
            label="End time"
            value={endTime}
            onChange={(time) => setEndTime(time)}
            KeyboardButtonProps={{
              "aria-label": "change end time",
            }}
          />
          <Button variant="contained" className={classes.submitBtn}>
            Search for reservations
          </Button>
        </Grid>
        <div>
          <p>Selected date: {selectedDate.toDateString()}</p>
          <p>
            Time: {startTime.toTimeString()}–{endTime.toTimeString()}
          </p>
        </div>
      </MuiPickersUtilsProvider>
    </Container>
  );
}
