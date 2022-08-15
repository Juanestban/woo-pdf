import type { NextPage } from 'next';
import Head from 'next/head';
import { useTheme } from '@woo-pdf/contexts';
import { FolderCardList } from '@woo-pdf/components/FolderCardList';

import s from '@woo-pdf/styles/Home.module.css';

const Home: NextPage = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className={s.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={s.main}>
        <FolderCardList />
        <button className={s.button} onClick={toggleTheme}>
          toggle {theme}
        </button>
      </main>
    </div>
  );
};

export default Home;
