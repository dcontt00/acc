import * as React from "react";
import ImageListItem from "@mui/material/ImageListItem";
import { List, ListItemButton, Grid } from "@mui/material";
import ImageListItemBar from "@mui/material/ImageListItemBar";
import IconButton from "@mui/material/IconButton";
import InfoIcon from "@mui/icons-material/Info";
import Cookies from "universal-cookie";
import {StyledList} from './StyledList';

const cookie = new Cookies();


export default function StandardImageList(props) {
  const [selectedIndex, setSelected] = React.useState(0);

  const handleListItemClick = (event, index) => {
    props.setItem(index);
    /* var id = props.data[index].id
    console.log("Part: " + part + " ID: " + id);
    if (cookie.get("personalization") === undefined) {
      console.log("Cookie not exists")

      cookie.set("personalization", { [part]: id });
    } else {
      console.log("Cookie exists")
      var personalization = cookie.get("personalization");
      personalization[part] = id;
      cookie.set("personalization", personalization);
    }
    console.log(cookie.get("personalization"))
    //console.log(cookie.get("personalization")) */
    setSelected(index);
  };

  return (
    <StyledList
      sx={{ display: "flex", flexDirection: "row" }}

    >
      <Grid container spacing={2}>

        {props.data.map((item, key) => (
          <Grid item xs={6} sm={6} md={4} lg={3}>
            <ListItemButton
              /*sx={{ backgroundColor: key === selected ? "blue" : "transparent" }}*/
              selected={selectedIndex === key}
              onClick={(ev) => handleListItemClick(ev, key)}
            >
              <ImageListItem key={item.img}>
                <img
                  src={process.env.PUBLIC_URL + `${item.img}?w=164&h=164&fit=crop&auto=format`}
                  srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                  alt={item.title}
                  loading="lazy"
                />
              </ImageListItem>
              <ImageListItemBar
                title={item.title}
                subtitle={item.price + "€"}
                actionIcon={
                  <IconButton
                    sx={{ color: "rgba(255, 255, 255, 0.54)" }}
                    aria-label={`info about ${item.title}`}
                  >
                    <InfoIcon />
                  </IconButton>
                }
              />
            </ListItemButton>
          </Grid>
        ))}
      </Grid>

    </StyledList>
  );
}
