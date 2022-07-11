import React, { useEffect } from 'react';
import { useRouter } from 'next/router';
import { useDispatch } from 'react-redux'
import Head from 'next/head';
import { useFirebase } from 'react-redux-firebase'
import { updateSnackbar } from '@/app/app-slice';
import LinearProgress from '@mui/material/LinearProgress';

const EmailConfirmation = () =>{
  const router = useRouter()
  const { mode, oobCode: actionCode } = router.query
  const dispatch = useDispatch()
  const firebase = useFirebase();
  useEffect(() => {
    if (mode == "resetPassword"){
      firebase.auth().verifyPasswordResetCode(actionCode)
        .then((resp) => {
          router.push('/reset?oobCode='+actionCode)
        })
        .catch((error) => {
          dispatch(updateSnackbar({ type: 'error',
            msg: error.message }))
          router.push('/forget')
        })
    }
    else{
      firebase.auth().applyActionCode(actionCode)
        .then((resp) => {
          dispatch(updateSnackbar({ type: 'info', msg: 'Congratulations! You are a member now!'}));
          router.push('/login')
        })
        .catch((error) => {
          dispatch(updateSnackbar({ type: 'error',
            msg: 'Invalid or expired confirmation code, please verify email address again' }))
          router.push('/register')
        });
    }
  }, []);

  return (
    <>
      <Head>
        <title>Email Confirmation | RiusBot</title>
      </Head>
      <LinearProgress/>
    </>
  );
}
export default EmailConfirmation;