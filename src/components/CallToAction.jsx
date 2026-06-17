import { Typography, Grid, Button } from "@mui/material";

const CallToAction = () => {
  return (
    <Grid
      className="hero-section"
      component="section"
      aria-labelledby="hero-title"
      container
      sx={{ alignItems: "center", justifyContent: "center", gap: 4 }}
    >
      <Grid
        sx={{
          width: "100%",
          flexDirection: "column",
          display: "flex",
          alignItems: "start",
          flex: 1,
        }}
      >
        <Typography id="hero-title" variant="h4" component="h1">
          Little Lemon
        </Typography>
        <Typography variant="h6" component="p">
          Chicago
        </Typography>
        <Typography variant="body1" component="p">
          We are a family owned Mediterranean restaurant, focused on traditional
          recipes served with a modern twist.
        </Typography>

        <Button
          variant="contained"
          color="primary"
          href="/reservations"
          aria-label="Reserve a table at Little Lemon"
          sx={{ marginTop: "75px", marginBottom: "15px" }}
        >
          Reserve a Table
        </Button>
      </Grid>
      <Grid sx={{ flex: 1 }}>
        <img
          src="/assets/salad.jpg"
          alt="Little Lemon Mediterranean salad"
          style={{ width: "300px" }}
        />
      </Grid>
    </Grid>
  );
};

export default CallToAction;
