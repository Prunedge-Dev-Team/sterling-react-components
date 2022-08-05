import * as React from "react";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import Slide from "@mui/material/Slide";
import { TransitionProps } from "@mui/material/transitions";
import { styled } from "@mui/material";
// import { ReactComponent as SuccessIcon } from "../../assets/svgs/SuccessIcon.svg";
import { format } from "date-fns";

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement<any, any>;
  },
  ref: React.Ref<unknown>
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export interface ISuccessDialogProps {
  open: boolean;
  modalText: string;
  onClose: () => void;
}

const SuccessModal: React.FC<ISuccessDialogProps> = ({
  onClose,
  open,
  modalText,
}) => {
  const timeFormat = "dd/MM/yyyy [hh:mm:ss a]";

  return (
    <div>
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={onClose}
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitleStyle>{/* <SuccessIcon /> */}</DialogTitleStyle>
        <DialogContentStyle>
          <DialogContentText id="alert-dialog-slide-description">
            {modalText}
          </DialogContentText>
          <DialogContentText id="alert-dialog-slide-description" mt={4} mb={4}>
            DATE AND TIME: {format(new Date(), timeFormat)}{" "}
          </DialogContentText>
        </DialogContentStyle>
      </Dialog>
    </div>
  );
};

export default SuccessModal;

const DialogTitleStyle = styled(DialogActions)(({ theme }) => ({
  justifyContent: "center",
  padding: theme.spacing(4, 0, 2),
}));

const DialogContentStyle = styled(DialogContent)(({ theme }) => ({
  textAlign: "center",
  padding: theme.spacing(2, 10, 4),
}));
