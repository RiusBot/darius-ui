import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useRouter } from "next/router";
import { isLoaded, isEmpty } from 'react-redux-firebase'
import LinearProgress from '@mui/material/LinearProgress';
import { getAuthUser } from '@/common/selectors';
import { updateSnackbar } from '@/app/app-slice';

const withAuth = Component => {
  const Auth = (props) => {
    const router = useRouter();
    const dispatch = useDispatch()
    const auth = useSelector(getAuthUser)
    
    useEffect(() => {
      if (!isLoaded(auth)) {
        return <LinearProgress />
      }
      if (isLoaded(auth)) {
        if (isEmpty(auth)) {
          dispatch(updateSnackbar({ type: 'info', msg: 'Please login before entering dashboard' }))
          if (typeof window === 'undefined') {
            return <LinearProgress />;
          } else {
            router.push('/login');
          }
        }
      }
    }, [auth]);
    
    return (
      <Component {...props} />
    );
  };

  if (Component.getInitialProps) {
    Auth.getInitialProps = Component.getInitialProps;
  }

  if (Component.getLayout) {
    Auth.getLayout = Component.getLayout;
  }

  return Auth;
};

export default withAuth;
