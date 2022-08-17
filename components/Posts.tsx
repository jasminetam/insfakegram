import React from 'react';
import Post from './Post';
import { useState } from 'react';
import { useEffect } from 'react';
import { db } from '../utils/firebase';
import {
  collection,
  DocumentData,
  onSnapshot,
  orderBy,
  query,
} from 'firebase/firestore';
import { postsProps } from '../utils/interface';

const Posts = ({ searchResults }: any) => {
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
  return (
    <div data-test="component-Posts">
      {searchResults.length > 0
        ? searchResults.map((post: any) => (
            <Post
              key={post.id}
              id={post.id}
              img={post.data().image}
              username={post.data().username}
              userImg={post.data().profileImg}
              caption={post.data().caption}
            />
          ))
        : posts.map((post) => (
            <Post
              key={post.id}
              id={post.id}
              img={post.data().image}
              username={post.data().username}
              userImg={post.data().profileImg}
              caption={post.data().caption}
            />
          ))}
    </div>
  );
};

export default Posts;
