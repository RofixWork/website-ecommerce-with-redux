import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Pagination } from "swiper";

// Import Swiper styles
import "swiper/swiper.scss";
import "swiper/components/navigation/navigation.scss";
import "swiper/components/pagination/pagination.scss";
import "swiper/components/scrollbar/scrollbar.scss";

// install Swiper modules

import { Box, Container, makeStyles } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiContainer-root": {
      marginLeft: 0,
      [theme.breakpoints.down("xs")]: {
        marginLeft: "auto",
      },
    },
    "& .MuiTypography-h3": {
      letterSpacing: 1,
      fontWeight: 700,
      [theme.breakpoints.down("xs")]: {
        fontSize: 24,
        letterSpacing: 0,
      },
    },
    "& .MuiTypography-h6": {
      color: "#d0c2c2",
    },
  },
}));
SwiperCore.use([Pagination]);
const Header = () => {
  const classes = useStyles();
  const [items] = useState([
    {
      id: 1,
      title: "Contemporary Pendant Lighting",
      desc: `Interior`,
      img:
        "https://images.unsplash.com/photo-1529854140025-25995121f16f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    },
    {
      id: 2,
      title: "Minimal Rotating Disc Wall Clock",
      desc: `Decoration`,
      img:
        "https://images.unsplash.com/photo-1547822050-0fdeeb81c946?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1352&q=80",
    },
    {
      id: 3,
      title: "Bamboo Zigzag Pattern Basket",
      desc: `Essentials`,
      img:
        "https://images.unsplash.com/photo-1579108189501-b3af293abbf8?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    },
  ]);
  return (
    <>
      <Swiper
        spaceBetween={0}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        {items.map((item) => {
          return (
            <SwiperSlide
              key={item.id}
              style={{ backgroundImage: `url(${item.img})` }}
              className={classes.root}
            >
              <Container maxWidth="md">
                <Box>
                  <Typography variant="h3" gutterBottom>
                    {item.title}
                  </Typography>
                  <Typography variant="h6">{item.desc}</Typography>
                </Box>
              </Container>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </>
  );
};

export default Header;
