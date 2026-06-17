import { Grid } from "@mui/material";
import BookingForm from "../components/BookingForm";

function Reservations({ availableTimes, dispatchAvailableTimes }) {
  return (
    <Grid
      container
      sx={{
        alignItems: "center",
        justifyContent: "start",
        flexDirection: "column",
        gap: 4,
        height: "100vh",
      }}
    >
      <h1>Reservations</h1>

      <BookingForm
        availableTimes={availableTimes}
        dispatchAvailableTimes={dispatchAvailableTimes}
      />
    </Grid>
  );
}

export default Reservations;
