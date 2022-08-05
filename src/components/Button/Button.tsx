import { Button, styled } from "@mui/material";
import React, { FC } from "react";
import theme from "../theme";
import { LoadingButton } from "@mui/lab";

import { ButtonProps } from "./Button.types";

const CustomButton: FC<ButtonProps> = ({
  buttonType,
  buttonText,
  rounded,
  onClick,
  ...props
}) => {
  return (
    <ButtonStyle
      {...props}
      // @ts-ignore
      buttonType={buttonType}
      rounded={rounded}
    >
      {buttonText}
    </ButtonStyle>
  );
};

export default CustomButton;

// @ts-ignore
const ButtonStyle = styled(LoadingButton)(({ theme, buttonType, rounded }) => ({
  padding: rounded ? theme.spacing(1, 8) : theme.spacing(0.2, 6),
  borderRadius: rounded ? "20px" : "",
  backgroundColor:
    buttonType === "primary" ? theme.palette.primary.main : "#AAAAAA",
  textTransform: "capitalize",
  color: theme.palette.common.white,
  "&:hover": {
    background:
      buttonType === "primary" ? theme.palette.primary.light : "#898787",
  },
}));
