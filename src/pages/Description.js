import "../App.css";
import { Grid, Typography, Button} from "@mui/material";
import Carousel from "../components/Carousel";
import Container from "@mui/material/Container";
import Table from "../components/Table";
import EditIcon from '@mui/icons-material/Edit';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

export default function Description() {
  return (
    <Container maxWidth="lg">
      <Grid container spacing={2}>
        <Grid item xs={12} sm={12} md={12} lg={12}>
          <Carousel />
        </Grid>

        <Grid item xs={12} sm={12} md={12} lg={12}>
          <Typography variant="h1">Especificaciones técnicas</Typography>
        </Grid>

        <Grid item xs={8} sm={8} md={8} lg={8}>
          <Table />
        </Grid>

        <Grid item xs={4} sm={4} md={4} lg={4} >
            <Button variant="contained">
                Favoritos <FavoriteBorderIcon />
            </Button>
       
            <Button variant="contained">
                Personalizar <EditIcon />
            </Button>

            <Button variant="contained">
                Comprar <ShoppingCartIcon />
            </Button>
        </Grid>
      </Grid>
    </Container>
  );
}