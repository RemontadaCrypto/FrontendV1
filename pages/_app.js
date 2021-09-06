import { Toaster } from 'react-hot-toast';
import '../styles/index.scss';

function MyApp({ Component, pageProps }) {
  return (<>
    <Component {...pageProps} />
    <Toaster position="top-right"
      reverseOrder={false}
      gutter={8}
      toastOptions={{
        duration: Infinity,
        style: {
          fontSize: 18,
          marginTop: '20px',
        }
      }} />
  </>
  )
}

export default MyApp
