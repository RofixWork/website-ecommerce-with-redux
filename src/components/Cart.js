import {
  makeStyles,
  Container,
  Box,
  Typography,
  Grid,
  Button,
  ButtonGroup,
  IconButton,
} from "@material-ui/core";
import React from "react";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import { useSelector, useDispatch } from "react-redux";
import AddIcon from "@material-ui/icons/Add";
import RemoveIcon from "@material-ui/icons/Remove";
import BackspaceOutlinedIcon from "@material-ui/icons/BackspaceOutlined";
const useStyles = makeStyles((theme) => ({
  root: {
    padding: "40px 0",
  },
  img: {
    width: 80,
    height: 100,
  },
  head: {
    padding: 5,
    background: "#333",
    color: "white",
  },
  info: {
    padding: 10,
    background: "white",
  },
}));
const Cart = () => {
  const classes = useStyles();
  const { products, totalPrice, totalQuantities } = useSelector(
    (state) => state.cart
  );
  const dispatch = useDispatch();
  const increment = (id) => dispatch({ type: "INC", payload: id });
  const decrement = (id) => dispatch({ type: "DEC", payload: id });
  const removeProduct = (id) => dispatch({ type: "REMOVE", payload: id });
  return (
    <div className={classes.root}>
      <Container maxWidth="xl">
        <Box marginBottom={2}>
          <Typography variant="h5">Your Cart</Typography>
        </Box>
        <Grid container spacing={2}>
          <Grid item xl={9} lg={9} xs={12}>
            <TableContainer component={Paper}>
              <Table className={classes.table} aria-label="simple table">
                <TableHead>
                  <TableRow>
                    <TableCell>Product</TableCell>
                    <TableCell>Name</TableCell>
                    <TableCell>Price</TableCell>
                    <TableCell>Quantity</TableCell>
                    <TableCell>Discount Price</TableCell>
                    <TableCell>Remove</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {products.length ? (
                    products.map((row) => (
                      <TableRow key={row.id}>
                        <TableCell component="th" scope="row">
                          <img
                            src={row.img}
                            alt={row.title}
                            className={classes.img}
                          />
                        </TableCell>
                        <TableCell>{row.title}</TableCell>
                        <TableCell>${row.price}</TableCell>
                        <TableCell>
                          <ButtonGroup
                            size="medium"
                            variant="outlined"
                            color="default"
                          >
                            <Button onClick={() => decrement(row.id)}>
                              <RemoveIcon fontSize="small" />
                            </Button>
                            <Button>
                              <Typography variant="subtitle1">
                                {row.quantity}
                              </Typography>
                            </Button>
                            <Button onClick={() => increment(row.id)}>
                              <AddIcon fontSize="small" />
                            </Button>
                          </ButtonGroup>
                        </TableCell>
                        <TableCell>
                          ${(row.discountPrice * row.quantity).toFixed(2)}
                        </TableCell>
                        <TableCell>
                          <IconButton onClick={() => removeProduct(row.id)}>
                            <BackspaceOutlinedIcon />
                          </IconButton>
                        </TableCell>
                      </TableRow>
                    ))
                  ) : (
                    <>
                      <TableRow>
                        <TableCell>Cart Empty...</TableCell>
                      </TableRow>
                    </>
                  )}
                </TableBody>
              </Table>
            </TableContainer>
          </Grid>
          <Grid item xl={3} lg={3} xs={12}>
            <Box className={classes.head}>
              <Typography variant="h6">Summary</Typography>
            </Box>
            <Box className={classes.info}>
              <Box
                display="flex"
                justifyContent="space-between"
                alignItems="center"
                marginY={2}
              >
                <Typography variant="h6">Total Items:</Typography>
                <Typography variant="h6">{totalQuantities}</Typography>
              </Box>
              <Box
                display="flex"
                justifyContent="space-between"
                alignItems="center"
                marginY={2}
              >
                <Typography variant="h6">Total Price:</Typography>
                <Typography variant="h6">${totalPrice.toFixed(2)}</Typography>
              </Box>
              <Button fullWidth variant="outlined" color="default">
                CheckOut
              </Button>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default Cart;
