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
              duration: 8000,
              style: {
                fontSize: 18,
                marginTop: '40px',
              }
            }} />
        </PersistGate>
      </Provider>
    </>
  )
}

export default MyApp
