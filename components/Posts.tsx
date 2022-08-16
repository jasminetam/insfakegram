import React from 'react';
import Post from './Post';
import { postProps } from '../utils/interface';


const posts: postProps[] = [
  {
    id: '123',
    username: 'abc',
    userImg: '/images/user.png',
    img: '/images/user.png',
    caption:
      'Subscribe for greater informationor you will miss the best posts in the world.',
  },
  {
    id: '1234',
    username: 'abc',
    userImg: '/images/user.png',
    img: '/images/user.png',
    caption:
      'Subscribe for greater informationor you will miss the best posts in the world.',
  },
  {
    id: '12345',
    username: 'abc',
    userImg: '/images/user.png',
    img: '/images/user.png',
    caption:
      'Subscribe for greater informationor you will miss the best posts in the world.',
  },
  {
    id: '123456',
    username: 'abc',
    userImg: '/images/user.png',
    img: '/images/user.png',
    caption:
      'Subscribe for greater informationor you will miss the best posts in the world.',
  },
];

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
