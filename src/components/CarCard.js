import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";

export default function MultiActionAreaCard(props) {
  var description = props.description;

  if (description.length > 150) {
    description = description.substring(0, 150) + "...";
  }

  return (
    <Card sx={{ maxWidth: 345, maxHeight: 400 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={props.img}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            <img
              src={
                "https://raw.githubusercontent.com/filippofilip95/car-logos-dataset/master/logos/thumb/" +
                props.brand.toLowerCase() +
                ".png"
              }
              width={"10%"}
            />
            {props.title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {description}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary" variant="contained">
          Saber mas
        </Button>
      </CardActions>
    </Card>
  );
}
