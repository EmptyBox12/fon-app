import { Container, Stack, Tab, Tabs, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React, { useEffect, useState } from 'react'
import BarChart from './BarChart'

export default function TopEarners({setSelectedFund}) {
  const [tabIndex, setTabIndex] = useState(0);
  const [chartData, setChartData] = useState([]);

  useEffect(()=> {
      setChartData(
       [{
          code: 'AFO',
          price: tabIndex === 0 ? 250 : tabIndex === 1 ? 170 : 200,
          name: "AK PORTFÖY ALTIN FONU",
        },
        {
          code: 'AES',
          price: tabIndex === 0 ? 350 : tabIndex === 1 ? 110 : 290,
          name: "AK PORTFÖY PETROL YABANCI BYF FON SEPETİ FONU",
        },
        {
          code: 'TGE',
          price: tabIndex === 0 ? 30 : tabIndex === 1 ? 150 : 400,
          name: "İŞ PORTFÖY EMTİA YABANCI BYF FON SEPETİ FONU",
        },
        {
          code: 'HVS',
          price: tabIndex === 0 ? 330 : tabIndex === 1 ? 250 : 240,
          name: "HSBC PORTFÖY HİSSE SENEDİ FONU",

        },
        {
          code: 'TI3',
          price: tabIndex === 0 ? 530 : tabIndex === 1 ? 250 : 110,
          name: "İŞ PORTFÖY İŞTİRAKLERİ ENDEKSİ HİSSE SENEDİ FONU",
        },
        {
          code: 'AFS',
          price: tabIndex === 0 ? 110 : tabIndex === 1 ? 290 : 370,
          name: "AK PORTFÖY SAĞLIK SEKTÖRÜ YABANCI HİSSE SENEDİ FONU",
        },
        {
          code: 'YPL',
          price: tabIndex === 0 ? 710 : tabIndex === 1 ? 190 : 320,
          name: "YAPI KREDİ PORTFÖY BALAT SERBEST (DÖVİZ) FON",
        },
        {
          code: 'PAL',
          price: tabIndex === 0 ? 610 : tabIndex === 1 ? 190 : 325,
          name: "AK PORTFÖY ALTINCI SERBEST(DÖVİZ) FON",
        },
        {
          code: 'IDF',
          price: tabIndex === 0 ? 432 : tabIndex === 1 ? 421 : 133,
          name: "İŞ PORTFÖY SERBEST (DÖVİZ) FON",
        },
        {
          code: 'TCA',
          price: tabIndex === 0 ? 212 : tabIndex === 1 ? 694 : 432,
          name: "ZİRAAT PORTFÖY ALTIN KATILIM FONU",
        },]
      )
    }
  , [tabIndex])

  return (
    <Container>
      <Stack sx={{boxShadow:4, borderRadius:2, py:1, bgcolor:"#e2e2e2"}} alignItems="center" justifyContent="center">
        <Box>
          <Typography variant='h6'>
            En Çok Kazandıranlar
          </Typography>
        </Box>
        <Box>
          <Tabs      
            TabIndicatorProps={{
              style: {
                backgroundColor: "#3e3e3e"
            },
            }} 
            value={tabIndex} 
            onChange = {(e, newIndex) => {setTabIndex(newIndex)}}>
            <Tab 
            sx={{
              color:"#3e3e3e",
              "&.Mui-selected":{
                color:"rgb(35, 31, 32)"
              },
              "&.MuiTab-root":{
                textTransform: "none"
              }
              }} 
              label="1 Yıllık" />
            <Tab sx={{
              color:"#3e3e3e",
              "&.Mui-selected":{
                color:"rgb(35, 31, 32)"
              },
              "&.MuiTab-root":{
                textTransform: "none"
              }
              }}
               label="6 Aylık" />
            <Tab sx={{
              color:"#3e3e3e",
              "&.Mui-selected":{
                color:"rgb(35, 31, 32)"
              },
              "&.MuiTab-root":{
                textTransform: "none"
              }
              }}
               label="Aylık" />
          </Tabs>
        </Box>
        <Box sx ={{width:"100%", height:"320px", py:1}}>
           {tabIndex === 0 ? 
            <BarChart setSelectedFund = {setSelectedFund} data={chartData}/> 
            :
            tabIndex === 1 ?
            <BarChart setSelectedFund = {setSelectedFund} data={chartData}/> 
            :
            <BarChart setSelectedFund = {setSelectedFund} data={chartData}/> 
          }
          </Box>
      </Stack>
    </Container>
  )
}
