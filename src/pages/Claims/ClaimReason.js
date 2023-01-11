import * as React from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { useEffect } from "react";
import { Box } from "@mui/material";
import AButton from "../../components/AButton";
export default function ClaimReason(props) {
  const [data, setData] = React.useState({
    reason: props.data.Reason.reason || "",
    comments: props.data.Reason.comments || "",
  });
  const [disable, setDisable] = React.useState(true);

  const handleChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  }

  useEffect(() => {
    if (data.reason !== "" && data.comments !== "") {
      setDisable(false);
    } else {
      setDisable(true);
    }
  }, [data]);
  const handleContinue = () => {
    var dataTemp = props.data;
    dataTemp["Reason"] = data;
    props.setData(dataTemp);
    props.setActiveStep(props.activeStep + 1)
  }


  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Motivos
      </Typography>

      <Grid container spacing={3}>
        <Grid item xs={12}>
          <FormControl fullWidth>
            <InputLabel id="ccname_label">Motivo de la reclamación</InputLabel>
            <Select
              labelId="reason"
              id="reason"
              name="reason"
              value={data.reason}
              label="Motivo de la reclamación"
              onChange={handleChange}
            >
              <MenuItem value={"Calidad no adecuada"}>
                Calidad no adecuada
              </MenuItem>
              <MenuItem value={"Entregado con daños"}>
                Entregado con daños
              </MenuItem>
              <MenuItem value={"Funcionamiento incorrecto"}>
                Funcionamiento incorrecto
              </MenuItem>
              <MenuItem value={"Personalizacion incorrecta"}>
                Personalizacion incorrecta
              </MenuItem>
              <MenuItem value={"Extras no incluidos"}>
                Extras no incluidos
              </MenuItem>
              <MenuItem value={"Otro"}>Otro</MenuItem>
            </Select>
          </FormControl>
        </Grid>

        <Grid item xs={12}>
          <TextField
            required
            id="comments"
            name="comments"
            label="Comentarios"
            fullWidth
            autoComplete="shipping address-line1"
            variant="standard"
            onChange={handleChange}
            value={data.comments}
          />
        </Grid>
        <Grid item xs={12}>
          <Box
            m={1}
            display={"flex"}
            justifyContent="flex-end"
            alignItems="flex-end"
          >

            <AButton onClick={() => props.setActiveStep(props.activeStep - 1)} sx={{ mt: 3, ml: 1 }} text="Atrás" />
            <AButton
              variant="contained"
              onClick={() => handleContinue()}
              sx={{ mt: 3, ml: 1 }}
              text="Continuar"
              disabled={disable}
            />
          </Box>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
