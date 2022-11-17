import logo from "../logo.svg";
import "../App.css";
import Grid from "@mui/material/Grid";
import Carousel from "../components/Carousel";

export default function Home() {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12} sm={12} md={8}>
        <Carousel />
      </Grid>
      <Grid item md={12}>
        <p>texto</p>
      </Grid>
    </Grid>
  );
}
