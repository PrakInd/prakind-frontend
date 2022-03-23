import React from "react";
import { LoadingButton } from "@mui/lab";
import { styled } from "@mui/system";

const PrimaryButton = (props) => {
  const BootstrapButton = styled(LoadingButton)({
    backgroundColor: '#ffc300',
    borderRadius: 7,
    width: props.width,
    fontSize: '16px',
    textTransform: "capitalize",
    fontWeight: "bolder",
    color: "#191E24",
    '&:hover': {
      backgroundColor: '#FFD755',
      color: '#191E24',
    },
    '&:disabled': {
      backgroundColor: '#FFD755',
    },
  })
  return (
    <BootstrapButton {...props} />
  )
}

export default PrimaryButton;