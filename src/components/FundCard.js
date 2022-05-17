import { Accordion, AccordionDetails, AccordionSummary, Box, Card, CardActions, CardContent, Container, Stack, Typography } from '@mui/material'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import CurrencyLiraIcon from '@mui/icons-material/CurrencyLira';
import React, { useEffect, useState } from 'react'

export default function FundCard({selectedFund}) {
  const [mockReturn, setMockReturn] = useState();

  useEffect(()=> {
    const values = [10, 20, 40, -10, -20, -40];
    setMockReturn(values[Math.floor(Math.random() * values.length)]);
  }, [selectedFund]);

  return (
    <Container>
      <Stack sx={{ boxShadow: 4, borderRadius: 2, bgcolor: "#e2e2e2", mb: "10px"}} alignItems="center">
        <Card sx={{ bgcolor: "#e2e2e2", py:"20px", minHeight:"204px", width:"100%", display:"flex", flexDirection:"column" }} >
          <CardContent sx=
            {{
              display: "flex",
              justifyContent: "space-between",
              bgcolor: mockReturn > 0 ? "#b7f3b7" : "#f47d7b",
              width: "90%",
              alignSelf: "center",
              borderRadius: 2,
              border:"1px solid silver"
            }}>
            <Box>
            <Typography variant="h5" component="div" sx={{textAlign:"left"}}>
              {selectedFund.code}
            </Typography>
            <Typography variant="subtitle2" color="text.secondary">
              {selectedFund.name}
            </Typography>
            </Box>
            <Box>
              <Box sx={{ display: "flex", alignItems: "center", gap: "5px" }}>
                <Typography variant="h6" color="text.secondary">
                  Günlük Getiri %{mockReturn}
                </Typography>
                {mockReturn > 0 ? <ArrowUpwardIcon color='success' /> : <ArrowDownwardIcon color='error' />}
              </Box>
              <Box sx={{ display: "flex", alignItems: "center", justifyContent:"flex-end" }}>
                <Typography variant="subtitle2" color="text.secondary">
                  Fon Fiyatı: 200
                </Typography>
                <CurrencyLiraIcon sx={{fontSize:"15px", color:"rgb(57 159 242)"}}/>
              </Box>
            </Box>
          </CardContent>
          <CardActions>
            <Accordion sx={{ bgcolor: "#e2e2e2" }}>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon sx={{ color: "black" }} />}
              >
                <Typography>Ayrıntılı Bilgi</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                  malesuada lacus ex, sit amet blandit leo lobortis eget.
                </Typography>
              </AccordionDetails>
            </Accordion>
          </CardActions>
        </Card>
      </Stack>
    </Container>
  )
}
