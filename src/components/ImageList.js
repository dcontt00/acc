import * as React from "react";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import { Button } from "@mui/material";

export default function StandardImageList(props) {
  return (
    <ImageList cols={5} item xs={12} sm={6} md={4} lg={3}>
      {props.data.map((item) => (
        <Button>
          <ImageListItem key={item.img}>
            <img
              src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
              srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
              alt={item.title}
              loading="lazy"
            />
          </ImageListItem>
        </Button>
      ))}
    </ImageList>
  );
}
