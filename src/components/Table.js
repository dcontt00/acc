import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function createData(description, value) {
  return { description, value };
}

const rows = [
  createData('Motor', 
  'Motor de gasolina de 3 cilindros en línea con inyección directa y turbocompresor de gases de escape'),
  createData('Cilindrada CC', 999),
  createData('Potencia máxima kW (CV)/rpm', '70 / 5.000 - 5.500'),
  createData('Par máximo Nm/rpm', '175/1600 - 3500'),
  createData('Gestión del motor', 'Gasolina totalmente electrónica'),
  createData('Depurador de gases de escape', 'Catalizador, sonda lambda, filtro de partículas de gasolina'),
  createData('Tipo de tracción', 'Tracción delantera'),
  createData('Embrague', 'Embrague seco accionado hidráulicamente, revestimientos sin asbesto/plomo'),
  createData('Tipo de cambio', 'Caja de cambios manual de 5 velocidades'),
  createData('Eje delantero', 'Eje de puntal McPherson en la parte delantera'),
  createData('Eje trasero', 'Eje trasero con barra de torsión'),
  createData('Sistema de frenos', 'Sistema de frenado diagonal de 2 circuitos con ESC/ABS/EBV, servofreno, asistente de frenado hidráulico'),
  createData('Dirección', 'Dirección electromecánica con asistencia eléctrica en función de la velocidad; Radio de giro de aproximadamente 10,6 m'),
  createData('Peso en vacío', '1175 kg'),
  createData('Peso máx. admisible', '1.630 kg'),
  createData('Carga en baca/de apoyo admisible', '75/- kg'),
  createData('Capacidad del maletero', '335/1090 l'),
  createData('Capacidad del depósito', '40 aprox. l'),
  createData('Velocidad máxima', '193 km/h'),
  createData('Aceleración 0-100 km/h', '11 s'),
  createData('Tipo de combustible', 'Super 95'),
  createData('Valores de consumo y emisiones', ''), 
  createData('Bajo', '7,1 l/100km'), 
  createData('Medio', '5,4 l/100km'), 
  createData('Alto', '4,8 l/100km'), 
  createData('Extra-alto', '5,8 l/100km'), 
  createData('Ciclo mixto', '5,6 l/100km'), 
  createData('Emisiones de CO2', '127 g/km')
];

export default function BasicTable() {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>BMW IX</TableCell>
            <TableCell align="right">Valor</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.description}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.description}
              </TableCell>
              <TableCell align="right">{row.value}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
