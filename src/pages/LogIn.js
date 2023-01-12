import * as React from "react";
import { useEffect } from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import { Paper, Icon } from "@mui/material";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Cookie from "universal-cookie";
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import AButton from "../components/AButton";


// Importo el hook del use navigate para cambiar de vistas
import { useNavigate } from "react-router-dom";

const cookie = new Cookie();

export default function LogIn() {
  // Funcion que responde al click del login (hanglesubmit)
  // Tengo que utilizar el hook del use navigate
  // lo vamos a renombrar para hacerlo mas facil
  // Para que no de problemas, se debe declarar fuera de la funcion "handleSubmit"
  const navigate = useNavigate();


  const [disabled, setDisabled] = React.useState(false);
  const [data, setData] = React.useState({
    email: "",
    password: "",
  });


  const handleSubmit = (event) => {
    /* Esto se coloca para que la informacion no aparezca en la cabcera del mensaje */
    event.preventDefault();
    cookie.set("loged", true);
    navigate(-1);
    setTimeout(() => {  window.location.reload(); }, 250);
    
  };

  const handleChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  

  useEffect(() => {
    if (data.email !== "" && data.password !== "") {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  }, [data]);

  return (
    <Container component="main" maxWidth="xs">

      <Box
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
          <LockOutlinedIcon />
        </Avatar>

        <Typography component="h1" variant="h5">
          Iniciar Sesion
        </Typography>

        <Box
          component="form"
          onSubmit={handleSubmit}
          noValidate
          sx={{ mt: 1 }}
        >
          <TextField
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
            onChange={handleChange}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
            onChange={handleChange}
          />

          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Remember me"
          />

          <AButton
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
            disabled={disabled}
            text="Iniciar Sesion"
            onClick={(e) => handleSubmit(e)}
          />

          <Grid container>
            <Grid item>

              <Typography
                sx={{
                  color: "#1976d2", cursor: "pointer",
                  "&:hover": { textDecoration: "underline" }
                }}
                onClick={() => {
                  navigate("/signup")
                }}

              >
                ¿No tienes cuenta? ¡Registrate!
              </Typography>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Container>
  );
}
