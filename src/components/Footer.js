import { makeStyles, Container, Typography } from "@material-ui/core";
import React from "react";
const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: "#222",
    color: "white",
    padding: "20px 0",
    width: "100%",
  },
}));
const Footer = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Container maxWidth="lg">
        <Typography variant="h6" align="center">
          Rofix Street Workout &copy; 2021-2022
        </Typography>
      </Container>
    </div>
  );
};

export default Footer;
