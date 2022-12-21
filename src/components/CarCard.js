import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { CardActionArea, CardActions, Grid, Box } from "@mui/material";
import { useNavigate } from "react-router-dom";
import FavoriteIcon from '@mui/icons-material/Favorite';
import AButton from "./AButton";
import Snackbar from '@mui/material/Snackbar';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Cookie from "universal-cookie";

const cookie = new Cookie();

export default function MultiActionAreaCard(props) {
  const [loged, setLoged] = React.useState(cookie.get("loged"));
  var favorites = [];
  if (cookie.get("favorites")) {
    favorites = cookie.get("favorites");
  }

  const [favorite, setFavorite] = React.useState(favorites.includes(props.car.id));
  const [snackbarMessage, setSnackbarMessage] = React.useState("Coche añadido a favoritos");
  const [open, setOpen] = React.useState(false);

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
      var index = favorites.indexOf(props.car.id);
      if (index > -1) {
        favorites.splice(index, 1);
      }
      cookie.set("favorites", favorites);
      setFavorite(false);
      setSnackbarMessage("Coche eliminado de favoritos");
    } else {
      // Add to favorites
      favorites.push(props.car.id);
      cookie.set("favorites", favorites);
      setFavorite(true);
      setSnackbarMessage("Coche añadido a favoritos");
    }
    handleClick();
  };


  var description = props.description;
  const navigate = useNavigate();
  var choices = props.car.choices;
  var brandImg =
    "https://raw.githubusercontent.com/filippofilip95/car-logos-dataset/master/logos/thumb/" +
    props.brand.toLowerCase() +
    ".png";

  if (description.length > 150) {
    description = description.substring(0, 150) + "...";
  }


  var price = parseFloat(props.price).toLocaleString("en-US", {
    style: "currency",
    currency: "EUR",
  });


  return (
    <Card sx={{ maxWidth: 345, maxHeight: 400 }}>
      <CardActionArea onClick={() => navigate("/description/" + props.car.id)}>
        <CardMedia
          component="img"
          height="140"
          image={props.img}
          alt="green iguana"
          sx={{ objectFit: "cover" }}
        />
        <CardContent>
          <Grid container>
            <Grid item xs={2} sm={2} md={2} lg={2}>
              <img
                src={brandImg}
                alt="brand"
                style={{
                  objectFit: "cover",
                  objectPosition: "center",
                  width: "80%",
                  height: "auto",
                }}
              />
            </Grid>
            <Grid item xs={10} sm={10} md={10} lg={8}>
              <Typography gutterBottom variant="h5" component="div">
                {props.title}
              </Typography>
            </Grid>
            <Grid item xs={10} sm={10} md={10} lg={2}>
              <Typography align="right" variant="h5">
                {props.year}
              </Typography>
            </Grid>
          </Grid>
          {props.inHistory ? (
            <Box>
              <Typography variant="body2" color="text.secondary">
                {"Motor: " + choices.motor + " " + props.car.fuel}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {"Acabado: " + choices.bodyWork}
              </Typography>
            </Box>
          ) : (
            <Typography variant="body2" color="text.secondary">
              {description}
            </Typography>
          )}
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Grid container>
          <Grid item xs={5} sm={5} md={5} lg={5}>
            <Typography variant="h6" color="text.secondary">
              {price}
            </Typography>
          </Grid>

          <Grid item xs={3} sm={3} md={3} lg={3} >
            {loged ?
              <AButton
                color="primary"
                size="small"
                text={favorite ? <FavoriteIcon /> : <FavoriteBorderIcon />}
                onClick={() => {
                  handleFavorite();
                }}
              />
              :
              <div width={"100%"} />
            }
          </Grid>
          <Snackbar
            open={open}
            autoHideDuration={1500}
            onClose={handleClose}
            message={snackbarMessage}
            action={action}
          />
          <Grid item xs={4} sm={4} md={4} lg={4}>
            <AButton
              text="Saber más"
              onClick={() => navigate("/description/" + props.car.id)}
            />
          </Grid>

        </Grid>
      </CardActions>
    </Card>
  );
}
