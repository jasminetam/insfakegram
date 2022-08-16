import React from 'react';
import Post from './Post';
import { posts } from '../utils/postsData';

const Posts = (): JSX.Element => {
  return (
    <div data-test="component-Posts">
      {posts.map((post) => (
        <Post
          key={post.id}
          id={post.id}
          img={post.img}
          username={post.username}
          userImg={post.userImg}
          caption={post.caption}
        />
      ))}
    </div>
  );
};

export default Posts;
