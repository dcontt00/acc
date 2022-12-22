import * as React from "react";
import { useState, useEffect } from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import AButton from "../../components/AButton";
import { createTheme, ThemeProvider } from "@mui/material/styles";

// Importo el hook del use navigate para cambiar de vistas
import { useNavigate } from "react-router-dom";

const theme = createTheme();

export default function SignUp() {
  const [disabled, setDisabled] = React.useState(false);

  const [data, setData] = useState({
    firstName: "",
    lastName: "",
    location: "",
    phoneNum: "",
    email: "",
    password: ""
  })
  // Funcion que responde al click del login (hanglesubmit)
  // Tengo que utilizar el hook del use navigate
  // lo vamos a renombrar para hacerlo mas facil
  // Para que no de problemas, se debe declarar fuera de la funcion "handleSubmit"
  const navigate = useNavigate();
  const handleSubmit = (event) => {

    {
      /* Esto se coloca para que la informacion no aparezca en la cabcera del mensaje */
    }
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get("email"),
      password: data.get("password"),
    });

    //navigate("/");
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
    <div>
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
              Crear Cuenta
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
                id="name"
                label="Nombre"
                name="name"
                autoFocus
                onChange={(event) => {
                  handleChange(event)
                }}
              />

              <TextField
                margin="normal"
                required
                fullWidth
                id="surnames"
                label="Apellidos"
                name="surnames"
                autoFocus
                onChange={(event) => {
                  handleChange(event)
                }}
              />

              <TextField
                margin="normal"
                required
                fullWidth
                id="location"
                label="Localizacion"
                name="location"
                autoFocus
                onChange={(event) => {
                  handleChange(event)
                }}
              />

              <TextField
                margin="normal"
                required
                fullWidth
                id="phoneNum"
                label="Numero de Telefono"
                name="phoneNum"
                autoFocus
                onChange={(event) => {
                  handleChange(event)
                }}
              />

              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Correo Electronico"
                name="email"
                autoFocus
                onChange={(event) => {
                  handleChange(event)
                }}
              />

              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Contraseña"
                type="password"
                id="password"
                onChange={(event) => {
                  handleChange(event)
                }}
              />


              <FormGroup>
                <FormControlLabel
                  control={<Checkbox />}
                  label="Acepto los terminos y condiciones"
                />
                <FormControlLabel
                  control={<Checkbox />}
                  label="Acepto recibir ofertas"
                />
              </FormGroup>

              <Grid container>
                <Grid item>
                  <Typography
                    sx={{
                      color: "#1976d2", cursor: "pointer",
                      "&:hover": { textDecoration: "underline" }
                    }}
                    onClick={() => {
                      navigate("/privacy")
                    }}

                  >
                    Política de privacidad
                  </Typography>
                </Grid>
              </Grid>

              <AButton
                fullWidth
                variant="contained"
                onClick={() => navigate("/signup/confirmation")}
                disabled={disabled}
                text="Crear cuenta"

              />
            </Box>
          </Box>
        </Container>
      </ThemeProvider>
    </div>
  );
}
