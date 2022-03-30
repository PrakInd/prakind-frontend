import React from "react";
import { Button } from "@mui/material";
import { styled } from "@mui/system";

const SecondaryButton = (props) => {
  const BootstrapButton = styled(Button)({
    backgroundColor: '#fff',
    border: 'solid',
    borderWidth: 1,
    borderColor: '#FC9400',
    borderRadius: 7,
    width: props.width,
    fontSize: '16px',
    textTransform: "capitalize",
    fontWeight: "bolder",
    color: "#191E24",
    '&:hover': {
      backgroundColor: '#FFC300',
      // borderWidth: 3,
    },
    '&:disabled': {
      backgroundColor: '#FFC300',
    },
  })
  return (
    <BootstrapButton {...props} />
  );
}

export default SecondaryButton;

