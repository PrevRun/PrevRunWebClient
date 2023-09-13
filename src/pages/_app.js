import { useEffect } from 'react';
import Router from 'next/router';
import '../pages/global.css'
import 'rc-drawer/assets/index.css';
import 'rc-tabs/assets/index.css';
import 'swiper/swiper-bundle.css';

export default function CustomApp({ Component, pageProps }) {
  useEffect(() => {
  }, []);

  return <Component {...pageProps} />;
}
