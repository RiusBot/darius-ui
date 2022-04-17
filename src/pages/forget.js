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

const Forget = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const firebase = useFirebase();

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
  
  const forgetPassword = (values) => {
    grecaptcha.enterprise.ready(async () => {
      const action = 'FORGET'
      const token = await grecaptcha.enterprise.execute(process.env.NEXT_PUBLIC_RECAPTCHA_ENTERPRISE_SITE_KEY, { action });
      dispatch(createRecaptchaAccessment({ token, action }));
    });
    const { email } = values;
    email = emailValidate(email);
    if (email === "") {
      dispatch(updateSnackbar({ type: 'error', msg: "Invalid email" }));
    } else {
      firebase.resetPassword(
        email
      )
        .then(() => {
          dispatch(updateSnackbar({ type: 'info', msg: 'Verification email is sent, please click the confirmation link and login again.' }));
          firebase.logout();
        })
        .then(() => {
          router.push("/reset");
        })
        .catch((error) => {
          dispatch(updateSnackbar({ type: 'error', msg: error.message }))
        });
    }
  };

  
  const formik = useFormik({
    initialValues: {
      email: ''
    },
    validationSchema: Yup.object({
      email: Yup
        .string()
        .email(
          'Must be a valid email')
        .max(255)
        .required(
          'Email is required'),
    }),
    onSubmit: (values, actions) => {
      forgetPassword(values);
      actions.setSubmitting(false);
    }
  });

  return (
    <>
      <Head>
        <title>
          Forget Password | RiusBot
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
                Forget password ?
              </Typography>
            </Box>
            <TextField
              error={Boolean(formik.touched.email && formik.errors.email)}
              fullWidth
              helperText={formik.touched.email && formik.errors.email}
              label="Email Address"
              margin="normal"
              name="email"
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              type="email"
              value={formik.values.email}
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
                Send reset email
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
                  Sign In
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

export default Forget;
