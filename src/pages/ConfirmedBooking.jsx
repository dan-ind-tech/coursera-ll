import { Button, Grid, Typography } from "@mui/material";

const ConfirmedBooking = () => {
  return (
    <Grid
      component="section"
      aria-labelledby="booking-confirmed-title"
      height="100vh"
      width="100%"
      alignItems="center"
      paddingTop={10}
      display="flex"
      flexDirection="column"
      gap={4}
    >
      <Typography id="booking-confirmed-title" variant="h4">
        Booking Confirmed!
      </Typography>
      <Typography>Your table reservation has been confirmed.</Typography>
      <Button variant="contained" color="primary" href="/">
        Back to Home
      </Button>
    </Grid>
  );
};

export default ConfirmedBooking;
