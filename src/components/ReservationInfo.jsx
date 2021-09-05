import { useHistory } from "react-router";
import { Button } from "@material-ui/core";
import { DataGrid } from "@mui/x-data-grid";

export default function ReservationInfo({ reservations, username, setError }) {
  const history = useHistory();

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
        if (responseJson.success) {
          history.push("/current_reservations");
        } else {
          setError(responseJson.error)
        }
      })
      .catch((error) => {
        setError(error)
      });
  }

  const columns = [
    { field: "reservationInfo", headerName: "Reservation Info", width: 400 },
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

  const rows = reservations.map((reservationTime) => ({
    id: Number(reservationTime),
    reservationInfo: reservationTime.toLocaleString(),
    schedule: reservationTime,
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
