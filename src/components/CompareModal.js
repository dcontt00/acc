import * as React from "react";
import { Grid, Modal, Box, Typography, Divider, Button } from "@mui/material";
import { StyledList } from "./StyledList";
import CarCardSelect from "./CarCardSelect";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "80%",
  height: "80%",
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export default function CompareModal(props) {
  const handleClose = props.hClose;
  const handleSelect = () => {
    console.log(select)
    props.hSelect(select);
    handleClose();
  };
  const [select, setSelect] = React.useState(0);
  

  return (
    <div>
      <Modal
        open={props.open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography variant="h2">Selecciona un coche</Typography>
          <Divider />
          <StyledList>
            <Grid container spacing={2} sx={{overflow: "scroll"}}>
              {props.cars.map((coche, key) => (
                <Grid item key={key} xs={6} sm={6} md={4} lg={3}>
                  <CarCardSelect
                    img={coche.img}
                    title={coche.name}
                    brand={coche.brand}
                    year={coche.year}
                    setSelect={(index)=>setSelect(index)}
                    selectedIndex={select}
                    index={key}
                  />
                </Grid>
              ))}
            </Grid>
          </StyledList>
          <Divider />
          <Box sx={{ display: "flex", flexDirection: "row" }}>
            <Button variant="contained" sx={{margin: 1}} onClick={handleSelect}>Seleccionar</Button>
            <Button variant="outlined" sx={{margin: 1}} onClick={handleClose}>Cancelar</Button>
          </Box>
        </Box>
      </Modal>
    </div>
  );
}
