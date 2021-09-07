import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react';
import { Toaster } from 'react-hot-toast';

import { store, persistor } from '../redux/store';

import '../styles/index.scss';

function MyApp({ Component, pageProps }) {
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
