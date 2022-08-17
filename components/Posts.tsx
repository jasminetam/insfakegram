import React from 'react';
import Post from './Post';
import { useState } from 'react';
import { useEffect } from 'react';
import { db } from '../utils/firebase';
import { collection, onSnapshot, orderBy, query } from 'firebase/firestore';

const Posts = (): JSX.Element => {
  const [posts, setPosts] = useState([]);

  useEffect(
    () =>
      onSnapshot(
        query(collection(db, 'posts'), orderBy('timestamp', 'desc')),
        (snapshot) => {
          setPosts(snapshot.docs);
        }
      ),
    [db]
  );
  console.log(posts);
  return (
    <div data-test="component-Posts">
      {posts.map((post) => (
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
