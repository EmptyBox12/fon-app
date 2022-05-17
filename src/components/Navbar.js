import {
  AppBar,
  Autocomplete,
  Box,
  Button,
  IconButton,
  InputBase,
  MenuItem,
  MenuList,
  Paper,
  Stack,
  Toolbar,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import SearchIcon from '@mui/icons-material/Search';
import CurrencyLiraIcon from '@mui/icons-material/CurrencyLira';
import { useNavigate } from "react-router-dom";


export default function Navbar() {
  const navigate = useNavigate();
  const options = [
    {
      label:"AK PORTFÖY ALTIN FONU",
      value:"AFO"
    }, 
    {
      label:"AK PORTFÖY PETROL YABANCI BYF FON SEPETİ FONU",
      value:"AES"
    },
    {
      label:"İŞ PORTFÖY EMTİA YABANCI BYF FON SEPETİ FONU",
      value:"TGE"
    },
    {
      label:"HSBC PORTFÖY HİSSE SENEDİ FONU",
      value:"HVS"
    },
    {
      label:"İŞ PORTFÖY İŞTİRAKLERİ ENDEKSİ HİSSE SENEDİ FONU",
      value:"TI3"
    },
    {
      label:"AK PORTFÖY SAĞLIK SEKTÖRÜ YABANCI HİSSE SENEDİ FONU",
      value:"AFS"
    },
    {
      label:"YAPI KREDİ PORTFÖY BALAT SERBEST (DÖVİZ) FON",
      value:"YPL"
    },
    {
      label:"AK PORTFÖY ALTINCI SERBEST(DÖVİZ) FON",
      value:"PAL"
    },
    {
      label:"İŞ PORTFÖY SERBEST (DÖVİZ) FON",
      value:"IDF"
    },
    {
      label:"ZİRAAT PORTFÖY ALTIN KATILIM FONU",
      value:"TCA"
    },
  ];
  const [searchValue, setSearchValue] = useState(null);
  const [searchInput, setSearchInput] = useState("");



  function submitSearch(e) {
    e.preventDefault();
    if(searchValue) {
      navigate(`/${searchValue.value}`);
      setSearchValue(null);
    } else {
      const searchObject = options.find(element => element.label === searchInput);
      searchObject?.value && navigate(`/${searchObject.value}`);
      setSearchInput("");
    }
  }

  const CustomPaper = (props) => {
    return <Paper {...props} sx = {{
      bgcolor:"#3e3e3e", 
      color:"white",
      ".MuiAutocomplete-option:hover": {
        backgroundColor:"#585656 !important"
      }
    }} />;
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar>
        <Toolbar sx={{display:"flex", justifyContent:"space-between", bgcolor:"#121212"}}>
          <Box onClick = {() => {navigate("/")}} sx={{display:"flex", alignItems: "center", "&:hover":{cursor:"pointer"}}}>
          <CurrencyLiraIcon sx= {{mr:"5px", fontSize:"30px", color:"rgb(144, 202, 249)"}} />
          <Typography variant="h6" component="div">
            Fon-App
          </Typography>
          </Box>
        
          <Stack 
            direction="row"
            spacing={2}
            alignItems="center"
            sx={{
              border:"1px solid silver",
              borderRadius: 1,
              height:"38px",
              width:"50%",
              px:"10px",
              "&:hover": {
                backgroundColor:"#3f3a3a"
              }
            }}
          >
            <Box sx={{
              display: "flex",
              alignItems: "center"
            }}>
              <SearchIcon />
            </Box>
            <div style={{width:"100%"}}>
              <form onSubmit={submitSearch}>
                <Autocomplete
                  id="combo-box-demo"
                  options={options}
                  isOptionEqualToValue={(option, value) => option.id === value.id}
                  value = {searchValue}
                  inputValue = {searchInput}
                  onInputChange = {(e, newValue)=> {setSearchInput(newValue)}}
                  onChange = {(e, newValue) => {setSearchValue(newValue)}}
                  autoComplete = {true}
                  PaperComponent = {CustomPaper}
                  sx = {{
                    ".MuiAutocomplete-popupIndicator": {
                      color: "white"
                    },
                    ".MuiAutocomplete-clearIndicator": {
                      color: "white"
                    },
                  }}
                  renderInput={(params) => {
                    const { InputLabelProps, InputProps, ...rest } = params;
                    return (
                      <InputBase 
                      {...params.InputProps}
                      {...rest} 
                      placeholder="Fon ara..."
                      fullWidth = {true}
                      sx = {{color:"white"}}
                    />
                    ) 
                  }}
                />
        
              </form>
            </div>
          </Stack>
          <MenuList>
            <MenuItem onClick={() => {navigate("/fund-list")}} sx={{borderRadius:2}}>
                <Typography variant="h6" color={"white"}>
                  Tüm Fonlar
                </Typography>
            </MenuItem>
          </MenuList>
        </Toolbar>
      </AppBar>
    </Box>
  );
}