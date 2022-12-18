import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { CardActionArea, CardActions, Grid, Box, Divider } from "@mui/material";
import { useNavigate } from "react-router-dom";
import AButton from "./AButton";
import { dataName, getData, addData } from "../data/data";
import Cookie from "universal-cookie";

const cookie = new Cookie();

export default function MultiActionAreaCard(props) {
  const [loged, setLoged] = React.useState(cookie.get("loged"));
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

          <Grid item xs={7} sm={7} md={7} lg={7}>
            <AButton
              text="Gestionar reclamación"
              onClick={() => navigate("/claim/" + props.car.id)}
            />
          </Grid>

        </Grid>
      </CardActions>
    </Card>
  );
}