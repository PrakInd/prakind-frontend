import React from "react";
import { InputBase, Divider, FormControl, InputLabel, Grid, TextField, FormLabel, RadioGroup, FormControlLabel, Radio, Select, MenuItem } from "@mui/material";
import FooterUser from "../../components/FooterUser";
import Header from "../../components/Header";
import { styled } from "@mui/system";
import { makeStyles } from "@mui/styles";


// import Form from "../../components/Form";

// import { makeStyles } from "@mui/styles";
// import { styled } from "@mui/system";

// const useStyles = makeStyles(theme => ({
//   root: {
//     '& .MuiFormControl-root': {
//       width: '80%',
//       margin: theme.spacing(1)
//     }
//   }
// }))

const useStyles = makeStyles(() => ({
  body: {
    marginLeft: 25,
    marginRight: 25,
    paddingTop: 5,
    paddingBottom: 15,
    marginBottom: 30,
    border: '2px solid #f1f1f1'
  },
  item: {
    marginTop: 20,
    width: "100%"
  },
}))

const ProfileForm = () => {
  const classes = useStyles();
  return (
    <div>
      <Header />
      <div className={classes.body}>
        <Grid container >
          <Grid item xs={6}>
            <TextField
              name="fullName"
              label="Nama Lengkap"
              size="small"
            />
            <p></p>
            <TextField
              name="email"
              label="Email"
              size="small"
            />
            <p></p>
            <TextField
              name="address"
              label="Alamat Lengkap"
              size="small"
            />
            <p></p>
            <FormControl>
              <FormLabel>Gender</FormLabel>
              <RadioGroup>
                <FormControlLabel value="lakilaki" control={<Radio />} label="Laki-laki" />
                <FormControlLabel value="perempuan" control={<Radio />} label="Perempuan" />
              </RadioGroup>
            </FormControl>
          </Grid>
          <Grid item xs={6}>

            <p></p>
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">Sekolah</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                label="Sekolah"
              >
                <MenuItem>SMK se-derajat</MenuItem>
                <MenuItem>Kuliah</MenuItem>
              </Select>
            </FormControl>
            <p></p>
            <TextField
              name="asalSekolah"
              label="Asal Sekolah"
              size="small"
            />
            <p></p>
            <TextField
              name="ipk"
              label="IPK"
              size="small"
            />
          </Grid>
        </Grid>
      </div>
      <FooterUser />
    </div>
  )
}

export default ProfileForm;