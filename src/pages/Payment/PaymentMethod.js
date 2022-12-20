import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
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
    navigate("/");
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
              Comprar Vehiculo
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
                id="ccn"
                label="Credit Card Number"
                name="ccn"
                autoFocus
                onChange={(event) => {
                  
                }}
              />

              <TextField
                margin="normal"
                required
                fullWidth
                id="expdate"
                label="Fecha de Caducidad"
                name="expdate"
                autoFocus
                onChange={(event) => {
               
                }}
              />

              <TextField
                margin="normal"
                required
                fullWidth
                id="ccholdername"
                label="Nombre Completo del Titular"
                name="ccholdername"
                autoFocus
                onChange={(event) => {
                  
                }}
              />

              <TextField
                margin="normal"
                required
                fullWidth
                id="cvv"
                label="Codigo Valor de Verificacion"
                name="cvv"
                autoFocus
                onChange={(event) => {
                 
                }}
              />    
                      
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
               Pagar
              </Button>
            </Box>
          </Box>
        </Container>
      </ThemeProvider>
    </div>
  );
}
