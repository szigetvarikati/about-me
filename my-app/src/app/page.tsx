import Head from 'next/head';
import RootLayout from './layout';

export default function Home() {
  return (
    <RootLayout>
      <Head>
        <title>Home Page</title>
      </Head>
      <div>
        <h1>Welcome to Next.js!</h1>
      </div>
    </RootLayout>
  );
}
