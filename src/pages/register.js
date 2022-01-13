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

const Register = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const firebase = useFirebase();

  const { referralCode } = router.query;
    
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

  const signUpWithPassword = (values) => {
    grecaptcha.enterprise.ready(async () => {
      const action = 'REGISTER'
      const token = await grecaptcha.enterprise.execute(process.env.NEXT_PUBLIC_RECAPTCHA_ENTERPRISE_SITE_KEY, { action });
      dispatch(createRecaptchaAccessment({ token, action }));
    });
    const { email, password, username, referrer } = values;
    email = emailValidate(email);
    if (email === "") {
      dispatch(updateSnackbar({ type: 'error', msg: "Invalid email" }));
    } else {
      firebase.createUser(
        { email, password },
        { displayName: username, email}
      )
        .then(() => {
          dispatch(createUser({ referrer }));   
        })
        .then(() => {
          firebase.auth().currentUser.sendEmailVerification();
          dispatch(updateSnackbar({ type: 'info', msg: 'Verification email is sent, please click the confirmation link and login again.' }));
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
      email: '',
      username: '',
      password: '',
      referrer: referralCode || '',
      policy: false
    },
    validationSchema: Yup.object({
      email: Yup
        .string()
        .email(
          'Must be a valid email')
        .max(255)
        .required(
          'Email is required'),
      username: Yup
        .string()
        .max(255)
        .required(
          'Username is required'),
      password: Yup
        .string()
        .max(255)
        .required(
          'Password is required'),
      referrer: Yup
        .string()
        .length(8),
      policy: Yup
        .boolean()
        .oneOf(
          [true],
          'This field must be checked'
        )
    }),
    onSubmit: (values, actions) => {
      signUpWithPassword(values);
      actions.setSubmitting(false);
    }
  });

  return (
    <>
      <Head>
        <title>
          Register | RiusBot
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
                Create a new account
              </Typography>
              <Typography
                color="textSecondary"
                gutterBottom
                variant="body2"
              >
                Use your email to create a new account
              </Typography>
            </Box>
            <TextField
              error={Boolean(formik.touched.username && formik.errors.username)}
              fullWidth
              helperText={formik.touched.username && formik.errors.username}
              label="Username"
              margin="normal"
              name="username"
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              value={formik.values.username}
              variant="outlined"
            />
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
            <TextField
              error={Boolean(formik.touched.password && formik.errors.password)}
              fullWidth
              helperText={formik.touched.password && formik.errors.password}
              label="Password"
              margin="normal"
              name="password"
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              type="password"
              value={formik.values.password}
              variant="outlined"
            />
            <TextField
              error={Boolean(formik.touched.referrer && formik.errors.referrer)}
              fullWidth
              helperText={formik.touched.referrer && formik.errors.referrer}
              label="Referrer"
              margin="normal"
              name="referrer"
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              type="referrer"
              value={formik.values.referrer}
              variant="outlined"
            />
            <Box
              sx={{
                alignItems: 'center',
                display: 'flex',
                ml: -1
              }}
            >
              <Checkbox
                checked={formik.values.policy}
                name="policy"
                onChange={formik.handleChange}
              />
              <Typography
                color="textSecondary"
                variant="body2"
              >
                I have read the
                {' '}
                <NextLink
                  href="#"
                  passHref
                >
                  <Link
                    color="primary"
                    underline="always"
                    variant="subtitle2"
                  >
                    Terms and Conditions
                  </Link>
                </NextLink>
              </Typography>
            </Box>
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
                Sign Up
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

export default Register;
