import * as React from 'react';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
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

const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
        backgroundColor: '#CAE7C1',
        color: '#3A3B3C',
    },
    [`&.${tableCellClasses.body}`]: {
        fontSize: 14,
    },
}));

const DashboardTable = function BasicTable() {
    return (
        <div>
            <div id="BeBuds">
                <TableContainer component={Paper}>
                    <Table sx={{ minWidth: 75 }} aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                <StyledTableCell align="center">
                                    <div style={{ fontSize: 18, fontWeight: 'bold' }}>
                                        Name
                                    </div>
                                    <div style={{ fontWeight: 'bold' }}>
                                        Username
                                    </div>
                                </StyledTableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {friends.map((friend) => (
                                <TableRow
                                    key={friend.name}
                                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                >
                                    <TableCell component="th" scope="row" align="center">
                                        <div style={{ fontSize: 18 }}>
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
            <br></br>
            <h2 style={{ color: '#E2725B' }}>
                MayBeBuds
            </h2>
            <br></br>
            <div id="MayBeBuds">
                <TableContainer component={Paper}>
                    <Table sx={{ minWidth: 75 }} aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                <StyledTableCell align="center">
                                    <div style={{ fontSize: 18, fontWeight: 'bold' }}>
                                        Name
                                    </div>
                                    <div style={{ fontWeight: 'bold' }}>
                                        Username
                                    </div>
                                </StyledTableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {pendings.map((pending) => (
                                <TableRow
                                    key={pending.name}
                                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                >
                                    <TableCell component="th" scope="row" align="center">
                                        <div style={{ fontSize: 18 }}>
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
