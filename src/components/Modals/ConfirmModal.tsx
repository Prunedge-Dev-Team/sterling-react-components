import * as React from 'react'
import Dialog from '@mui/material/Dialog'
import DialogActions from '@mui/material/DialogActions'
import DialogContent from '@mui/material/DialogContent'
import DialogContentText from '@mui/material/DialogContentText'
import DialogTitle from '@mui/material/DialogTitle'
import Slide from '@mui/material/Slide'
import { TransitionProps } from '@mui/material/transitions'
import { styled } from "@mui/material";
import { LoadingButton } from "@mui/lab";

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement<any, any>;
  },
  ref: React.Ref<unknown>
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export interface IConfirmDialogProps {
  open: boolean;
  modalText: string;
  onClose: () => void;
  onConfirm: () => void;
  loading?: boolean;
}

const ConfirmModal: React.FC<IConfirmDialogProps> = ({
  onClose,
  open,
  modalText,
  onConfirm,
  loading,
}) => {
  return (
    <div>
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={onClose}
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle>{""}</DialogTitle>
        <DialogContent>
          <DialogContentText
            id="alert-dialog-slide-description"
            textAlign="center"
            fontWeight={700}
          >
            {modalText}
          </DialogContentText>
        </DialogContent>
        <DialogActionsStyle>
          <DialogButtonStyle
            onClick={onConfirm}
            variant="contained"
            loading={loading}
          >
            Yes
          </DialogButtonStyle>
          <DialogButtonSecStyle onClick={onClose}>No</DialogButtonSecStyle>
        </DialogActionsStyle>
      </Dialog>
    </div>
  );
};

export default ConfirmModal;

const DialogActionsStyle = styled(DialogActions)(({ theme }) => ({
  justifyContent: 'center',
  padding: theme.spacing(2, 10, 4),
}))

const DialogButtonStyle = styled(LoadingButton)(({ theme }) => ({
  padding: theme.spacing(0, 6),
  '&:hover': {
    background: '#c65b5b',
  },
}))

const DialogButtonSecStyle = styled(LoadingButton)(({ theme }) => ({
  padding: theme.spacing(0, 6),
  backgroundColor: '#AAAAAA',
  color: theme.palette.common.white,
  '&:hover': {
    background: '#898787',
  },
}))
