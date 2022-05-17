import { Container, Grid } from '@mui/material';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import FundDetailsPieChart from './FundDistribution';
import FundDetailsTable from './FundDetailsTable';
import FundSummary from './FundSummary';
import HomeFundDetail from './HomeFundDetail';
import CompareFunds from './CompareFunds';

export default function FonPage() {
  const { code } = useParams();
  const [data, setData] = useState({name:"Ak Portföy Altın Yatırım", code})

  useEffect(()=> {
    if(code === "AFA"){
      setData({name:"AK PORTFÖY ALTIN FONU", code})
    } else if(code === "AES"){
      setData({name:"AK PORTFÖY PETROL YABANCI BYF FON SEPETİ FONU", code})
    } else if(code === "TGE"){
      setData({name:"İŞ PORTFÖY EMTİA YABANCI BYF FON SEPETİ FONU", code})
    } else if(code === "HVS"){
      setData({name:"HSBC PORTFÖY HİSSE SENEDİ FONU", code})
    } else if(code === "TI3"){
      setData({name:"İŞ PORTFÖY İŞTİRAKLERİ ENDEKSİ HİSSE SENEDİ FONU", code})
    } else if(code === "AFS"){
      setData({name:"AK PORTFÖY SAĞLIK SEKTÖRÜ YABANCI HİSSE SENEDİ FONU", code})
    } else if(code === "YPL"){
      setData({name:"YAPI KREDİ PORTFÖY BALAT SERBEST (DÖVİZ) FON", code})
    } else if(code === "PAL"){
      setData({name:"AK PORTFÖY ALTINCI SERBEST(DÖVİZ) FON", code})
    } else if(code === "IDF"){
      setData({name:"İŞ PORTFÖY SERBEST (DÖVİZ) FON", code})
    } else if(code === "TCA"){
      setData({name:"ZİRAAT PORTFÖY ALTIN KATILIM FONU", code})
    }
  }, [code]);

  return (
    <Container>
      <Grid container spacing={2} sx={{ pt: "90px", minHeight: "100vh" }} >
        <Grid item xs = {12}>
          <FundSummary data = {data} />
        </Grid>
        <Grid item xs = {12}>
          <HomeFundDetail  selectedFund={data}/>
        </Grid>
        <Grid item xs = {6}>
          <FundDetailsTable selectedFund={data} />
        </Grid>
        <Grid item xs = {6}>
          <FundDetailsPieChart selectedFund={data} />
        </Grid>
        <Grid item xs = {12}>
          <CompareFunds selectedFund={data} />
        </Grid>
      </Grid>
    </Container>
  )
}
