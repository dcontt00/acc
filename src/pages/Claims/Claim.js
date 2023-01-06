import * as React from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Paper from "@mui/material/Paper";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Typography from "@mui/material/Typography";
import ClaimInfo from "./ClaimInfo";
import ClaimReason from "./ClaimReason";
import Details from "../Payment/Details";
import AButton from "../../components/AButton";
import { useNavigate } from "react-router-dom";

const steps = ["Detalles de compra", "Datos personales", "Motivos"];

function getStepContent(step) {
  switch (step) {
    case 0:
      return <Details />;
    case 1:
      return <ClaimInfo />;
    case 2:
      return <ClaimReason />;
    default:
      throw new Error("Paso Desconocido");
  }
}

export default function Claim() {
  const navigate = useNavigate();

  const [activeStep, setActiveStep] = React.useState(0);

  const handleNext = () => {
    setActiveStep(activeStep + 1);
  };

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };

  return (
    <Container component="main" maxWidth="md" sx={{ mb: 4 }}>
      <Paper
        variant="outlined"
        sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}
      >
        <Typography component="h1" variant="h4" align="center">
          Reclamación
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
                Su número de reclamación es #2001539. Le hemos enviado un correo
                electrónico de confirmación, y le enviaremos actualizaciones
                sobre el estado de su reclamación.
              </Typography>
              <br />
              <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
                <AButton text="Volver a inicio" onClick={() => navigate("/")} />
              </Box>
            </React.Fragment>
          ) : (
            <React.Fragment>
              {getStepContent(activeStep)}
              <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
                {activeStep !== 0 && (
                  <AButton
                    onClick={handleBack}
                    sx={{ mt: 3, ml: 1 }}
                    text="Atrás"
                  ></AButton>
                )}

                <AButton
                  variant="contained"
                  onClick={handleNext}
                  sx={{ mt: 3, ml: 1 }}
                  text={
                    activeStep === steps.length - 1 ? "Finalizar" : "Continuar"
                  }
                />
              </Box>
            </React.Fragment>
          )}
        </React.Fragment>
      </Paper>
    </Container>
  );
}
