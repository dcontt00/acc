import "../App.css";
import { Grid, Typography, Button, Box } from "@mui/material";
import Container from "@mui/material/Container";
import Table from "../components/Table";
import EditIcon from "@mui/icons-material/Edit";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { useParams } from "react-router-dom";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import Cars from "../data/Cars.json";
import { useNavigate } from "react-router-dom";
import ImageSliderComponent from "../components/ImageSlider";


export default function Contact() {
    const navigate = useNavigate();
    const params = useParams();

    return (
        <Container maxWidth="lg">
            <Grid container spacing={2}>
                <Grid item xs={12} sm={12} md={6} lg={6}>
                    <Typography variant="h2">Contacto</Typography>
                </Grid>

                <Grid item xs={12} sm={12} md={6} lg={6}>
                    <Button variant="contained">Llamar ahora</Button>
                </Grid>

                <Grid item xs={12} sm={12} md={12} lg={12}>
                    <Typography variant="h7">666 555 444</Typography>
                </Grid>

                <Grid item xs={12} sm={12} md={6} lg={6}>
                    <Typography variant="h2">Dirección de correo</Typography>
                </Grid>

                <Grid item xs={12} sm={12} md={6} lg={6}>
                    <Button variant="contained">Escribir ahora</Button>
                </Grid>

                <Grid item xs={12} sm={12} md={12} lg={12}>
                    <Typography variant="h7">dreamcar@concesionario.com</Typography>
                </Grid>
            </Grid>
            <Box height={"35rem"} />
        </Container>
    );
}
