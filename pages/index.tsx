import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import Feed from '../components/Feed';
import Header from '../components/Header';
import styles from '../styles/Home.module.css';

const Home: NextPage = () => {
  return (
    <div className="bg-gray-50 h-screen overflow-y-scroll scrollbar-hide">
      <Head>
        <title>Insfakegram</title>
        <meta name="description" content="Instagram Clone" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* Header*/}
      <Header />
      <Feed />
      {/* Modal*/}
    </div>
  );
};

export default Home;
