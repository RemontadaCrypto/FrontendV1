import React from 'react';
import Head from 'next/head';
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react';
import { Toaster } from 'react-hot-toast';
import { useRouter } from 'next/router';
import { store, persistor } from '../redux/store';
import '../styles/index.scss';
import Header from '../components/Header';


function MyApp({ Component, pageProps }) {
  const state = store.getState();
  const router = useRouter();

  React.useEffect(() => {
    //Redirect to signin page when not authorized
    if (state.user.isAuth === false) {
      router.push('/signin')
    }
  }, [state.user.isAuth, state.user]);

  return (
    <>
      <Head>
        <link
          rel="stylesheet"
          href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"
        />

        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.3.1/css/bootstrap.min.css" />
        <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.5.1/jquery.slim.min.js"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.16.1/umd/popper.min.js"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.5.0/js/bootstrap.min.js"></script>
      </Head>
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <Header />
          <Component {...pageProps} />
          <Toaster position="top-right"
            reverseOrder={false}
            gutter={8}
            toastOptions={{
              duration: Infinity,
              position: "top-right",
              style: {
                marginTop: 10,
              },
              error: {
                style: {
                  backgroundColor: "red",
                  color: "white",
                },
              }
            }} />
        </PersistGate>
      </Provider>
    </>
  )
}

export default MyApp
