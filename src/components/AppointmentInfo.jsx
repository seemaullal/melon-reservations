// import { useState } from "react";
// import { useHistory } from "react-router";
// import "date-fns";
// import { startOfDay } from "date-fns";
import { Button } from "@material-ui/core";
// import { makeStyles } from "@material-ui/core/styles";
// import DateAdapter from "@mui/lab/AdapterDateFns";
// import TextField from "@mui/material/TextField";
// import { DatePicker, LocalizationProvider, TimePicker } from "@mui/lab";
import { DataGrid } from "@mui/x-data-grid";

export default function AppointmentInfo({ appointments, username }) {
  function makeReservation(startTime) {
    const data = JSON.stringify({ startTime, username });
    fetch("/api/reservations/book", {
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
      .then((responseJson) => {
        console.log(responseJson);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }

  const columns = [
    { field: "appointmentInfo", headerName: "Appointment Info", width: 400 },
    {
      field: "schedule",
      headerName: "Make Reservation",
      width: 400,
      renderCell: (params) => (
        <Button
          variant="contained"
          color="primary"
          size="small"
          onClick={() => makeReservation(params.value)}
        >
          Make Reservation
        </Button>
      ),
    },
  ];

  const rows = appointments.map((appointmentTime) => ({
    id: Number(appointmentTime),
    appointmentInfo: appointmentTime.toLocaleString(),
    schedule: appointmentTime,
  }));

  return (
    <div style={{ width: "100%" }}>
      <DataGrid
        autoHeight={true}
        rows={rows}
        columns={columns}
        isRowSelectable={false}
      />
    </div>
  );
}
