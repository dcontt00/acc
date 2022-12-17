import * as React from "react";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import { Button } from "@mui/material";
import ImageListItemBar from '@mui/material/ImageListItemBar';
import IconButton from '@mui/material/IconButton';
import InfoIcon from '@mui/icons-material/Info';

export default function StandardImageList(props) {
  const [selected, setSelected] = React.useState(null)
  return (
    <ImageList cols={5} item xs={12} sm={6} md={4} lg={3}>
      {props.data.map((item, key) => (
        <Button
          sx={{ backgroundColor: key === selected ? "blue" : "transparent" }}
          onClick={() => setSelected(key)}
        >
          <ImageListItem key={item.img}>
            <img
              src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
              srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
              alt={item.title}
              loading="lazy"
            />
          </ImageListItem>
          <ImageListItemBar
            title={item.title}
            subtitle={item.price}
            actionIcon={
              <IconButton
                sx={{ color: 'rgba(255, 255, 255, 0.54)' }}
                aria-label={`info about ${item.title}`}
              >
                <InfoIcon />
              </IconButton>
            }
          />
        </Button>
      ))}
    </ImageList>
  );
}
