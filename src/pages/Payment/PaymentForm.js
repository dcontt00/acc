import * as React from "react";
import { useEffect } from "react";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import AButton from "../../components/AButton";

export default function PaymentForm(props) {
  const [data, setData] = React.useState({
    ccname: "",
    cardNumber: "",
    expDate: "",
    cvv: "",
  });

  const [ccname, setCCName] = React.useState("");
  const [disable, setDisable] = React.useState(true);

  const handleChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });

  }

  useEffect(() => {
    console.log(data)
    if (data.ccname !== "" && data.cardNumber !== "" && data.expDate !== "" && data.cvv !== "") {
      setDisable(false);
    } else {
      setDisable(true);
    }
  }, [data]);

  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Metodo de Pago
      </Typography>

      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <FormControl fullWidth>
            <InputLabel id="ccname_label">Nombre de la Tarjeta</InputLabel>

            <Select
              labelId="cc_name"
              id="ccname"
              name="ccname"
              value={data.ccname}
              label="Nombre de la Tarjeta"
              onChange={handleChange}
            >
              <MenuItem value={"MasterCard"}>MasterCard</MenuItem>
              <MenuItem value={"Visa"}>Visa</MenuItem>
              <MenuItem value={"AmericanExpress"}>AmericanExpress</MenuItem>
            </Select>

          </FormControl>
        </Grid>

        <Grid item xs={12} md={6}>
          <TextField
            required
            id="cardNumber"
            name="cardNumber"
            label="Numero de Tarjeta"
            fullWidth
            autoComplete="cc-number"
            variant="standard"
            onChange={handleChange}

          />
        </Grid>

        <Grid item xs={12} md={6}>
          <TextField
            required
            id="expDate"
            name="expDate"
            label="Fecha de Caducidad"
            fullWidth
            autoComplete="cc-exp"
            variant="standard"
            onChange={handleChange}

          />
        </Grid>

        <Grid item xs={12} md={6}>
          <TextField
            required
            id="cvv"
            label="CVV"
            name="cvv"
            helperText="Últimos tres dígitos en la tira de firma"
            fullWidth
            autoComplete="cc-csc"
            variant="standard"
            onChange={handleChange}

          />
        </Grid>

        <Grid item xs={12}>
          <FormControlLabel
            control={<Checkbox color="secondary" name="saveCard" value="yes" />}
            label="Recordar datos bancarios para compras futuras"
          />
        </Grid>
        <AButton
          variant="contained"
          onClick={() => props.setActiveStep(props.activeStep + 1)}
          sx={{ mt: 3, ml: 1 }}
          text="Continuar"
          disabled={disable}
        />
        <AButton onClick={() => props.setActiveStep(props.activeStep - 1)} sx={{ mt: 3, ml: 1 }} text="Atrás" />
      </Grid>
    </React.Fragment>
  );
}
