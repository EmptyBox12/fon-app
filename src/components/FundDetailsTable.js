import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Container, Typography } from '@mui/material';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
    wordBreak: "break-all",
    maxWidth:"10px"
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

export default function FundDetailsTable({selectedFund}) {

  function createData(left, right) {
    return { left, right };
  }

  const rows = [
    createData('Kodu', selectedFund.code),
    createData('ISIN Kodu', "	TRYAKBK00482"),
    createData('Platform İşlem Durumu', "TEFAS'ta işlem görüyor"),
    createData('İşlem Başlangıç Saati', "09:00"),
    createData('Son İşlem Saati', "17:45"),
    createData('Fon Satış Valörü', "3"),
  ];

  return (
    <Container>
    <TableContainer component={Paper} elevation = {4} sx = {{bgcolor:"#e2e2e2", borderRadius: 2}}>
      <Table aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell colSpan={2}>
              <Typography textAlign="center" variant='h6'>
                Fon Detayı
              </Typography>
              </StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <StyledTableRow key={row.left}>
              <StyledTableCell sx={{fontWeight:"600"}} component="th" scope="row">
                {row.left}
              </StyledTableCell>
              <StyledTableCell align='right'>{row.right}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </Container>
  );
}
