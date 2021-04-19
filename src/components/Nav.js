import React, { useState } from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import Badge from "@material-ui/core/Badge";
import LocalMallIcon from "@material-ui/icons/LocalMall";
import { makeStyles } from "@material-ui/core";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: "white",
    transition: "all .3s linear",
  },
  title: {
    color: "#333",
    flexGrow: 1,
    fontWeight: 700,
    letterSpacing: 2,
  },
  icon: {
    color: "#333",
    fontSize: 28,
  },
}));
const Nav = () => {
  const classes = useStyles();
  const [togglePosition, setTogglePosition] = useState(false);
  const { totalQuantities } = useSelector((state) => state.cart);
  const toggle = () => {
    if (document.scrollingElement.scrollTop > 30) {
      setTogglePosition(true);
    } else setTogglePosition(false);
  };
  React.useEffect(() => {
    window.addEventListener("scroll", toggle);
    return () => window.removeEventListener("scroll", toggle);
  }, []);
  return (
    <>
      <AppBar
        position={`${togglePosition ? "fixed" : "static"}`}
        className={classes.root}
      >
        <Toolbar>
          <Typography className={classes.title} variant="h5">
            <Link to="/">Ecommerce</Link>
          </Typography>
          <Link to="/cart">
            <IconButton>
              <Badge badgeContent={totalQuantities} color="error">
                <LocalMallIcon className={classes.icon} />
              </Badge>
            </IconButton>
          </Link>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Nav;
