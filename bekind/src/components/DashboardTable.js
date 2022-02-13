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

const friends = [
  createData('Adrianna Liu', 'adri_on_a_train'),
  createData('Chris He', 'bobbyslug'),
  createData('Julie Wang', 'substantial_wang'),
  createData('Caleb Chung', 'chungmoney12'),
  createData('Carissa Mok', 'mokmokgoesbokbok')
];

const pendings = [
    createData('Wesley Chung', 'bigchungus'),
    createData('Felix Yang', 'ageldon')
  ];

const DashboardTable = function BasicTable() {
  return (
      <div>
        <div id="BeBuds">
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 75 }} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell align="center">
                            <div style={{fontSize: 18}}>
                                Name
                            </div>
                            <div>
                                Username
                            </div>
                        </TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {friends.map((friend) => (
                        <TableRow
                        key={friend.name}
                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                        <TableCell component="th" scope="row" align="center">
                            <div style={{fontSize: 18}}>
                                {friend.name}
                            </div>
                            <div>
                                {friend.username}
                            </div>
                        </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
      </div>
      <h2 style={{color: '#E2725B'}}>
            MayBeBuds
        </h2>
      <div id="MayBeBuds">
      <TableContainer component={Paper}>
          <Table sx={{ minWidth: 75 }} aria-label="simple table">
              <TableHead>
                <TableRow>
                    <TableCell align="center">
                        <div style={{fontSize: 18}}>
                            Name
                        </div>
                        <div>
                            Username
                        </div>
                    </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {pendings.map((pending) => (
                    <TableRow
                    key={pending.name}
                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                    >
                    <TableCell component="th" scope="row" align="center">
                        <div style={{fontSize: 18}}>
                            {pending.name}
                        </div>
                        <div>
                            {pending.username}
                        </div>
                    </TableCell>
                    </TableRow>
                ))}
              </TableBody>
          </Table>
      </TableContainer>
    </div>
      </div>
  );
}

export default DashboardTable;
