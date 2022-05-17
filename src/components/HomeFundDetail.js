import { Container, Stack, Tab, Tabs, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React, { useEffect, useState } from 'react'
import HomeLineGraph from './HomeLineGraph';

export default function HomeFundDetail({selectedFund, title}) {
  const [tabIndex, setTabIndex] = useState(0);
  const [chartData, setChartData] = useState([]);

  useEffect(()=> {
    const priceArray = [122, 90, 54, 212, 300, 140, 130];
    console.log(priceArray[Math.floor(Math.random()*priceArray.length)])
      setChartData(
       [{
          code: selectedFund.code,
          price: priceArray[Math.floor(Math.random()*priceArray.length)],
          name: "06-10-2022",
        },
        {
          code: selectedFund.code,
          price: priceArray[Math.floor(Math.random()*priceArray.length)],
          name: "07-10-2022",
        },
        {
          code: selectedFund.code,
          price: priceArray[Math.floor(Math.random()*priceArray.length)],
          name: "08-10-2022",
        },
        {
          code: selectedFund.code,
          price: priceArray[Math.floor(Math.random()*priceArray.length)],
          name: "09-10-2022",

        },
        {
          code: selectedFund.code,
          price: priceArray[Math.floor(Math.random()*priceArray.length)],
          name: "10-10-2022",

        },
        {
          code: selectedFund.code,
          price: priceArray[Math.floor(Math.random()*priceArray.length)],
          name: "11-10-2022",
        },
        {
          code: selectedFund.code,
          price: priceArray[Math.floor(Math.random()*priceArray.length)],
          name: "12-10-2022",
        },]
      )
  }, [tabIndex, selectedFund])

  return (
    <Container>
      <Stack sx={{boxShadow:4, borderRadius:2, py:1, bgcolor:"#e2e2e2"}} alignItems="center" justifyContent="center">
        {title ?
          <Box>
            <Typography variant='h6'>
              {selectedFund.name}
            </Typography>
            <Typography variant='subtitle1'>
              {selectedFund.code}
            </Typography>
          </Box>
          : null
        }
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
        <Box sx ={{width:"100%", height:"291px", py:1}}>
          <HomeLineGraph data = {chartData} />
        </Box>
      </Stack>
    </Container>
  )
}
