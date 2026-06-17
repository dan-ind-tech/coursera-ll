import { Card, Grid, Button } from "@mui/material";

const Testimonial = ({ name, rating }) => {
  return (
    <Grid
      container
      direction="column"
      sx={{
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
      }}
    >
      <Card
        className="testimonial-card"
        component="article"
        aria-labelledby={`${name.toLowerCase()}-testimonial-title`}
        sx={{ maxWidth: 180, maxHeight: 300, padding: 2 }}
      >
        <p aria-label={`Rating ${rating} out of 5`}>{rating}/5</p>
        <h2 id={`${name.toLowerCase()}-testimonial-title`}>{name}</h2>
        <Button
          variant="contained"
          color="primary"
          href="/menu"
          aria-label={`Read ${name}'s review`}
        >
          Review
        </Button>
      </Card>
    </Grid>
  );
};

export default Testimonial;
