import "../App.css";
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

const cookie = new Cookies();
function getCar(id) {
  return Cars.find((car) => car.id === parseInt(id));
}

export default function Description() {
  const navigate = useNavigate();
  const params = useParams();
  const car = getCar(params.id);
  const handlePersonalizeClick = () => {
    navigate("/personalize/" + params.id);
    cookie.set("personalization", { "seats": 0, "colors": 0, "tire": 0 },);
  };

  return (
    <Container maxWidth="lg">
      <Grid container spacing={2}>
        <Grid item xs={12} sm={12} md={12} lg={12}>
          <Typography variant="h2">{car.name}</Typography>
        </Grid>
        <Grid item xs={12} sm={12} md={12} lg={12}>
          <ImageSliderComponent imgs={car.imgs} />
        </Grid>

        <Grid item xs={12} sm={12} md={12} lg={12}>
          <Typography variant="body1">{car.description}</Typography>
        </Grid>

        <Grid item xs={12} sm={12} md={12} lg={12}>
          <Typography variant="h1">Especificaciones técnicas</Typography>
        </Grid>

        <Grid item xs={8} sm={8} md={8} lg={8}>
          <Table car={car} />
        </Grid>

        <Grid item xs={4} sm={4} md={4} lg={4}>
          <Grid container spacing={2}>
            <Grid item lg={12} md={12} sm={12} xs={12}>
              <Button component={motion.div} whileHover={{ scale: 1.080, }}
                transition={{ type: "spring", stiffness: 400, damping: 20 }}
                variant="contained"
                onClick={() => {
                  addData(dataName.favcars, car);
                  navigate("/favorites");
                }}
              >
                Favoritos <FavoriteBorderIcon />
              </Button>
            </Grid>
            <Grid item lg={12} md={12} sm={12} xs={12}>
              <Button component={motion.div} whileHover={{ scale: 1.080, }}
                transition={{ type: "spring", stiffness: 400, damping: 20 }}
                variant="contained"
                onClick={handlePersonalizeClick}
              >
                Personalizar <EditIcon />
              </Button>
            </Grid>
            <Grid item lg={12} md={12} sm={12} xs={12}>
              <Button component={motion.div} whileHover={{ scale: 1.080, }}
                transition={{ type: "spring", stiffness: 400, damping: 20 }} variant="contained" onClick={() => navigate("/payment/" + car.id)}>
                Comprar <ShoppingCartIcon />
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
}
