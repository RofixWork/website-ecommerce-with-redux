import React from "react";
import {
  makeStyles,
  Container,
  Grid,
  Box,
  Typography,
  Button,
  ButtonGroup,
} from "@material-ui/core";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import AddIcon from "@material-ui/icons/Add";
import RemoveIcon from "@material-ui/icons/Remove";
const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: "80vh",
    padding: "20px 0 ",
    width: "100%",
    backgroundColor: "#eeeeee",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    [theme.breakpoints.down("md")]: {
      height: "auto",
    },
    "& .MuiTypography-h4": {
      fontWeight: 700,
    },
    "& .MuiTypography-h6": {
      color: "#dc9814",
      fontSize: 24,
    },
  },
  imgProduct: {
    width: "100%",
    height: "550px",
    [theme.breakpoints.down("xs")]: {
      width: "90vw",
      height: "auto",
    },
    "& img": {
      width: "100%",
      height: "100%",
      objectFit: "cover",
    },
  },
  btnCart: {
    backgroundColor: "#333",
    color: "white",
    "&:hover": {
      backgroundColor: "#333",
      color: "white",
    },
  },
}));
const ProductDetails = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const { product } = useSelector((state) => state.products);
  const { id } = useParams();
  // qty
  const [quantity, setQuantity] = React.useState(1);

  // increment and Decrement
  const Increment = () => setQuantity((prev) => prev + 1);
  const Decrement = () => {
    if (quantity > 1) {
      setQuantity((prev) => prev - 1);
    }
  };

  React.useEffect(() => {
    dispatch({ type: "PRODUCT", payload: id });
  }, [dispatch, id]);
  return (
    <>
      <div className={classes.root}>
        <Container maxWidth="lg">
          <Grid container spacing={2}>
            <Grid item lg={5} md={6} sm={4}>
              <Box className={classes.imgProduct}>
                <img src={product.img} alt={product.title} />
              </Box>
            </Grid>
            <Grid item lg={7} md={6} sm={8}>
              <Box>
                <Typography variant="h4" gutterBottom>
                  {product.title}
                </Typography>
                <Typography variant="h6">${product.discountPrice}</Typography>
                <Typography variant="subtitle1">{product.desc}</Typography>
                <Box marginTop={2} display="flex" alignItems="center">
                  <Box>
                    <ButtonGroup
                      size="large"
                      variant="outlined"
                      color="default"
                    >
                      <Button onClick={Decrement}>
                        <RemoveIcon fontSize="small" />
                      </Button>
                      <Button>
                        <Typography variant="subtitle1">{quantity}</Typography>
                      </Button>
                      <Button onClick={Increment}>
                        <AddIcon fontSize="small" />
                      </Button>
                    </ButtonGroup>
                  </Box>
                  <Box marginLeft={1} display="flex" flexGrow="1">
                    <Button
                      size="large"
                      className={classes.btnCart}
                      variant="contained"
                      fullWidth
                      onClick={() =>
                        dispatch({
                          type: "ADD_TO_CART",
                          payload: { product, quantity },
                        })
                      }
                    >
                      add to cart
                    </Button>
                  </Box>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </div>
    </>
  );
};

export default ProductDetails;
