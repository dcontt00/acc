import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import { Button } from '@mui/material';


export default function StandardImageList() {
  return (
    <ImageList cols={5} item xs={12} sm={6} md={4} lg={3}>
      {itemData.map((item) => (
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

const itemData = [
  {
    img: 'imgs/llantas/llantas_1.jpg',
    title: 'Llantas 1',
  },
  {
    img: 'imgs/llantas/llantas_2.jpg',
    title: 'Llantas 2',
  },
  {
    img: 'imgs/llantas/llantas_3.jpg',
    title: 'Llantas 3',
  },
  {
    img: 'imgs/llantas/llantas_4.jpg',
    title: 'Llantas 4',
  },
  {
    img: 'imgs/llantas/llantas_5.jpg',
    title: 'Llantas 5',
  }
];