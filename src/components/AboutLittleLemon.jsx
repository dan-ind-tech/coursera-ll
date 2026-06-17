import { Typography, Grid } from "@mui/material";

const AboutLittleLemon = () => {
  return (
    <Grid
      className="about-section"
      component="section"
      aria-labelledby="about-title"
      container
      alignItems="center"
      justifyContent="center"
      flexDirection="row"
      flexWrap="nowrap"
    >
      <Grid
        textAlign="center"
        flexDirection="column"
        display="flex"
        alignItems="start"
        flex={1}
      >
        <Typography id="about-title" variant="h4" component="h2">
          Little Lemon
        </Typography>
        <Typography variant="h4" component="h2">
          Chicago
        </Typography>
        <Typography variant="body1" component="p" width="50%">
          Little Lemon was opened in 1995 by the fictional family of Mario and
          Adrian, who wanted to bring the flavors of the Mediterranean to their
          local community. The restaurant has since become a beloved fixture in
          the neighborhood, known for its warm hospitality and delicious food.
        </Typography>
      </Grid>
      <Grid className="about-image-stack" container flex={1}>
        <img src="/assets/entree.jpg" alt="Little Lemon restaurant entree" />
        <img src="/assets/fish.jpg" alt="Grilled fish dish at Little Lemon" />
      </Grid>
    </Grid>
  );
};

export default AboutLittleLemon;
