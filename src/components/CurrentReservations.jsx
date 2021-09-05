import { useState, useEffect } from "react";
import { Button, Container, Typography } from "@material-ui/core";
import { DataGrid } from "@mui/x-data-grid";
import { useHistory } from "react-router";

function Reservations({ reservations, setReservations }) {
  function deleteReservation(reservationId) {
    // remove the reservation so it is no longer displayed
    setReservations((reservations) => {
      return reservations.filter(
        (reservation) => reservation.reservation_id !== reservationId
      );
    });
    fetch(`/api/reservations/${reservationId}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((responseJson) => {
        console.log(responseJson);
      });
  }

  const columns = [
    { field: "reservationTime", headerName: "Reservation Info", width: 400 },
    {
      field: "cancelReservation",
      headerName: "Cancel Reservation",
      width: 400,
      renderCell: ({ id: reservationId }) => (
        <Button
          variant="contained"
          color="primary"
          size="small"
          onClick={(evt) => deleteReservation(reservationId)}
        >
          Cancel Reservation
        </Button>
      ),
    },
  ];

  const rows = reservations.map((reservation) => ({
    id: reservation.reservation_id,
    reservationTime: new Date(reservation.start_time).toLocaleString(),
    cancelReservation: reservation.reservation_id,
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

export default function CurrentReservations({ username }) {
  const history = useHistory();
  const [reservations, setReservations] = useState([]);

  if (!username) {
    history.push("/login");
  }

  useEffect(() => {
    fetch(`/api/user/${username}/reservations/`)
      .then((response) => response.json())
      .then((data) => setReservations(data));
  }, [username]);
  return (
    <Container component="main" maxWidth="md">
      {reservations.length === 0 ? (
        <Typography component="h1" variant="h5">
          No reservations yet. Make one!
        </Typography>
      ) : (
        <>
          <Typography component="h1" variant="h5">
            Your reservations:
          </Typography>
          <Reservations
            reservations={reservations}
            setReservations={setReservations}
          />
        </>
      )}
    </Container>
  );
}
