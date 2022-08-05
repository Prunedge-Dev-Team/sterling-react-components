import { styled } from "@mui/material";
import { LoadingButton } from "@mui/lab";

import { ButtonProps } from "./Button.types";

const CustomButton = ({
  buttonType,
  buttonText,
  rounded,
  onClick,
  ...props
}: ButtonProps) => {
  return (
    <ButtonStyle
      {...props}
      rounded={rounded}
    >
      {buttonText}
    </ButtonStyle>
  );
};

const ButtonStyle = styled(LoadingButton)(({ rounded }) => ({
  borderRadius: rounded ? "20px" : "",
}));

export default CustomButton;
