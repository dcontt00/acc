import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea, Grid, ListItemButton } from "@mui/material";

export default function MultiActionAreaCard(props) {
  const handleClick = (index) => {
    props.setSelect(index);
  };
  var brandImg =
    "https://raw.githubusercontent.com/filippofilip95/car-logos-dataset/master/logos/thumb/" +
    props.brand.toLowerCase() +
    ".png";

  return (
    <ListItemButton
      onClick={(ev) => handleClick(props.index)}
    >
      <Card sx={{ maxWidth: 345, maxHeight: 400 }}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="140"
            image={process.env.PUBLIC_URL + props.img}
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
          </CardContent>
        </CardActionArea>
      </Card>
    </ListItemButton>
  );
}
