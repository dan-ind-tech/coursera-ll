import { Typography, Grid } from "@mui/material";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <Grid
      className="site-footer"
      component="footer"
      container
      alignItems="center"
      flexDirection="row"
      flexWrap="nowrap"
    >
      <Grid container marginRight={4} width="200px">
        <img
          src="/assets/entree.jpg"
          alt="Little Lemon plated entree"
          style={{
            width: "200px",
          }}
        />
      </Grid>
      <Grid
        component="nav"
        aria-labelledby="footer-navigation-title"
        flexDirection="column"
        display="flex"
        alignSelf="start"
        width="150px"
        gap={1}
      >
        <Typography id="footer-navigation-title" variant="h6" component="h2">
          Navigation
        </Typography>
        <Link
          to="/"
          aria-label="Go to home page"
          style={{ textDecoration: "none", color: "inherit" }}
        >
          Home
        </Link>
        <Link
          to="/about"
          aria-label="Go to about page"
          style={{ textDecoration: "none", color: "inherit" }}
        >
          About
        </Link>
        <Link
          to="/menu"
          aria-label="Go to menu page"
          style={{ textDecoration: "none", color: "inherit" }}
        >
          Menu
        </Link>
        <Link
          to="/reservations"
          aria-label="Go to reservations page"
          style={{ textDecoration: "none", color: "inherit" }}
        >
          Reservations
        </Link>
      </Grid>
      <Grid
        component="nav"
        aria-labelledby="footer-contact-title"
        flexDirection="column"
        display="flex"
        alignSelf="start"
        width="150px"
        gap={1}
      >
        <Typography id="footer-contact-title" variant="h6" component="h2">
          Contact
        </Typography>
        <Link
          to="/contact"
          aria-label="Contact Little Lemon"
          style={{ textDecoration: "none", color: "inherit" }}
        >
          Contact Us
        </Link>
        <Link
          to="/locations"
          aria-label="Find Little Lemon locations"
          style={{ textDecoration: "none", color: "inherit" }}
        >
          Locations
        </Link>
        <Link
          to="/careers"
          aria-label="View Little Lemon careers"
          style={{ textDecoration: "none", color: "inherit" }}
        >
          Careers
        </Link>
      </Grid>
      <Grid
        component="nav"
        aria-labelledby="footer-social-title"
        flexDirection="column"
        display="flex"
        alignSelf="start"
        width="150px"
        gap={1}
      >
        <Typography id="footer-social-title" variant="h6" component="h2">
          Social Media
        </Typography>
        <Link
          to="/facebook"
          aria-label="Visit Little Lemon on Facebook"
          style={{ textDecoration: "none", color: "inherit" }}
        >
          Facebook
        </Link>
        <Link
          to="/twitter"
          aria-label="Visit Little Lemon on Twitter"
          style={{ textDecoration: "none", color: "inherit" }}
        >
          Twitter
        </Link>
        <Link
          to="/instagram"
          aria-label="Visit Little Lemon on Instagram"
          style={{ textDecoration: "none", color: "inherit" }}
        >
          Instagram
        </Link>
      </Grid>
    </Grid>
  );
};

export default Footer;
