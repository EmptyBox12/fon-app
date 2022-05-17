import React, { useState } from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import { Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const columns = [
  { id: 'code', label: 'Fon Kodu', minWidth: 100 },
  { id: 'name', label: 'Fon Adı', minWidth: 100 },
  {
    id: 'type',
    label: 'Şemsiye Türü',
    minWidth: 100,
  },
  {
    id: 'month1',
    label: '1 Ay (%)',
    minWidth: 100,
    align: 'right',
  },
  {
    id: 'month3',
    label: '3 Ay (%)',
    minWidth: 100,
    align: 'right',
  },
  {
    id: 'month6',
    label: '6 Ay (%)',
    minWidth: 100,
    align: 'right',
  },
  {
    id: 'newYear',
    label: 'Yılbaşı (%)',
    minWidth: 100,
    align: 'right',
  },
  {
    id: 'year1',
    label: '1 Yıl (%)',
    minWidth: 100,
    align: 'right',
  },
  {
    id: 'year3',
    label: '3 Yıl (%)',
    minWidth: 100,
    align: 'right',
  },
  {
    id: 'year5',
    label: '5 Yıl (%)',
    minWidth: 100,
    align: 'right',
  },
];

function createData(code, name, type, month1, month3, month6, newYear, year1, year3, year5) {
  return { code, name, type, month1, month3, month6, newYear, year1, year3, year5 };
}

const rows = [
  createData('AFO', 'Ak Portföy Altın', "Kıymetli Madenler Şemsiye Fonu", -1.8033, 14.88, 55.25, 16.65, 83.66, 239.18, 482.47),
  createData('AFO', 'Ak Portföy Altın', "Kıymetli Madenler Şemsiye Fonu", -1.8033, 14.88, 55.25, 16.65, 83.66, 239.18, 482.47),
  createData('AFO', 'Ak Portföy Altın', "Kıymetli Madenler Şemsiye Fonu", -1.8033, 14.88, 55.25, 16.65, 83.66, 239.18, 482.47),
  createData('AFO', 'Ak Portföy Altın', "Kıymetli Madenler Şemsiye Fonu", -1.8033, 14.88, 55.25, 16.65, 83.66, 239.18, 482.47),
  createData('AFO', 'Ak Portföy Altın', "Kıymetli Madenler Şemsiye Fonu", -1.8033, 14.88, 55.25, 16.65, 83.66, 239.18, 482.47),
  createData('AFO', 'Ak Portföy Altın', "Kıymetli Madenler Şemsiye Fonu", -1.8033, 14.88, 55.25, 16.65, 83.66, 239.18, 482.47),
  createData('AFO', 'Ak Portföy Altın', "Kıymetli Madenler Şemsiye Fonu", -1.8033, 14.88, 55.25, 16.65, 83.66, 239.18, 482.47),
  createData('AFO', 'Ak Portföy Altın', "Kıymetli Madenler Şemsiye Fonu", -1.8033, 14.88, 55.25, 16.65, 83.66, 239.18, 482.47),
  createData('AFO', 'Ak Portföy Altın', "Kıymetli Madenler Şemsiye Fonu", -1.8033, 14.88, 55.25, 16.65, 83.66, 239.18, 482.47),
  createData('AFO', 'Ak Portföy Altın', "Kıymetli Madenler Şemsiye Fonu", -1.8033, 14.88, 55.25, 16.65, 83.66, 239.18, 482.47),
  createData('AFO', 'Ak Portföy Altın', "Kıymetli Madenler Şemsiye Fonu", -1.8033, 14.88, 55.25, 16.65, 83.66, 239.18, 482.47),
  createData('AFO', 'Ak Portföy Altın', "Kıymetli Madenler Şemsiye Fonu", -1.8033, 14.88, 55.25, 16.65, 83.66, 239.18, 482.47),
  createData('AFO', 'Ak Portföy Altın', "Kıymetli Madenler Şemsiye Fonu", -1.8033, 14.88, 55.25, 16.65, 83.66, 239.18, 482.47),
  createData('AFO', 'Ak Portföy Altın', "Kıymetli Madenler Şemsiye Fonu", -1.8033, 14.88, 55.25, 16.65, 83.66, 239.18, 482.47),
  createData('AFO', 'Ak Portföy Altın', "Kıymetli Madenler Şemsiye Fonu", -1.8033, 14.88, 55.25, 16.65, 83.66, 239.18, 482.47),
  createData('AFO', 'Ak Portföy Altın', "Kıymetli Madenler Şemsiye Fonu", -1.8033, 14.88, 55.25, 16.65, 83.66, 239.18, 482.47),
  createData('AFO', 'Ak Portföy Altın', "Kıymetli Madenler Şemsiye Fonu", -1.8033, 14.88, 55.25, 16.65, 83.66, 239.18, 482.47),
  createData('AFO', 'Ak Portföy Altın', "Kıymetli Madenler Şemsiye Fonu", -1.8033, 14.88, 55.25, 16.65, 83.66, 239.18, 482.47),
  createData('AFO', 'Ak Portföy Altın', "Kıymetli Madenler Şemsiye Fonu", -1.8033, 14.88, 55.25, 16.65, 83.66, 239.18, 482.47),
  createData('AFO', 'Ak Portföy Altın', "Kıymetli Madenler Şemsiye Fonu", -1.8033, 14.88, 55.25, 16.65, 83.66, 239.18, 482.47),
  createData('AFO', 'Ak Portföy Altın', "Kıymetli Madenler Şemsiye Fonu", -1.8033, 14.88, 55.25, 16.65, 83.66, 239.18, 482.47),
  createData('AFO', 'Ak Portföy Altın', "Kıymetli Madenler Şemsiye Fonu", -1.8033, 14.88, 55.25, 16.65, 83.66, 239.18, 482.47),
  createData('AFO', 'Ak Portföy Altın', "Kıymetli Madenler Şemsiye Fonu", -1.8033, 14.88, 55.25, 16.65, 83.66, 239.18, 482.47),
  createData('AFO', 'Ak Portföy Altın', "Kıymetli Madenler Şemsiye Fonu", -1.8033, 14.88, 55.25, 16.65, 83.66, 239.18, 482.47),
  createData('AFO', 'Ak Portföy Altın', "Kıymetli Madenler Şemsiye Fonu", -1.8033, 14.88, 55.25, 16.65, 83.66, 239.18, 482.47),
  createData('AFO', 'Ak Portföy Altın', "Kıymetli Madenler Şemsiye Fonu", -1.8033, 14.88, 55.25, 16.65, 83.66, 239.18, 482.47),
  createData('AFO', 'Ak Portföy Altın', "Kıymetli Madenler Şemsiye Fonu", -1.8033, 14.88, 55.25, 16.65, 83.66, 239.18, 482.47),
  createData('AFO', 'Ak Portföy Altın', "Kıymetli Madenler Şemsiye Fonu", -1.8033, 14.88, 55.25, 16.65, 83.66, 239.18, 482.47),
  createData('AFO', 'Ak Portföy Altın', "Kıymetli Madenler Şemsiye Fonu", -1.8033, 14.88, 55.25, 16.65, 83.66, 239.18, 482.47),
  createData('AFO', 'Ak Portföy Altın', "Kıymetli Madenler Şemsiye Fonu", -1.8033, 14.88, 55.25, 16.65, 83.66, 239.18, 482.47),
];


export default function FundList() {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(25);
  const navigate = useNavigate();

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const navigateDetail = (code) => {
    navigate(`/${code}`);
  }

  return (
    <Paper sx={{ width: '100%', overflow: 'auto', mt:"64px", height:"91.5vh", borderRadius:"0", bgcolor:"#e2e2e2" }}>
      <Typography variant='h4' sx = {{my:"25px"}}>
        Fon Listesi
      </Typography>
      <TableContainer sx= {{maxHeight:"75%"}}>
        <Table stickyHeader aria-label="sticky table" sx={{bgcolor:"#e1e1e1"}}>
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth, backgroundColor:"#e1e1e1" }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row) => {
                return (
                  <TableRow hover sx = {{"&:hover": {cursor:"pointer"}}} key={row.code}>
                    {columns.map((column) => {
                      const value = row[column.id];
                      return (
                        <TableCell sx={{borderBottom:"1px solid #a5a4a4"}} onClick={() => {navigateDetail(row.code)}} key={column.id} align={column.align}>
                          {value}
                        </TableCell>
                      );
                    })}
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[25, 100]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
  );
}
