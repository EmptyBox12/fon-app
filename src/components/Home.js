import { Container, Grid } from '@mui/material'
import React, { useState } from 'react'
import FundCard from './FundCard';
import HelpfulInfo from './HelpfulInfo';
import HomeFundDetail from './HomeFundDetail';
import TopEarners from './TopEarners'

export default function Home() {
  const [selectedFund, setSelectedFund] = useState({code:"AFO", name:"Ak Portföy Altın Yatırım"});
  return (
    <Container maxWidth = "xl">
    <Grid container spacing={2} sx= {{pt: "100px", minHeight: "100vh" }} >
      <Grid item xs={6}>
        <div>
          <TopEarners setSelectedFund = {setSelectedFund} />
        </div>
      </Grid>
      <Grid item xs={6}>
        <div>
          <HomeFundDetail selectedFund = {selectedFund} title = {true}/>
        </div>
      </Grid>
      <Grid item xs={6}>
        <div>
          <FundCard selectedFund = {selectedFund} />
        </div>
      </Grid>
      <Grid item xs={6}>
        <div>
          <HelpfulInfo />
        </div>
      </Grid>
    </Grid>
    </Container>
  )
}
