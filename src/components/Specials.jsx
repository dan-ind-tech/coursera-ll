import { Typography, Grid, Button } from "@mui/material";
import Special from "./Special";

const Specials = () => {
  const specials = [
    {
      id: 1,
      name: "Salad",
      description:
        "A refreshing salad with crispy lettuce, peppers, olives, and our Chicago-style feta cheese, garnished with crunchy garlic and rosemary croutons.",
      image: "/assets/salad.jpg",
    },
    {
      id: 2,
      name: "Bread",
      description:
        "Grilled bread smeared with garlic and seasoned with salt and olive oil, topped with a delicious mix of tomatoes, basil, and mozzarella cheese.",
      image: "/assets/bread.jpg",
    },
    {
      id: 3,
      name: "Entree",
      description:
        "This comes straight from grandma’s recipe book, every last ingredient has been sourced and is as authentic as can be imagined.",
      image: "/assets/entree.jpg",
    },
  ];

  return (
    <Grid
      className="specials-section"
      component="section"
      aria-labelledby="specials-title"
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
        <Typography id="specials-title" variant="h4" component="h2">
          Specials
        </Typography>

        <Button
          variant="contained"
          color="primary"
          href="/menu"
          aria-label="View the Little Lemon online menu"
        >
          Online Menu
        </Button>
      </Grid>
      <Grid
        component="ul"
        aria-label="Little Lemon specials"
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
        {specials.map((special) => (
          <Grid key={special.id} component="li">
            <Special
              image={special.image}
              name={special.name}
              description={special.description}
            />
          </Grid>
        ))}
      </Grid>
    </Grid>
  );
};

export default Specials;
