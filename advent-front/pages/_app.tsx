import '../styles/globals.css'
import '../styles/main.css'
import '../styles/quiz.css'
import '../styles/sModal.css'
import type { AppProps } from "next/app";
import { NextUIProvider } from '@nextui-org/react';
import React, { useEffect } from 'react';

declare global {
  interface Window {
    Kakao: any;
  }
}

function MyApp({ Component, pageProps }) {

  useEffect(() => {
    try {
      if (!window.Kakao.isInitialized() && window.Kakao) {
        window.Kakao.init(process.env.NEXT_PUBLIC_KAKAO_JAVASCRIPT);
      }
    } catch(e) { console.log(e)}

  }, [])
  
  return (
    <NextUIProvider>
      <Component {...pageProps} />
    </NextUIProvider>
  );
}

export default MyApp;
