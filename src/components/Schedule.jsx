import { useState } from "react";
import "date-fns";
import { Container } from "@material-ui/core";
import DateFnsUtils from "@date-io/date-fns";
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  KeyboardDatePicker,
} from "@material-ui/pickers";

export default function Schedule() {
  const [selectedDate, setSelectedDate] = useState(new Date());

  return (
    <Container maxWidth="lg">
      <MuiPickersUtilsProvider utils={DateFnsUtils}>
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
        />
        <KeyboardTimePicker
          margin="normal"
          id="time-picker"
          label="Start time"
          value={selectedDate}
          onChange={(time) => setSelectedDate(time)}
          KeyboardButtonProps={{
            "aria-label": "change start time",
          }}
        />
        <KeyboardTimePicker
          margin="normal"
          id="time-picker"
          label="End time"
          value={selectedDate}
          onChange={(time) => setSelectedDate(time)}
          KeyboardButtonProps={{
            "aria-label": "change end time",
          }}
        />
      </MuiPickersUtilsProvider>
    </Container>
  );
}
