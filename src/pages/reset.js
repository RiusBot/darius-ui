import React from 'react';
import Head from 'next/head';
import NextLink from 'next/link';
import { useDispatch } from 'react-redux';
import { useRouter } from 'next/router';
import { useFormik } from 'formik';
import { useFirebase } from 'react-redux-firebase'
import * as Yup from 'yup';
import * as EmailValidator from 'email-validator';
import {
  Box,
  Button,
  Checkbox,
  Container,
  FormHelperText,
  Link,
  TextField,
  Typography
} from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import Snackbar from '@/common/components/snackbar';
import { createUser, createRecaptchaAccessment, updateSnackbar } from '@/app/app-slice';

const Reset = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const firebase = useFirebase();
  
  const { oobCode: actionCode } = router.query

  const [dialogOpen, setDialogOpen] = React.useState(false);
    
  const emailNormalize = (email) => {
    var token = email.split('@');
    var name = token[0];
    var host = token[1];
    name = name.replace(/[^a-zA-Z0-9.]+/g, "");
    return name + '@' + host;
  };
  const emailValidate = (email) => {
    var normemail = emailNormalize(email);
    if (EmailValidator.validate(email) && EmailValidator.validate(normemail)) {
      return normemail;
    }
    return "";
  };
  
  const resetPassword = (values) => {
    // grecaptcha.enterprise.ready(async () => {
    //   const action = 'RESET'
    //   const token = await grecaptcha.enterprise.execute(process.env.NEXT_PUBLIC_RECAPTCHA_ENTERPRISE_SITE_KEY, { action });
    //   dispatch(createRecaptchaAccessment({ token, action }));
    // });
    const { password, confirm } = values;
    console.log(password);
    console.log(confirm);
    if (password != confirm) {
      dispatch(updateSnackbar({ type: 'error', msg: "password mismatch !" }));
    } else {
      firebase.confirmPasswordReset(
        actionCode,
        password
      )
        .then(() => {
          dispatch(updateSnackbar({ type: 'info', msg: 'password updated !' }));
          firebase.logout();
        })
        .then(() => {
          router.push("/login");
        })
        .catch((error) => {
          dispatch(updateSnackbar({ type: 'error', msg: error.message }))
        });
    }
  };

  
  const formik = useFormik({
    initialValues: {
      password: '',
      confirm: ''
    },
    validationSchema: Yup.object({
      password: Yup
        .string()
        .max(255)
        .required(
          'Password is required'),
      confirm: Yup
        .string()
        .max(255)
        .required(
          'Confirm is required'),
    }),
    onSubmit: (values, actions) => {
      resetPassword(values);
      actions.setSubmitting(false);
    }
  });

  return (
    <>
      <Head>
        <title>
          Reset Password | RiusBot
        </title>
      </Head>
      <Box
        component="main"
        sx={{
          alignItems: 'center',
          display: 'flex',
          flexGrow: 1,
          minHeight: '100%'
        }}
      >
        <Container maxWidth="sm">
          <NextLink
            href="/"
            passHref
          >
            <Button
              component="a"
              startIcon={<ArrowBackIcon fontSize="small" />}
            >
              Home
            </Button>
          </NextLink>
          <form onSubmit={formik.handleSubmit}>
            <Box sx={{ my: 3 }}>
              <Typography
                color="textPrimary"
                variant="h4"
              >
                Reset password
              </Typography>
            </Box>
            <TextField
              error={Boolean(formik.touched.password && formik.errors.password)}
              fullWidth
              helperText={formik.touched.password && formik.errors.password}
              label="New password"
              margin="normal"
              name="password"
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              type="password"
              value={formik.values.password}
              variant="outlined"
            />
            <TextField
              error={Boolean(formik.touched.confirm && formik.errors.confirm)}
              fullWidth
              helperText={formik.touched.confirm && formik.errors.confirm}
              label="Confirm password"
              margin="normal"
              name="confirm"
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              type="password"
              value={formik.values.confirm}
              variant="outlined"
            />
            {Boolean(formik.touched.policy && formik.errors.policy) && (
              <FormHelperText error>
                {formik.errors.policy}
              </FormHelperText>
            )}
            <Box sx={{ py: 2 }}>
              <Button
                color="primary"
                disabled={formik.isSubmitting}
                fullWidth
                size="large"
                type="submit"
                variant="contained"
              >
                Reset password
              </Button>
            </Box>
            <Typography
              color="textSecondary"
              variant="body2"
            >
              Have an account?
              {' '}
              <NextLink
                href="/login"
                passHref
              >
                <Link
                  variant="subtitle2"
                  underline="hover"
                >
                  Reset password
                </Link>
              </NextLink>
            </Typography>
          </form>
          <Snackbar />
        </Container>
      </Box>
    </>
  );
};

export default Reset;
