import React from "react";
import { InputBase, Divider, FormControl, InputLabel, Grid, TextField, FormLabel, RadioGroup, FormControlLabel, Radio, Select, MenuItem, Button, Menu } from "@mui/material";
import FooterUser from "../../components/FooterUser";
import Header from "../../components/Header";
import { styled } from "@mui/system";
import { makeStyles } from "@mui/styles";
// import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

const Frame = styled('div')(({ theme }) => ({
  backgroundColor: "#fff",
  marginLeft: 280,
  marginRight: 280,
  marginTop: 40,
  borderRadius: 7
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
}))

const ProfileForm = () => {
  const classes = useStyles();
  return (
    <div>
      <Header />
      <div>
        <div>
          <Frame>
            <div className={classes.body}>
              <h4>Data Diri</h4>
              <Divider />
              <Grid container >
                {/* <div className={classes.content}> */}
                <Grid item xs={6}>
                  <div className={classes.item}>
                    <FormControl variant="standard">
                      <InputLabel shrink htmlFor="bootstrap-input" style={{ fontSize: "22px" }}>
                        Nama Lengkap
                      </InputLabel>
                      <BootstrapInput
                        placeholder="Nama Lengkap"
                        id="bootstrap-input"
                        name="name"
                      />
                    </FormControl>
                  </div>

                  <div className={classes.item}>
                    <FormControl variant="standard">
                      <InputLabel shrink htmlFor="bootstrap-input" style={{ fontSize: "22px" }}>
                        Email
                      </InputLabel>
                      <BootstrapInput
                        placeholder="Email"
                        id="bootstrap-input"
                        name="name"
                      />
                    </FormControl>
                  </div>

                  <div className={classes.item}>
                    <FormControl variant="standard">
                      <InputLabel shrink htmlFor="bootstrap-input" style={{ fontSize: "24px" }}>
                        Alamat Lengkap
                      </InputLabel>
                      <BootstrapInput
                        placeholder="Alamat lengkap"
                        id="bootstrap-input"
                        name="address"
                        multiline
                        minRows={3}
                      // onChange={handleChange}
                      />
                    </FormControl>
                  </div>

                  <div className={classes.item}>
                    <FormControl variant="standard">
                      <InputLabel shrink htmlFor="bootstrap-input" style={{ fontSize: "22px" }}>
                        No. Hp
                      </InputLabel>
                      <BootstrapInput
                        placeholder="No. Hp"
                        id="bootstrap-input"
                        name="name"
                      />
                    </FormControl>
                  </div>
                  <FormControl>
                    <FormLabel>Gender</FormLabel>
                    <RadioGroup>
                      <FormControlLabel value="lakilaki" control={<Radio />} label="Laki-laki" />
                      <FormControlLabel value="perempuan" control={<Radio />} label="Perempuan" />
                    </RadioGroup>
                  </FormControl>
                </Grid>

                <Grid item xs={6}>
                  <div className={classes.item}>
                    <FormControl variant="standard" font-size="24px">
                      <InputLabel shrink htmlFor="bootstrap-input" style={{ fontSize: "22px" }}>
                        Sekolah
                      </InputLabel>
                      <Button
                        id="button-school"
                        style={{ width: 390, marginTop: 25, border: '1px solid #BCBCBC' }}
                        className='dropdown'
                      // onClick={handleClick}
                      >
                        Pilih
                        {/* <ArrowDropDownIcon /> */}
                      </Button>
                      <Menu
                        id="choose-school"

                      >
                        <MenuItem>SMK se-derajat</MenuItem>
                        <MenuItem>Kuliah</MenuItem>
                      </Menu>
                    </FormControl>
                  </div>

                  <div className={classes.item}>
                    <FormControl variant="standard">
                      <InputLabel shrink htmlFor="bootstrap-input" style={{ fontSize: "22px" }}>
                        Asal sekolah
                      </InputLabel>
                      <BootstrapInput
                        placeholder="Asal sekolah"
                        id="bootstrap-input"
                        name="name"
                      />
                    </FormControl>
                  </div>

                  <div className={classes.item}>
                    <FormControl variant="standard">
                      <InputLabel shrink htmlFor="bootstrap-input" style={{ fontSize: "22px" }}>
                        Indeks Prestasi Komulatif
                      </InputLabel>
                      <BootstrapInput
                        placeholder="IPK"
                        id="bootstrap-input"
                        name="name"
                      />
                    </FormControl>
                  </div>

                </Grid>
              </Grid>
              <h4 style={{ marginTop: 20 }}>Lengkapi Dokumen</h4>
              <Divider />
              <Grid container>
                <Grid item xs={6}>
                  <div className={classes.item}>
                    <FormControl variant="standard">
                      <InputLabel shrink htmlFor="bootstrap-input" style={{ fontSize: "22px" }}>
                        Curriculum Vitae
                      </InputLabel>
                      <BootstrapInput
                        accept="image/*" id="contained-button-file" multiple type="file"
                      />
                      {/* <Button variant="contained" component="span">
                        Upload
                      </Button> */}
                    </FormControl>
                  </div>

                  <div className={classes.item}>
                    <FormControl variant="standard">
                      <InputLabel shrink htmlFor="bootstrap-input" style={{ fontSize: "22px" }}>
                        Transkrip Nilai
                      </InputLabel>
                      <BootstrapInput
                        accept="image/*" id="contained-button-file" multiple type="file"
                      />
                      {/* <Button variant="contained" component="span">
                        Upload
                      </Button> */}
                    </FormControl>
                  </div>
                </Grid>

                <Grid item xs={6}>
                  <div className={classes.item}>
                    <FormControl variant="standard">
                      <InputLabel shrink htmlFor="bootstrap-input" style={{ fontSize: "22px" }}>
                        Portofolio
                      </InputLabel>
                      <BootstrapInput
                        accept="image/*" id="contained-button-file" multiple type="file"
                      />
                      {/* <Button variant="contained" component="span">
                        Upload
                      </Button> */}
                    </FormControl>
                  </div>
                </Grid>
              </Grid>

              <Grid container>
                <Button variant="contained" component="span" style={{ float: 'center', width: '100%', margin: '20px' }}>
                  Simpan
                </Button>
              </Grid>
            </div>
          </Frame>
        </div>
      </div >
      <FooterUser />
    </div >
  )
}

export default ProfileForm;