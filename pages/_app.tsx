import { useEffect, useState } from 'react';
import type { AppProps } from 'next/app';
import { ThemeProvider } from '@woo-pdf/contexts';

import '../styles/globals.css';
import '../styles/colors.css';

function MyApp({ Component, pageProps }: AppProps) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(typeof window === 'undefined');
  }, []);

  if (loading) return 'loading';

  return (
    <ThemeProvider>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
