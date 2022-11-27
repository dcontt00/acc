import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

export default function BasicTable(props) {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>{props.car.name}</TableCell>
            <TableCell align="right">Valor</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow>
            <TableCell component="th" scope="row">
              Tipo
            </TableCell>
            <TableCell align="right">{props.car.type}</TableCell>
          </TableRow>
          <TableRow>

            <TableCell component="th" scope="row">
              Asientos
            </TableCell>
            <TableCell align="right">{props.car.seats}</TableCell>
          </TableRow>

          <TableRow>

            <TableCell component="th" scope="row">
              Combustible
            </TableCell>
            <TableCell align="right">{props.car.fuel}</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
}
