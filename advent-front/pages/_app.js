import '../styles/globals.css'
import '../styles/main.css'
import '../styles/quiz.css'
import '../styles/sModal.css'
import { NextUIProvider } from '@nextui-org/react';

function MyApp({ Component, pageProps }) {
  
  return (
      <NextUIProvider>
        <Component {...pageProps} />
      </NextUIProvider>
    );
  }

export default MyApp;