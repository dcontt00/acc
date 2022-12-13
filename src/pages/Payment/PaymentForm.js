import * as React from "react";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";

import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

export default function PaymentForm() {
  const [ccname, setCCName] = React.useState("");

  const handleChange = (event) => {
    setCCName(event.target.value);
  };

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
              id="ccname_select"
              value={ccname}
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
            label="Numero de Tarjeta"
            fullWidth
            autoComplete="cc-number"
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            required
            id="expDate"
            label="Fecha de Caducidad"
            fullWidth
            autoComplete="cc-exp"
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            required
            id="cvv"
            label="CVV"
            helperText="Últimos tres dígitos en la tira de firma"
            fullWidth
            autoComplete="cc-csc"
            variant="standard"
          />
        </Grid>
        <Grid item xs={12}>
          <FormControlLabel
            control={<Checkbox color="secondary" name="saveCard" value="yes" />}
            label="Recordar datos bancarios para compras futuras"
          />
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
