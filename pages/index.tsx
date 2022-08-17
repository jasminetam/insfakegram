import {
  onSnapshot,
  query,
  collection,
  orderBy,
  DocumentData,
} from 'firebase/firestore';
import type { NextPage } from 'next';
import Head from 'next/head';
import { useEffect, useState } from 'react';
import Feed from '../components/Feed';
import Header from '../components/Header';
import Modal from '../components/Modal';
import { db } from '../utils/firebase';
import { postsProps } from '../utils/interface';

const Home: NextPage = () => {
  const [searchInput, setsearchInput] = useState<string>('');
  const [searchResults, setsearchResults] = useState<postsProps[]>([]);
  const [posts, setPosts] = useState<postsProps[]>([]);

  useEffect(
    () =>
      onSnapshot(
        query(collection(db, 'posts'), orderBy('timestamp', 'desc')),
        (snapshot: DocumentData) => {
          setPosts(snapshot.docs);
        }
      ),
    [db]
  );

  useEffect(() => {
    const results = posts.filter(
      (post) =>
        post.data().caption.toLowerCase().includes(searchInput) ||
        post.data().username.toLowerCase().includes(searchInput)
    );
    setsearchResults(results);
  }, [searchInput]);

  const handleChange = (e: any) => {
    setsearchInput(e.target.value);
  };

  return (
    <div className="bg-gray-50 h-screen overflow-y-scroll scrollbar-hide">
      <Head>
        <title>Insfakegram</title>
        <meta name="description" content="Instagram Clone" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#ffffff" />
      </Head>
      <Header handleChange={handleChange} searchInput={searchInput} />
      <Feed searchResults={searchResults} />
      <Modal />
    </div>
  );
};

export default Home;
