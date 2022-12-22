import "../App.css";
import React from "react";
import { Grid, Typography, Button } from "@mui/material";
import Container from "@mui/material/Container";
import Table from "../components/Table";
import EditIcon from "@mui/icons-material/Edit";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { useParams } from "react-router-dom";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import Cars from "../data/Cars.json";
import { useNavigate } from "react-router-dom";
import ImageSliderComponent from "../components/ImageSlider";
import { motion } from "framer-motion";
import { dataName, getData, addData } from "../data/data";
import Cookies from "universal-cookie";
import { Stack } from "@mui/system";
import { useMediaQuery } from "@mui/material";
import { useState } from "react";
import Snackbar from '@mui/material/Snackbar';

import IconButton from '@mui/material/IconButton';
import FavoriteIcon from '@mui/icons-material/Favorite';

import CloseIcon from '@mui/icons-material/Close';
import AButton from "../components/AButton"
const cookie = new Cookies();

function getCar(id) {
  return Cars.find((car) => car.id === parseInt(id));
}

export default function Description() {
  const params = useParams();

  const largeScreen = useMediaQuery(theme => theme.breakpoints.up('md'));
  const [loged, setLoged] = useState(cookie.get("loged"));
  const car = getCar(params.id);
  const [snackbarMessage, setSnackbarMessage] = useState("Coche añadido a favoritos");
  const [open, setOpen] = useState(false);
  var favorites = [];
  if (cookie.get("favorites")) {
    favorites = cookie.get("favorites");
  }
  const [favorite, setFavorite] = useState(favorites.includes(car.id));


  const navigate = useNavigate();
  const handlePersonalizeClick = () => {
    navigate("/personalize/" + params.id);
    cookie.set("personalization", { "seats": 0, "colors": 0, "tire": 0 },);
  };

  function handleBuyButton() {
    cookie.remove("personalization")
    navigate("/payment/" + params.id);

  }
  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };
  const action = (
    <React.Fragment>
      <IconButton
        size="small"
        aria-label="close"
        color="inherit"
        onClick={handleClose}
      >
        <CloseIcon fontSize="small" />
      </IconButton>
    </React.Fragment>
  );

  const handleFavorite = () => {
    if (favorite) {
      // Remove from favorites
      var index = favorites.indexOf(car.id);
      if (index > -1) {
        favorites.splice(index, 1);
      }
      cookie.set("favorites", favorites);
      setFavorite(false);
      setSnackbarMessage("Coche eliminado de favoritos");
    } else {
      // Add to favorites
      favorites.push(car.id);
      cookie.set("favorites", favorites);
      setFavorite(true);
      setSnackbarMessage("Coche añadido a favoritos");
    }
    handleClick();
  };

  return (
    <Container maxWidth="lg">
      <Grid container spacing={2}>
        <Snackbar
          open={open}
          autoHideDuration={1500}
          onClose={handleClose}
          message={snackbarMessage}
          action={action}
        />
        <Grid item xs={12} sm={12} md={12} lg={12}>
          <Typography variant="h2">{car.name}</Typography>
        </Grid>

        <Grid item xs={12} sm={12} md={12} lg={12}>
          <ImageSliderComponent imgs={car.imgs} />
        </Grid>

        <Grid item xs={12} sm={12} md={12} lg={12}>
          <Typography variant="body1">{car.description}</Typography>
        </Grid>

        <Grid item xs={12} sm={12} md={12} lg={12} order={{ xs: 2, lg: 1 }}>
          <Typography variant="h1">Especificaciones técnicas</Typography>
        </Grid>
        <Grid item xs={12} sm={12} md={12} lg={8} order={{ xs: 3, lg: 2 }}>
          <Table car={car} />
        </Grid>

        <Grid item xs={12} sm={4} md={4} lg={2} order={{ xs: 1, lg: 3 }}>
          <Stack spacing={2} direction={largeScreen ? "column" : "row"}>
            {loged ?
              <AButton
                color="primary"
                sx={{ width: "100%" }}
                text={"Favoritos"}

                size="medium"
                icon={favorite ? <FavoriteIcon height="80%" /> : <FavoriteBorderIcon height="80%" />}
                onClick={() => {
                  handleFavorite();
                }}
              />
              :
              <div width={"100%"} />
            }

            <AButton
              color="primary"
              sx={{ width: "100%" }}
              text={"Personalizar"}

              size="medium"
              icon={<EditIcon />}
              onClick={handlePersonalizeClick}
            />

            <AButton
              color="primary"
              sx={{ width: "100%" }}
              text={"Comprar"}

              size="medium"
              icon={<ShoppingCartIcon />}
              onClick={() => handleBuyButton()}
            />


          </Stack>
        </Grid>
      </Grid>
    </Container>
  );
}
