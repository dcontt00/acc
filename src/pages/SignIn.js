import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";

// Importo el hook del use navigate para cambiar de vistas
import { useNavigate } from "react-router-dom";

const theme = createTheme();

export default function SignUp() {
  const [name, setName] = React.useState("");
  const [surnames, setSurnames] = React.useState("");
  const [location, setLocation] = React.useState("");
  const [type, setType] = React.useState("");
  const [phoneNum, setPhoneNum] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [bankAccount, setBankAccount] = React.useState("");
  const [userImgLink, setUserImgLink] = React.useState("");
  // Funcion que responde al click del login (hanglesubmit)
  // Tengo que utilizar el hook del use navigate
  // lo vamos a renombrar para hacerlo mas facil
  // Para que no de problemas, se debe declarar fuera de la funcion "handleSubmit"
  const navigate = useNavigate();
  const handleSubmit = (event) => {
    // Asigno el tipo de usuario que en este caso seria siempre "user"
    setType("user");
    
    {
      /* Esto se coloca para que la informacion no aparezca en la cabcera del mensaje */
    }
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get("email"),
      password: data.get("password"),
    });

    if (data.get("email") == "admin") {
      // Uso el navigate para cambiar de vista
      navigate("/" + data.get("email") + "/main/admin");
    } else {
      // Uso el navigate para cambiar de vista
      navigate("/" + data.get("email") + "/main");
    }
  };

  
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
                  setName(event.target.value);
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
                  setSurnames(event.target.value);
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
                  setLocation(event.target.value);
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
                  setPhoneNum(event.target.value);
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
                  setEmail(event.target.value);
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
                  setPassword(event.target.value);
                }}
              />
              <TextField
                margin="normal"
                required
                fullWidth
                id="bankAccount"
                label="Numero de Cuenta Bancaria"
                name="bankAccount"
                autoFocus
                onChange={(event) => {
                  setBankAccount(event.target.value);
                }}
              />
              <TextField
                margin="normal"
                fullWidth
                id="imgLink"
                label="Enlace Imagen Usuario"
                name="imgLink"
                autoFocus
                onChange={(event) => {
                  setUserImgLink(event.target.value);
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
                  <Link href="/" variant="body2">
                    {"Politica de privacidad"}
                  </Link>
                </Grid>
              </Grid>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Crear Cuenta
              </Button>
            </Box>
          </Box>
        </Container>
      </ThemeProvider>
    </div>
  );
}
