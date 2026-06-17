import { Typography, Grid } from "@mui/material";
import Testimonial from "./Testimonial";

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      rating: 4,
      name: "Adam",
    },
    {
      id: 2,
      rating: 5,
      name: "Bella",
    },
    {
      id: 3,
      rating: 4.5,
      name: "Tony",
    },
  ];

  return (
    <Grid
      className="testimonials-section"
      component="section"
      aria-labelledby="testimonials-title"
      container
      alignItems="center"
      justifyContent="center"
      gap={4}
    >
      <Grid
        textAlign="center"
        width="100%"
        flexDirection="row"
        display="flex"
        alignItems="center"
        justifyContent="space-between"
      >
        <Typography id="testimonials-title" variant="h4" component="h2">
          Testimonials
        </Typography>
      </Grid>
      <Grid
        component="ul"
        aria-label="Customer testimonials"
        container
        alignItems="center"
        justifyContent="center"
        gap={4}
        sx={{
          listStyle: "none",
          margin: 0,
          padding: 0,
        }}
      >
        {testimonials.map((testimonial) => (
          <Grid key={testimonial.id} component="li">
            <Testimonial name={testimonial.name} rating={testimonial.rating} />
          </Grid>
        ))}
      </Grid>
    </Grid>
  );
};

export default Testimonials;
