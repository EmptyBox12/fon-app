import { Container, Stack, Tab, Tabs, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React, { useEffect, useState } from 'react'
import FundDistrubitionPieChart from './FundDistributionPieChart';
import HomeLineGraph from './HomeLineGraph';

export default function FundDistribution({selectedFund}) {
  const [chartData, setChartData] = useState( 
  [{
    ratio: 20,
    name: "Yabancı Hisse Senedi",
  },
  {
    ratio: 40,
    name: "Kıymetli Maden",
  },
  {
    ratio: 30,
    name: "Hisse Senedi",
  },]);


  return (
    <Container>
      <Stack sx={{boxShadow:4, borderRadius:2, py:1, bgcolor:"#e2e2e2"}} alignItems="center" justifyContent="center">
          <Box>
            <Typography variant='h6'>
              Fon Varlık Dağılımı
            </Typography>
          </Box>
        <Box sx ={{width:"100%", height:"318.08px", py:1}}>
          <FundDistrubitionPieChart data = {chartData} />
        </Box>
      </Stack>
    </Container>
  )
}
