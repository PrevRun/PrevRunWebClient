import { useEffect, useState } from 'react';
import Router from 'next/router';
import { initGA, logPageView } from 'analytics';
import 'rc-drawer/assets/index.css';
import 'rc-tabs/assets/index.css';
import 'swiper/swiper-bundle.css';
import Preloader from '../components/Preloader';

export default function CustomApp({ Component, pageProps }) {
  const [firstLoad, setFirstLoad] = useState(true);

  useEffect(() => {
    initGA();
    logPageView();
    const handleRouteChange = (url) => {
      if (url !== Router.asPath) {
        setFirstLoad(true); // Set firstLoad to true on different route change
      }
    };
    Router.events.on('routeChangeStart', handleRouteChange);
    Router.events.on('routeChangeComplete', logPageView);
    return () => {
      Router.events.off('routeChangeStart', handleRouteChange);
    };
  }, []);

  useEffect(() => {
    if (firstLoad) {
      // Simulate loading for 3 seconds
      setTimeout(() => setFirstLoad(false), 2500);
    }
  }, [firstLoad]);

  return (
    <>
      {firstLoad ? (
        <Preloader />
      ) : (
        <Component {...pageProps} />
      )}
    </>
  );
}
