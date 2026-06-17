import { Card, Grid } from "@mui/material";

const Special = ({ image, name, description }) => {
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
        className="special-card"
        component="article"
        aria-labelledby={`${name.toLowerCase()}-special-title`}
        sx={{ maxWidth: 180, maxHeight: 300, padding: 2 }}
      >
        <img
          src={image}
          alt={`${name} special`}
          style={{ maxWidth: 180, maxHeight: 200 }}
        />
        <h2 id={`${name.toLowerCase()}-special-title`}>{name}</h2>
        <p>{description}</p>
      </Card>
    </Grid>
  );
};

export default Special;
