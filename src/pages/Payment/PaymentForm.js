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
import { Alert } from "@mui/material";
export default function PaymentForm(props) {
  const [data, setData] = React.useState({
    ccname: props.data.Payment.ccname || "",
    cardNumber: props.data.Payment.cardNumber || "",
    expDate: props.data.Payment.expDate || "",
    cvv: props.data.Payment.ccv || "",
  });

  const [disable, setDisable] = React.useState(true);

  const [cardNumberError, setCardNumberError] = React.useState(false);
  const [expirationDateError, setExpirationDateError] = React.useState(false);
  const [cvvError, setCvvError] = React.useState(false);

  const handleChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });

  }

  const handleCardNumberChange = (e) => {
    // Set data
    handleChange(e);

    // Add - to card number
    var temp = e.target.value;
    temp = temp.replace(/-/g, "");
    temp = temp.replace(/(.{4})/g, "$1-");
    temp = temp.replace(/-$/, "");

    //setCardNumberShowedValue(temp);
  }


  useEffect(() => {
    if (data.ccname !== "" && data.cardNumber !== "" && data.expDate !== "" && data.cvv !== "") {
      setDisable(false);
    } else {
      setDisable(true);
    }
  }, [data]);
  const handleContinue = () => {
    var temp = false;
    setCardNumberError(false)
    setExpirationDateError(false)
    setCvvError(false)
    // Check if card number has 16 numbers with regex
    const cardNumberRegex = /^[0-9]{16}$/;
    if (!cardNumberRegex.test(data.cardNumber)) {
      temp = true;
      setCardNumberError(true)

    }

    // Check if expiration date is correct with regex
    const expDateRegex = /^(0[1-9]|1[0-2])\/?([0-9]{4}|[0-9]{2})$/;
    if (!expDateRegex.test(data.expDate)) {
      temp = true;
      setExpirationDateError(true)
    }

    // Check if cvv has 3 numbers with regex
    const cvvRegex = /^[0-9]{3}$/;
    if (!cvvRegex.test(data.cvv)) {
      temp = true;
      setCvvError(true)
    }

    if (temp) {
      return;
    }


    var dataTemp = props.data;
    dataTemp["Payment"] = data;
    props.setData(dataTemp);
    props.setActiveStep(props.activeStep + 1)
  }

  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Metodo de Pago
      </Typography>



      <Grid container spacing={2}>


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
            value={data.cardNumber}
            error={cardNumberError}
            inputProps={{ maxLength: 16 }}
            helperText={cardNumberError ? "El numero de tarjeta no es correcto. Debe tener 16 digitos" : ""}
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
            value={data.expDate}
            inputProps={{ maxLength: 5 }}
            error={expirationDateError}
            helperText={expirationDateError ? "La fecha de caducidad no es correcta. Debe tener formato dd/mm" : ""}

          />
        </Grid>

        <Grid item xs={12} md={6}>
          <TextField
            required
            id="cvv"
            label="CVV"
            name="cvv"
            fullWidth
            autoComplete="cc-csc"
            variant="standard"
            inputProps={{ maxLength: 3 }}
            onChange={handleChange}
            value={data.cvv}
            error={cvvError}
            helperText={cvvError ? "El CVV no es correcto. Debe tener 3 digitos" : "Codigo de seguridad"}
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
          onClick={() => handleContinue()}
          sx={{ mt: 3, ml: 1 }}
          text="Continuar"
          disabled={disable}
        />
        <AButton onClick={() => props.setActiveStep(props.activeStep - 1)} sx={{ mt: 3, ml: 1 }} text="Atrás" />
      </Grid>
    </React.Fragment>
  );
}