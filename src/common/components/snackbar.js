import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
import { getSnackbarInfo } from '@/common/selectors'
import { closeSnackbar } from '@/app/app-slice';

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});


const RiusbotSnackBar = () => {
  const dispatch = useDispatch();

  const snackbarInfo = useSelector(getSnackbarInfo);
  const { open, message, severity } = snackbarInfo;

  const handleClose = () => {
    dispatch(closeSnackbar());
  };

  return (
    <>
      <Snackbar open={open} autoHideDuration={5000} onClose={handleClose}>
        <Alert onClose={handleClose} severity={severity} sx={{ width: '100%' }}>
          {message}
       </Alert>
      </Snackbar>
    </>
  )
};

export default RiusbotSnackBar;