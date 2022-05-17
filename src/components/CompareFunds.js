import { Autocomplete, Container, Stack, Tab, Tabs, Typography, InputBase, Paper, IconButton} from '@mui/material'
import AddIcon from '@mui/icons-material/Add';
import { Box } from '@mui/system'
import React, { useEffect, useState } from 'react'
import BarChart from './BarChart'

export default function CompareFunds({selectedFund}) {
  const [tabIndex, setTabIndex] = useState(0);
  const [chartData, setChartData] = useState([
    {
      code: 'Altın',
      price: 123,
      name: "Altın Değeri",
    },
    {
      code: 'Mevduat Faizi',
      price: 123,
      name: "Merkez Bankası Mevduat Faizi",
    },
    {
      code: 'Dolar',
      price: 123,
      name: "Amerikan Doları",

    },
    {
      code: 'Euro',
      price: 123,
      name: "Euro",

    },
    {
      code: selectedFund.code,
      price: 123,
      name: selectedFund.name
    }
  ].sort((a, b) => a.price - b.price));
  const [searchInput, setSearchInput] = useState("");
  const [searchValue, setSearchValue] = useState(null);
    const options = [
    {
      price: tabIndex === 0 ? 250 : tabIndex === 1 ? 170 : 200,
      name:"AK PORTFÖY ALTIN FONU",
      code:"AFO"
    }, 
    {
      price: tabIndex === 0 ? 250 : tabIndex === 1 ? 170 : 200,
      name:"AK PORTFÖY PETROL YABANCI BYF FON SEPETİ FONU",
      code:"AES"
    },
    {
      price: tabIndex === 0 ? 250 : tabIndex === 1 ? 170 : 200,
      name:"İŞ PORTFÖY EMTİA YABANCI BYF FON SEPETİ FONU",
      code:"TGE"
    },
    {
      price: tabIndex === 0 ? 250 : tabIndex === 1 ? 170 : 200,
      name:"HSBC PORTFÖY HİSSE SENEDİ FONU",
      code:"HVS"
    },
    {
      price: tabIndex === 0 ? 250 : tabIndex === 1 ? 170 : 200,
      name:"İŞ PORTFÖY İŞTİRAKLERİ ENDEKSİ HİSSE SENEDİ FONU",
      code:"TI3"
    },
    {
      price: tabIndex === 0 ? 250 : tabIndex === 1 ? 170 : 200,
      name:"AK PORTFÖY SAĞLIK SEKTÖRÜ YABANCI HİSSE SENEDİ FONU",
      code:"AFS"
    },
    {
      price: tabIndex === 0 ? 250 : tabIndex === 1 ? 170 : 200,
      name:"YAPI KREDİ PORTFÖY BALAT SERBEST (DÖVİZ) FON",
      code:"YPL"
    },
    {
      price: tabIndex === 0 ? 250 : tabIndex === 1 ? 170 : 200,
      name:"AK PORTFÖY ALTINCI SERBEST(DÖVİZ) FON",
      code:"PAL"
    },
    {
      price: tabIndex === 0 ? 250 : tabIndex === 1 ? 170 : 200,
      name:"İŞ PORTFÖY SERBEST (DÖVİZ) FON",
      code:"IDF"
    },
    {
      price: tabIndex === 0 ? 250 : tabIndex === 1 ? 170 : 200,
      name:"ZİRAAT PORTFÖY ALTIN KATILIM FONU",
      code:"TCA"
    },
  ];

  const CustomPaper = (props) => {
    return <Paper {...props} sx = {{
      bgcolor: "#e2e2e2",
      color:"black",
      ".MuiAutocomplete-option:hover": {
        backgroundColor:"rgb(220, 217, 217) !important"
      }
    }} />;
  };

  useEffect(()=> {
    let newArray = chartData.map(item => {
      let newItem = {...item};
      newItem.price = Math.floor(Math.random()*100);
      return newItem;
    })
    setChartData(newArray.sort((a, b) => a.price - b.price ));
  }, [tabIndex])

  function submitSearch(e) {
    e.preventDefault();
    if(searchValue) {
      if(chartData.some(item => item.name === searchValue.name)){
        setSearchValue(null);
        return;
      }
      setChartData((data) => [...data, searchValue]);
      setSearchValue(null);
    } else if (searchInput !== "") {
      if(chartData.some(item => item.name === searchInput)){
        setSearchInput("");
        return;
      }
      const searchObject = options.find(element => element.name === searchInput);
      setChartData((data) => [...data, searchObject]);
      setSearchInput("");
    }
  }

  return (
    <Container>
      <Stack sx={{boxShadow:4, borderRadius:2, py:1, bgcolor:"#e2e2e2"}} alignItems="center" justifyContent="center">
        <Box>
          <Typography variant='h6'>
            Fon Karşılaştır
          </Typography>
        </Box>
        <Box width="50%" sx={{py:1, px:2,my:2, border:"1px solid silver", borderRadius:2, display:"flex", alignItems:"center", gap:"5px"}}>
        <form onSubmit={submitSearch} style = {{width:"100%"}}>
                <Autocomplete
                  id="combo-box-demo"
                  options={options}
                  getOptionLabel = {(option) => option.name}
                  isOptionEqualToValue={(option, value) => option.id === value.id}
                  value = {searchValue}
                  inputValue = {searchInput}
                  onInputChange = {(e, newValue)=> {setSearchInput(newValue)}}
                  onChange = {(e, newValue) => {setSearchValue(newValue)}}
                  autoComplete = {true}
                  PaperComponent = {CustomPaper}
                  renderInput={(params) => {
                    const { InputLabelProps, InputProps, ...rest } = params;
                    return (
                      <InputBase
                      {...params.InputProps}
                      {...rest} 
                      placeholder="Fon ara..."
                      fullWidth = {true}
                    />
                    ) 
                  }}
                />
              </form>
              <IconButton onClick={submitSearch}>
                <AddIcon />
              </IconButton>
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
            <BarChart setSelectedFund = {null} data={chartData}/> 
            :
            tabIndex === 1 ?
            <BarChart setSelectedFund = {null} data={chartData}/> 
            :
            <BarChart setSelectedFund = {null} data={chartData}/> 
          }
          </Box>
      </Stack>
    </Container>
  )
}
