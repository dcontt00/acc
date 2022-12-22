import * as React from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Paper from "@mui/material/Paper";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";
import AddressForm from "./AddressForm";
import PaymentForm from "./PaymentForm";
import Review from "./Review";
import Details from "./Details";
import AButton from "../../components/AButton";
import Cookies from "universal-cookie";

const cookie = new Cookies();
function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="/contact">
        DreamCar
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const steps = ["Detalles", "Dirección de Envío", "Datos Bancarios", "Resumen del Pedido"];




export default function Checkout() {
  const [activeStep, setActiveStep] = React.useState(0);
  const [state, setState] = React.useState(true)

  const [address, setAddress] = React.useState(null)

  const handleNext = () => {
    setActiveStep(activeStep + 1);
  };

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };

  console.log(cookie.get("personalization"));

  function getStepContent(step) {
    switch (step) {
      case 0:
        return <Details setActiveStep={setActiveStep} activeStep={activeStep} />;
      case 1:
        return <AddressForm setActiveStep={setActiveStep} activeStep={activeStep} />;
      case 2:
        return <PaymentForm />;
      case 3:
        return <Review />;
      default:
        throw new Error("Paso Desconocido");
    }
  }

  return (
    <Container component="main" maxWidth="md" sx={{ mb: 4 }}>
      <Paper
        variant="outlined"
        sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}
      >
        <Typography component="h1" variant="h4" align="center">
          Verificación
        </Typography>
        <Stepper activeStep={activeStep} sx={{ pt: 3, pb: 5 }}>
          {steps.map((label) => (
            <Step key={label}>
              <StepLabel>{label}</StepLabel>
            </Step>
          ))}
        </Stepper>
        <React.Fragment>
          {activeStep === steps.length ? (
            <React.Fragment>
              <Typography variant="h5" gutterBottom>
                Gracias por utilizar nuestros servicios.
              </Typography>
              <Typography variant="subtitle1">
                Su numero de pedido es #2001539. Le hemos enviado un correo
                electronico de confirmación, y le enviaremos actualizaciones
                sobre el estado de su pedido.
              </Typography>
            </React.Fragment>
          ) : (
            <React.Fragment>
              {getStepContent(activeStep)}
              <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
                {activeStep !== 0 && (
                  <AButton onClick={handleBack} sx={{ mt: 3, ml: 1 }} text="Atrás">
                  </AButton>
                )}

                <AButton
                  variant="contained"
                  onClick={handleNext}
                  sx={{ mt: 3, ml: 1 }}
                  disabled={state}
                  text={activeStep === steps.length - 1
                    ? "Realizar Compra"
                    : "Continuar"}
                />
              </Box>
            </React.Fragment>
          )}
        </React.Fragment>
      </Paper>
      <Copyright />
    </Container>
  );
}
