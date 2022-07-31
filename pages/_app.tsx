import { useEffect, useState } from 'react';
import type { AppProps } from 'next/app';
import { Wrapper } from '@woo-pdf/config/Wrapper';

import '../styles/globals.css';
import '../styles/colors.css';

function MyApp({ Component, pageProps }: AppProps) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(typeof window === 'undefined');
  }, []);

  if (loading) return 'loading';

  return (
    <Wrapper>
      <Component {...pageProps} />
    </Wrapper>
  );
}

export default MyApp;
