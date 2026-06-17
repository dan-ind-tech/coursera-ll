import { Grid } from "@mui/material";
import BookingForm from "../components/BookingForm";

function Reservations({ availableTimes, dispatchAvailableTimes, submitForm }) {
  return (
    <Grid
      container
      alignItems="center"
      justifyContent="start"
      flexDirection="column"
      gap={4}
      minHeight="100vh"
      paddingX={2}
    >
      <h1>Reservations</h1>

      <BookingForm
        availableTimes={availableTimes}
        dispatchAvailableTimes={dispatchAvailableTimes}
        submitForm={submitForm}
      />
    </Grid>
  );
}

export default Reservations;
