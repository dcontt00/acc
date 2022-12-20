import * as React from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

export default function ClaimReason() {
    const [ccname, setCCName] = React.useState("");

    const handleChange = (event) => {
        setCCName(event.target.value);
    };

    return (
        <React.Fragment>
            <Typography variant="h6" gutterBottom>Motivos</Typography>

            <Grid container spacing={3}>
                <Grid item xs={12}>
                    <FormControl fullWidth>
                        <InputLabel id="ccname_label">Motivo de la reclamación</InputLabel>
                            <Select
                                labelId="cc_name"
                                id="ccname_select"
                                value={ccname}
                                label="Motivo de la reclamación"
                                onChange={handleChange}
                            >
                                <MenuItem value={"Calidad no adecuada"}>Calidad no adecuada</MenuItem>
                                <MenuItem value={"Entregado con daños"}>Entregado con daños</MenuItem>
                                <MenuItem value={"Funcionamiento incorrecto"}>Funcionamiento incorrecto</MenuItem>
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
                    />
                </Grid>
            </Grid>
        </React.Fragment>
    );
}
