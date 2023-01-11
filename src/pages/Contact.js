import "../App.css";
import { Grid, Typography } from "@mui/material";
import Container from "@mui/material/Container";
import Paper from "@mui/material/Paper";
import * as React from "react";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
import AButton from "../components/AButton";

const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

export default function Contact() {
    const [open, setOpen] = React.useState(false);
    const [disabled, setDisabled] = React.useState(false);
    const [checked, setChecked] = React.useState(false);

    const [data, setData] = React.useState({
        name: "",
        email: "",
        message: "",
    })

    const handleClick = () => {
        setOpen(true);
    };

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }

        setOpen(false);
    };

    const handleCheckbox = (e) => {
        setChecked(!checked);
    }

    const handleChange = (e) => {
        setData({
            ...data,
            [e.target.name]: e.target.value,
        });
    };

    React.useEffect(() => {
        if (data.name !== "" && data.email !== "" && data.message !== "" && checked) {
            setDisabled(false);
        } else {
            setDisabled(true);
        }
    }, [data, checked]);

    return (
        <Container maxWidth="xl" sx={{ paddingTop: 2 }}>
            <Grid container spacing={2}>
                <Grid item xs={12} lg={8} order={{ xs: 2, lg: 1 }}>
                    <Paper variant="outlined" sx={{ p: 2 }}>
                        <Typography variant="h2">Formulario de contacto</Typography>

                        <Grid container spacing={3}>
                            <Grid item xs={12} md={12}>
                                <TextField
                                    id="name"
                                    label="Tu nombre"
                                    name="name"
                                    fullWidth
                                    autoComplete="cc-number"
                                    variant="standard"
                                    onChange={(event) => {
                                        handleChange(event)
                                    }}
                                />
                            </Grid>

                            <Grid item xs={12} md={12}>
                                <TextField
                                    id="email"
                                    label="Tu dirección de correo"
                                    fullWidth
                                    autoComplete="cc-exp"
                                    name="email"
                                    variant="standard"
                                    onChange={(event) => {
                                        handleChange(event)
                                    }}
                                />
                            </Grid>

                            <Grid item xs={12} md={12}>
                                <TextField
                                    id="message"
                                    label="Mensaje"
                                    fullWidth
                                    autoComplete="cc-csc"
                                    name="message"
                                    variant="standard"
                                    onChange={(event) => {
                                        handleChange(event)
                                    }}
                                />
                            </Grid>

                            <Grid item xs={12} md={12} lg={12}>

                                <FormControlLabel
                                    control={<Checkbox color="secondary" name="acceptRgpd" checked={checked} onChange={(e) => handleCheckbox(e)} />}
                                    label="Acepto que se lleve a cabo el tratamiento de mis datos tal y como se detalla en el Reglamento General de Protección de Datos"
                                />


                                <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
                                    <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
                                        ¡Mensaje enviado!
                                    </Alert>
                                </Snackbar>

                            </Grid>
                            <Grid item xs={12} md={12} lg={12}>
                                <AButton variant="contained" text={"Enviar"} onClick={handleClick} disabled={disabled} />
                            </Grid>
                        </Grid>
                    </Paper>
                </Grid>

                <Grid item xs={12} lg={4} order={{ xs: 1, lg: 2 }}>
                    <Paper variant="outlined" sx={{ p: 2 }}>
                        <Typography variant="h2">Teléfono de contacto</Typography>
                        <Typography variant="h7">666 555 444</Typography>
                        <Typography variant="h2">Dirección de correo</Typography>
                        <Typography variant="h7">contacto@dreamcar.com</Typography>
                    </Paper>

                </Grid>
            </Grid>



        </Container>
    );
}
