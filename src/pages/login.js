import React, { useEffect } from 'react';
import Head from 'next/head';
import NextLink from 'next/link';
import { useRouter } from 'next/router';
import { useDispatch, useSelector } from 'react-redux'
import { useFormik } from 'formik';
import { useFirebase, isLoaded, isEmpty } from 'react-redux-firebase'
import * as Yup from 'yup';
import { Box, Button, Container, Grid, Link, TextField, Typography } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { Google as GoogleIcon } from '@/icons/Google';
import Snackbar from '@/common/components/snackbar';
import { createUser, createRecaptchaAccessment, updateSnackbar } from '@/app/app-slice';
import { getAuthUser } from '@/common/selectors';
import * as EmailValidator from 'email-validator';

const Login = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const emailNormalize = (email) => {
    var token = email.split('@');
    var name = token[0];
    var host = token[1];
    name = name.replace(/[^a-zA-Z0-9.]+/g, "");
    return name + '@' + host;
  };
  const { referrer } = router.query;

  const firebase = useFirebase()
  const auth = useSelector(getAuthUser)
  const SignInWithGoogle = () => {
    firebase.login({
      provider: "google",
      type: "popup",
    })
      .then((result) => {
        const additionalUserInfo = result.additionalUserInfo;
        if (additionalUserInfo.isNewUser) {
          dispatch(createUser({ referrer }));
        }
      })
      .catch((error) => {
        dispatch(updateSnackbar({ type: 'error', msg: error.message }))
      });
  };
  const handleGoogleSignInClick = () => {
    SignInWithGoogle();
    grecaptcha.enterprise.ready(async () => {
      const action = 'LOGIN'
      const token = await grecaptcha.enterprise.execute(process.env.NEXT_PUBLIC_RECAPTCHA_ENTERPRISE_SITE_KEY, { action });
      dispatch(createRecaptchaAccessment({ token, action }));
    });
  }
  const SignInWithPassword = (values) => {
    values.email = emailNormalize(values.email)
    firebase.login(values)
      .catch(error => {
        dispatch(updateSnackbar({ type: 'error', msg: 'Incorrect email address or password.' }))
      });
  };
  const formik = useFormik({
    initialValues: {
      email: '',
      password: ''
    },
    validationSchema: Yup.object({
      email: Yup
        .string()
        .email(
          'Must be a valid email')
        .max(255)
        .required(
          'Email is required'),
      password: Yup
        .string()
        .max(255)
        .required(
          'Password is required')
    }),
    onSubmit: (values, actions) => {
      SignInWithPassword(values);
      grecaptcha.enterprise.ready(async () => {
        const action = 'LOGIN'
        const token = await grecaptcha.enterprise.execute(process.env.NEXT_PUBLIC_RECAPTCHA_ENTERPRISE_SITE_KEY, { action });
        dispatch(createRecaptchaAccessment({ token, action }));
      });
      actions.setSubmitting(false);
    }
  });

  useEffect(() => {
    if (isLoaded(auth) && !isEmpty(auth)) {
      dispatch(createUser({ referrer }));
      if (auth.emailVerified) {
        router.push('/dashboard');
      } else {
        dispatch(updateSnackbar({ type: 'warning', msg: 'Email verification is needed, please click the confirmation link and login again.' }));
        firebase.logout();
      }
    }
  }, [auth]);

  return (
    <>
      <Head>
        <title>Login | RiusBot</title>
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
                Sign in
              </Typography>
            </Box>
            <Grid
              container
              spacing={3}
            >
              <Grid
                item
                xs={12}
              >
                <Button
                  fullWidth
                  color="error"
                  startIcon={<GoogleIcon />}
                  onClick={handleGoogleSignInClick}
                  size="large"
                  variant="contained"
                >
                  Sign in with Google
                </Button>
              </Grid>
            </Grid>
            <Box
              sx={{
                pb: 1,
                pt: 3
              }}
            >
              <Typography
                align="center"
                color="textSecondary"
                variant="body1"
              >
                or
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
            <Box sx={{ py: 2 }}>
              <Button
                color="primary"
                disabled={formik.isSubmitting}
                fullWidth
                size="large"
                type="submit"
                variant="contained"
              >
                Sign In
              </Button>
            </Box>
            <Typography
              color="textSecondary"
              variant="body2"
            >
              Don&apos;t have an account?
              {' '}
              <NextLink
                href={referrer ? "/register?referrer=".concat(referrer): "/register"}
              >
                <Link
                  to="/register"
                  variant="subtitle2"
                  underline="hover"
                  sx={{
                    cursor: 'pointer'
                  }}
                >
                  Create account
                </Link>
              </NextLink>
            </Typography>
            <Typography
              color="textSecondary"
              variant="body2"
            >
              Forget password ?
              {' '}
              <NextLink
                href="/forget"
              >
                <Link
                  to="/forget"
                  variant="subtitle2"
                  underline="hover"
                  sx={{
                    cursor: 'pointer'
                  }}
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

export default Login;
