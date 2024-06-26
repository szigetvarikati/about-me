import { FC } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import styles from './page.module.css';
import Button from '../components/Button';
import Navbar from '../components/Navbar';

const Home: FC = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>My Next.js App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="https://nextjs.org">Next.js!</a>
        </h1>
        <Link href="/about" passHref>
          <Button label="Go to About Page" href="/about" />
        </Link>
      </main>
    </div>
  );
};

export default Home;
