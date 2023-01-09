import React from "react";
import { Carousel } from "react-responsive-carousel";
import { Typography, Grid, Paper } from "@mui/material";

import "react-responsive-carousel/lib/styles/carousel.min.css";
import { useNavigate } from "react-router-dom";
// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
export default function Carousel_comp(props) {
  const navigate = useNavigate();

  return (
    <Swiper
      // install Swiper modules
      modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
      loop={true}
      autoplay={{ delay: 3000 }}
      spaceBetween={50}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
    >

      {props.cars.map((item, i) => (

        <SwiperSlide onClick={() => navigate("description/" + item.id)}>
          <Item key={i} item={item} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

function Item(props) {

  function truncateDescription() {
    var output = props.item.description;
    if (output.length > 150) {
      output = output.substring(0, 150) + "...";
    }
    return output;
  }
  return (
    <Paper sx={{ p: 2 }}>

      <Grid container spacing={1}>
        <Grid item xs={12} sm={12} md={12} lg={12}>
          <Typography variant="h2">{props.item.name}</Typography>
        </Grid>
        <Grid item xs={12} sm={12} md={12} lg={12}>
          <Typography variant="p" sx={{ WebkitLineClamp: 3, display: "-webkit-flex" }}
          >{truncateDescription()}</Typography>
        </Grid>
        <Grid item xs={12} sm={12} md={12} lg={12}>
          <img src={process.env.PUBLIC_URL + props.item.img} alt="coche" width={"100%"} />
        </Grid>
        <Grid item xs={12} sm={12} md={12} lg={12}></Grid>
      </Grid>
    </Paper>
  );
}
