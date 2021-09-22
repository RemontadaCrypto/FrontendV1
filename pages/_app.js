import React from 'react';
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react';
import { Toaster } from 'react-hot-toast';
import { useRouter } from 'next/router';
import { store, persistor } from '../redux/store';
import '../styles/index.scss';


function MyApp({ Component, pageProps }) {
  const state = store.getState();
  const router = useRouter();

  React.useEffect(() => {
    //Redirect to signin page when not authorized
    if (state.user.isAuth === false) {
      router.push('/signup')
    }
  }, [state.user.isAuth]);

  return (
    <>
      <Provider store={store}>
        <PersistGate persistor={persistor}>
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
