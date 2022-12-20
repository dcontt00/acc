import * as React from "react";
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
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Cookie from "universal-cookie";

// Importo el hook del use navigate para cambiar de vistas
import { useNavigate } from "react-router-dom";

const cookie = new Cookie();
const theme = createTheme();

export default function LogIn() {
  // Funcion que responde al click del login (hanglesubmit)
  // Tengo que utilizar el hook del use navigate
  // lo vamos a renombrar para hacerlo mas facil
  // Para que no de problemas, se debe declarar fuera de la funcion "handleSubmit"
  const navigate = useNavigate();
  const handleSubmit = (event) => {
      /* Esto se coloca para que la informacion no aparezca en la cabcera del mensaje */
    event.preventDefault();
    cookie.set("loged", true);
    navigate(cookie.get("pagePreLogin"));
    window.location.reload();
  };

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
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
            />
            
            <FormControlLabel control={<Checkbox value="remember" color="primary" />} label="Remember me" />

            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Iniciar Sesion
            </Button>

            <Grid container>
              <Grid item>
                <Link href="signin" variant="body2">
                  {"¿No tienes cuenta? Registrarse."}
                </Link>
              </Grid>
            </Grid>
            
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}
