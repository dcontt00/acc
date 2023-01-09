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
    firstName: props.data.Address.firstName || "",
    lastName: props.data.Address.lastName || "",
    phoneNum: props.data.Address.phoneNum || "",
    email: props.data.Address.email || "",
    address1: props.data.Address.address1 || "",
    address2: props.data.Address.address2 || "",
    doorNum: props.data.Address.doorNum || "",
    province: props.data.Address.province || "",
    zip: props.data.Address.zip || "",
    country: props.data.Address.country || "",
  });

  const [disable, setDisable] = React.useState(true);


  const handleChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });

  }


  useEffect(() => {
    if (data.firstName !== "" && data.lastName !== "" && data.phoneNum !== "" && data.email !== "" && data.address1 !== "" && data.address2 !== "" && data.doorNum !== "" && data.province !== "" && data.zip !== "" && data.country !== "") {
      setDisable(false);
    } else {
      setDisable(true);
    }
  }, [data]);


  const handleContinue = () => {
    var dataTemp = props.data;
    dataTemp["Address"] = data;
    props.setData(dataTemp);
    props.setActiveStep(props.activeStep + 1)
  }




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
            value={data.firstName}
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
            value={data.lastName}
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
            value={data.phoneNum}
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
            value={data.email}
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
            value={data.address1}
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
            value={data.address2}
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
            value={data.doorNum}

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
            value={data.province}
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
            value={data.zip}
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
            value={data.country}
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