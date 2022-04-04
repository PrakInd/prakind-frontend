import React from "react";
import { styled } from "@mui/system";
import { LoadingButton } from "@mui/lab";

const PrimaryButton = (props) => {
  const BootstrapButton = styled(LoadingButton)({
    backgroundColor: '#FC9400',
    variant: "contained",
    borderRadius: 7,
    border: "1px solid #fc9400",
    width: props.width,
    fontSize: '16px',
    textTransform: "capitalize",
    fontWeight: "bolder",
    color: "#191E24",
    '&:hover': {
      backgroundColor: '#FFC300',
      color: '#191E24',
    },
    '&:disabled': {
      backgroundColor: '#FFC300',
    },
  });

  return (
    <BootstrapButton {...props} />
  )
}

export default PrimaryButton;