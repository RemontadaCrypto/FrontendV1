import { Toaster } from 'react-hot-toast';
import '../styles/index.scss';

function MyApp({ Component, pageProps }) {
  return (<>
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
  </>
  )
}

export default MyApp
