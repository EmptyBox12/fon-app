import { Accordion, AccordionDetails, AccordionSummary, Container, Stack, Tab, Tabs, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React, { useEffect, useState } from 'react'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export default function HelpfulInfo() {
  const [tabIndex, setTabIndex] = useState(0);
  const [chartData, setChartData] = useState([]);


  return (
    <Container>
      <Stack sx={{ boxShadow: 4, borderRadius: 2, pt:"20px", bgcolor: "#e2e2e2", mb:"10px" }} alignItems="center">
        <Box>
          <Typography variant='h6'>
            Yardımcı Bilgiler
          </Typography>
          <Accordion sx={{bgcolor:"transparent", color:"black"}}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon sx = {{color:"black"}} />}
            >
              <Typography>Fon nedir?</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                malesuada lacus ex, sit amet blandit leo lobortis eget.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion sx={{bgcolor:"transparent", color:"black"}}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon sx = {{color:"black"}} />}
            >
              <Typography>Tefas nedir?</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                malesuada lacus ex, sit amet blandit leo lobortis eget.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion sx={{bgcolor:"transparent", color:"black"}}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon sx = {{color:"black"}} />}
            >
              <Typography>Fon türleri neler?</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                malesuada lacus ex, sit amet blandit leo lobortis eget.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion sx={{bgcolor:"transparent", color:"black"}}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon sx = {{color:"black"}} />}
            >
              <Typography>Fon Portföyleri neler?</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                malesuada lacus ex, sit amet blandit leo lobortis eget.
              </Typography>
            </AccordionDetails>
          </Accordion>
        </Box>
      </Stack>
    </Container>
  )
}
