import { Paper, Typography, Grid, Icon } from "@mui/material"
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { Box } from "@mui/system";
export default function Confirmation() {
    return (
        <Grid container justifyContent="center" alignItems="center" sx={{ height: "50vh" }}>


            <Paper sx={{ p: 5 }}>
                <Grid container spacing={2}
                    direction="column"
                    alignItems="center"
                    justifyContent="center">
                    <Grid item xs={12} sm={12} md={12} lg={10}>
                        <Icon color="success" sx={{ fontSize: 100 }} >
                            <CheckCircleIcon fontSize="100" />
                        </Icon>
                    </Grid>
                    <Grid item xs={12} sm={12} md={12} lg={12}>

                        <Typography variant="h2">Cuenta creada con exito</Typography>
                    </Grid>
                    <Grid item xs={12} sm={12} md={12} lg={12}>
                        <Typography variant="h5">Ya puedes iniciar sesion</Typography>
                    </Grid>
                </Grid>
            </Paper>

        </Grid>

    )
}