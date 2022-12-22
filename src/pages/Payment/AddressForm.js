import * as React from "react";
import { useEffect } from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import AButton from "../../components/AButton";
export default function AddressForm(props) {

  const [data, setData] = React.useState({
    firstName: "",
    lastName: "",
    phoneNum: "",
    email: "",
    address1: "",
    address2: "",
    doorNum: "",
    province: "",
    zip: "",
    country: "",
  });

  const [disable, setDisable] = React.useState(true);




  const handleChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });

  }

  // If first name is empty, disable button
  // If first name is not empty, enable button

  useEffect(() => {
    console.log(data)
    if (data.firstName !== "" && data.lastName !== "" && data.phoneNum !== "" && data.email !== "" && data.address1 !== "" && data.address2 !== "" && data.doorNum !== "" && data.province !== "" && data.zip !== "" && data.country !== "") {
      setDisable(false);
    } else {
      setDisable(true);
    }
  }, [data]);







  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Direccion de Envío
      </Typography>

      <Grid container spacing={3}>

        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="firstName"
            name="firstName"
            label="Nombre"
            fullWidth
            variant="standard"
            onChange={handleChange}

          />
        </Grid>

        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="lastName"
            name="lastName"
            label="Apellidos"
            fullWidth
            autoComplete="family-name"
            variant="standard"
            onChange={handleChange}
          />
        </Grid>

        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="phoneNum"
            name="phoneNum"
            label="Numero de teléfono"
            fullWidth
            autoComplete="family-name"
            variant="standard"
            onChange={handleChange}
          />
        </Grid>

        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="email"
            name="email"
            label="Direccion de correo electrónico"
            fullWidth
            autoComplete="family-name"
            variant="standard"
            onChange={handleChange}
          />
        </Grid>

        <Grid item xs={12}>
          <TextField
            required
            id="address1"
            name="address1"
            label="Localidad"
            fullWidth
            autoComplete="shipping address-line1"
            variant="standard"
            onChange={handleChange}
          />
        </Grid>

        <Grid item xs={12}>
          <TextField
            id="address2"
            name="address2"
            label="Calle"
            fullWidth
            autoComplete="shipping address-line2"
            variant="standard"
            onChange={handleChange}
          />
        </Grid>

        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="doorNum"
            name="doorNum"
            label="Numero/Escalera/Puerta"
            fullWidth
            autoComplete="shipping address-level2"
            variant="standard"
            onChange={handleChange}

          />
        </Grid>

        <Grid item xs={12} sm={6}>
          <TextField
            id="province"
            name="province"
            label="Provincia"
            fullWidth
            variant="standard"
            onChange={handleChange}
          />
        </Grid>

        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="zip"
            name="zip"
            label="Codigo Postal"
            fullWidth
            autoComplete="shipping postal-code"
            variant="standard"
            onChange={handleChange}
          />
        </Grid>

        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="country"
            name="country"
            label="Pais"
            fullWidth
            autoComplete="shipping country"
            variant="standard"
            onChange={handleChange}
          />
        </Grid>

        <Grid item xs={12}>
          <FormControlLabel
            control={
              <Checkbox color="secondary" name="saveAddress" value="yes" />
            }
            label="Usa esa direccion para añadir detalles sobre el metodo de pago"
          />
        </Grid>
        <AButton
          variant="contained"
          onClick={() => props.setActiveStep(props.activeStep + 1)}
          sx={{ mt: 3, ml: 1 }}
          text="Continuar"
          disabled={disable}
        />

      </Grid>
    </React.Fragment>
  );
}
