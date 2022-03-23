import React from "react";
import { InputBase, Divider, FormControl, InputLabel, Grid, TextField, FormLabel, RadioGroup, FormControlLabel, Radio, Select, MenuItem, Button, Menu } from "@mui/material";
import { styled } from "@mui/system";
import { makeStyles } from "@mui/styles";
import Navbar from "../../components/user/Navbar";
import FooterUser from "../../components/FooterUser";


const Frame = styled('div')(({ theme }) => ({
  backgroundColor: "#fff",
  // marginLeft: 280,
  // marginRight: 280,
  width: "70%",
  borderRadius: 7,
  margin: "auto",
  height: "auto",
  marginTop: 20,
}));

const BootstrapInput = styled(InputBase)(({ theme }) => ({
  'label + &': {
    marginTop: theme.spacing(3),
  },
  '& .MuiInputBase-input': {
    borderRadius: 4,
    position: 'relative',
    backgroundColor: theme.palette.mode === 'light' ? '#ffffff' : '#2b2b2b',
    border: '1px solid #ced4da',
    fontSize: 14,
    padding: '10px 12px',
    width: '380px'
  },
}));


const Input = styled('input')({
  display: 'none',
});

const useStyles = makeStyles(() => ({
  body: {
    marginLeft: 25,
    marginRight: 25,
    paddingTop: 20,
    paddingBottom: 15,
    marginBottom: 30,
  },
  item: {
    marginTop: 20,
    marginBottom: 20,
    width: "100%"
  },
  content: {
    marginLeft: 50,
    marginRight: 25,
    marginBottom: 10,
    // paddingTop: 20,
  },
  button: {
    display: "flex",
    justifyContent: "flex-end",
  }
}))

const Apply = () => {
  return (
    <>
<Navbar/>
<Frame>
<div>
  
</div>
</Frame>
<FooterUser/>
    </>
  )
}

export default Apply;