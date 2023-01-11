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

    const [data, setData] = React.useState({
        name: "",
        email: "",
        message: "",
        acceptRgpd: false
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
    const handleChange = (e) => {
        setData({
            ...data,
            [e.target.name]: e.target.value,
        });
    };

    React.useEffect(() => {
        if (data.name !== "" && data.email !== "" && data.message !== "" && data.acceptRgpd) {
            setDisabled(false);
        } else {
            setDisabled(true);
        }
    }, [data]);

    return (
        <Container maxWidth="xl">
            <Paper variant="outlined" sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}>
                <Typography variant="h2">Teléfono de contacto</Typography>
                <Typography variant="h7">666 555 444</Typography>
            </Paper>

            <Paper variant="outlined" sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}>
                <Typography variant="h2">Dirección de correo</Typography>
                <Typography variant="h7">dreamcar@concesionario.com</Typography>
            </Paper>

            <Paper variant="outlined" sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}>
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

                    <Grid item xs={12} md={12}>
                        <FormControlLabel
                            control={<Checkbox color="secondary" name="acceptRgpd" value={false} onChange={(e) => handleChange(e)}/>}
                            label="Acepto que se lleve a cabo el tratamiento de mis datos tal y como se detalla en el Reglamento General de Protección de Datos"
                        />

                        <AButton variant="contained" sx={{ ml: 5 }} text={"Enviar"} onClick={handleClick} disabled={disabled} />
                        <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
                            <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
                                ¡Mensaje enviado!
                            </Alert>
                        </Snackbar>

                    </Grid>
                </Grid>
            </Paper>
        </Container>
    );
}
