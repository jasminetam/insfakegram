import {
  BookmarkIcon,
  ChatIcon,
  DotsHorizontalIcon,
  EmojiHappyIcon,
  HeartIcon,
  PaperAirplaneIcon,
} from '@heroicons/react/outline';
import { HeartIcon as HeartIconFilled } from '@heroicons/react/solid';
import React from 'react';
import { postProps } from '../utils/interface';

function Post({ id, username, userImg, img, caption }: postProps) {
  return (
    <div className="bg-white my-7 border rounded-sm" data-test="component-Post">
      {/* header */}
      <div className="flex items-center p-5">
        <img src={userImg} alt="" className="postImg" />
        <p className="flex-1 font-bold">{username}</p>
        <DotsHorizontalIcon className="h-5" />
      </div>
      {/* img */}
      <img src={img} alt="" className="object-cover w-full" />
      {/* buttons */}
      <div className="flex justify-between px-4 pt-4">
        <div className="flex space-x-4">
          <HeartIcon className="postIcons" />
          <ChatIcon className="postIcons" />
          <PaperAirplaneIcon className="postIcons" />
        </div>
        <BookmarkIcon className="postIcons" />
      </div>
      {/* caption */}
      <p className="p-5 truncate">
        <span className="font-bold mr-1">{username}</span>
        {caption}
      </p>
      {/* comments */}
      {/* input box */}
      <form className="flex items-center p-4">
        <EmojiHappyIcon className="h-7" />
        <input
          type="text"
          placeholder="Add a comment..."
          className="postInput"
        />
        <button className="font-semibold text-blue-400">Post</button>
      </form>
    </div>
  );
}

export default Post;
