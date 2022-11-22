import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import AdbIcon from "@mui/icons-material/Adb";
import Grid from "@mui/material/Grid";
import { useNavigate } from "react-router-dom";

const pages = [
  { name: "inicio", link: "/" },
  { name: "Catálogo", link: "/catalog" },
  { name: "Contacto", link: "/contact" },
];
const settings = ["Profile", "Account", "Dashboard", "Logout"];

function ResponsiveAppBar() {
  return (
    <Grid
      container
      sx={{
        paddingBottom: "0.5%",
        paddingTop: "0.5%",
        backgroundColor: "#C8C8C8",
      }}
      direction="column"
      alignItems="center"
      justifyContent="center"
    >
      <Grid item xs={12}>
        <p>DreamCar - 2022</p>
      </Grid>
    </Grid>
  );
}
export default ResponsiveAppBar;
