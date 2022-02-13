import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function createData(name, username) {
  return { name, username };
}

const rows = [
  createData('Adrianna Liu', 'adri_on_a_train'),
  createData('Chris He', 'bobbyslug'),
  createData('Julie Wang', 'substantial_wang'),
  createData('Caleb Chung', 'chungmoney12'),
  createData('Carissa Mok', 'mokmokgoesbokbok'),
];

const DashboardTable = function BasicTable() {
  return (
      <div style={{maxWidth: 250}, {alignContent: 'center'}}>
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 250 }} aria-label="simple table">
                <TableHead>
                <TableRow>
                    <TableCell align="center">Name</TableCell>
                    <TableCell align="center">Username</TableCell>
                </TableRow>
                </TableHead>
                <TableBody>
                {rows.map((row) => (
                    <TableRow
                    key={row.name}
                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                    >
                    <TableCell component="th" scope="row" align="center">
                        {row.name}
                    </TableCell>
                    <TableCell align="center">{row.username}</TableCell>
                    </TableRow>
                ))}
                </TableBody>
            </Table>
        </TableContainer>
      </div>
  );
}

export default DashboardTable;
