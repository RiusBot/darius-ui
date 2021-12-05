import Head from 'next/head';
import { useStore } from 'react-redux';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import { ReactReduxFirebaseProvider } from 'react-redux-firebase';
import { createFirestoreInstance } from 'redux-firestore';
import { CacheProvider } from '@emotion/react';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import { CssBaseline } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import { createEmotionCache } from '@/utils/create-emotion-cache';
import theme from '@/app/theme';
import { wrapper } from '@/app/store'
import { firebaseConfig, rrfConfig } from '@/config/firebase';

const clientSideEmotionCache = createEmotionCache();

// Initialize Firebase instance
firebase.initializeApp(firebaseConfig);
firebase.firestore()

const App = (props) => {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;

  const store =  useStore()
  const rrfProps = {
    firebase,
    config: rrfConfig,
    dispatch: store.dispatch,
    createFirestoreInstance, 
  }

  const getLayout = Component.getLayout ?? ((page) => page);

  return (
    <CacheProvider value={emotionCache}>
      <Head>
        <title>
          Darius
        </title>
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

export default wrapper.withRedux(App);
