import React from "react";
import { useSelector } from "react-redux";
import {
  Container,
  Grid,
  Box,
  Typography,
  makeStyles,
} from "@material-ui/core";
import { Link } from "react-router-dom";
import { SearchInput } from "evergreen-ui";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: "80px 0",
    "& .MuiTypography-h4": {
      fontWeight: 700,
      fontSize: 28,
      color: "#333",
    },
  },
  content: {
    cursor: "pointer",
    overflow: "hidden",
    borderRadius: "5px",
    transition: "transform 200ms linear",

    "&:hover": {
      transform: "translateY(-8px)",
      transition: "transform 200ms linear",
    },
  },
  imgHeader: {
    overflow: "hidden",
    width: "100%",
    height: "400px",
    "& img": {
      width: "100%",
      height: "100%",
      objectFit: "cover",
      transition: "transform 200ms linear",
      "&:hover": {
        transform: "scale(1.1)",
        transition: "transform 200ms linear",
      },
    },
  },
  info: {
    padding: "10px ",
    backgroundColor: "#fff",
    "& .MuiTypography-h6": {
      fontSize: 18,
      color: "#635d5d",
      transition: "color .3s ease-in",
      "&:hover": {
        transition: "color .3s ease-in",
        color: "#333",
      },
    },
  },
  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    [theme.breakpoints.down("xs")]: {
      flexDirection: "column",
      alignItems: "flex-start",
      gap: 10,
    },
  },
  searchInput: {
    [theme.breakpoints.down("xs")]: {
      width: "90vw",
    },
  },
}));

const Products = () => {
  const { products } = useSelector((state) => state.products);
  const classes = useStyles();
  //value Searchinput
  const [name, setName] = React.useState("");

  // function filter items with value searchInput
  const filteredProducts = products.filter((pr) =>
    pr.title.toLowerCase().includes(name.toLowerCase())
  );

  return (
    <Box className={classes.root}>
      <Container maxWidth="lg">
        {/* Header */}
        <Box marginBottom={2} className={classes.header}>
          <Box>
            <Typography variant="h4">All Products</Typography>
          </Box>
          <Box>
            <SearchInput
              placeholder="Search by Name..."
              className={classes.searchInput}
              height={40}
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </Box>
        </Box>
        {/* Header */}

        {/* all Product */}
        <Grid container spacing={2}>
          {filteredProducts.length ? (
            filteredProducts.map((pr) => {
              const { id, title, img, discountPrice } = pr;
              return (
                <Grid item xs={12} sm={6} md={3} lg={3} key={id}>
                  <Link to={`details/${id}`}>
                    <Box className={classes.content}>
                      <Box className={classes.imgHeader}>
                        <img src={img} alt={title} />
                      </Box>
                      <Box className={classes.info}>
                        <Typography variant="h6">{title}</Typography>
                        <Typography variant="subtitle1">
                          ${discountPrice}
                        </Typography>
                      </Box>
                    </Box>
                  </Link>
                </Grid>
              );
            })
          ) : (
            <Box
              height={200}
              width="100%"
              display="flex"
              justifyContent="center"
              alignItems="center"
            >
              <Typography variant="h5" color="initial">
                There is no Product with this Name
              </Typography>
            </Box>
          )}
        </Grid>
        {/* all Product */}
      </Container>
    </Box>
  );
};

export default Products;
