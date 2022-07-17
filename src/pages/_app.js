import Head from 'next/head';
import App from 'next/app';
import { useStore } from 'react-redux';
import { ReactReduxFirebaseProvider } from 'react-redux-firebase';
import { createFirestoreInstance } from 'redux-firestore';
import { appWithTranslation } from 'next-i18next';
import { CacheProvider } from '@emotion/react';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import { CssBaseline } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import { createEmotionCache } from '@/utils/create-emotion-cache';
import theme from '@/app/theme';
import { wrapper } from '@/app/store'
import firebase, { initializeFirebaseAppCheck } from '@/utils/firebase';

const clientSideEmotionCache = createEmotionCache();

const MyApp = (props) => {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;

  const store =  useStore()
  initializeFirebaseAppCheck();

  const rrfProps = {
    firebase,
    config: {
      userProfile: "users",
      useFirestoreForProfile: true,
    },
    dispatch: store.dispatch,
    createFirestoreInstance,
  }

  const getLayout = Component.getLayout || ((page) => page);

  const recaptchaEnterpriseApi = `https://www.google.com/recaptcha/enterprise.js?render=${process.env.NEXT_PUBLIC_RECAPTCHA_ENTERPRISE_SITE_KEY}`

  return (
    <CacheProvider value={emotionCache}>
      <Head>
        <title>
          RiusBot
        </title>
        <script src={ recaptchaEnterpriseApi }></script>
        <meta
          name="viewport"
          content="initial-scale=1, width=device-width"
        />
      </Head>
      <ReactReduxFirebaseProvider {...rrfProps}>
        <LocalizationProvider dateAdapter={AdapterDateFns}>
          <ThemeProvider theme={theme}>
            <CssBaseline />
            {getLayout(<Component {...pageProps} />)}
          </ThemeProvider>
        </LocalizationProvider>
      </ReactReduxFirebaseProvider>
    </CacheProvider>
  );
};
MyApp.getInitialProps = async (appContext) => {
  const appProps = await App.getInitialProps(appContext);
  return { ...appProps };
};

export default wrapper.withRedux(appWithTranslation(MyApp));
