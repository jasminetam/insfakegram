import {
  BookmarkIcon,
  ChatIcon,
  DotsHorizontalIcon,
  EmojiHappyIcon,
  HeartIcon,
  PaperAirplaneIcon,
} from '@heroicons/react/outline';
import { HeartIcon as HeartIconFilled } from '@heroicons/react/solid';
import {
  addDoc,
  collection,
  onSnapshot,
  serverTimestamp,
  query,
  orderBy,
  setDoc,
  doc,
  deleteDoc,
  DocumentData,
  Firestore,
} from 'firebase/firestore';
import { useSession } from 'next-auth/react';
import React, { useState } from 'react';
import { commentProps, postProps } from '../utils/interface';
import { db } from '../utils/firebase';
import { useEffect } from 'react';
import Moment from 'react-moment';



function Post({ id, username, userImg, img, caption }: postProps) {
  const { data: session }: any = useSession();
  const [comment, setComment] = useState<string>('');
  const [comments, setComments] = useState<commentProps[]>([]);
  const [likes, setLikes] = useState<any[]>([]);
  const [likedByUser, setLikedByUser] = useState<boolean>(false);

  useEffect(
    () =>
      onSnapshot(
        query(
          // @ts-ignore
          collection(db, 'posts', id, 'comments'),
          orderBy('timestamp', 'desc')
        ),
        (snapshot: DocumentData) => setComments(snapshot?.docs)
      ),
    [db]
  );

  useEffect(
    () =>
      onSnapshot(
        // @ts-ignore
        collection(db, 'posts', id, 'likes'),
        (snapshot: DocumentData) => setLikes(snapshot.docs)
      ),
    [db, id]
  );

  useEffect(
    () =>
      setLikedByUser(
        likes.findIndex((like: any) => like.id === session?.user?.uid) !== -1
      ),
    [likes]
  );

  const likeHandler = async () => {
    if (likedByUser) {
      // @ts-ignore
      await deleteDoc(doc(db, 'posts', id, 'likes', session.user.uid));
    } else {
      // @ts-ignore
      await setDoc(doc(db, 'posts', id, 'likes', session.user.uid), {
        username: session.user.username,
      });
    }
  };

  const submitComment = async (e: any) => {
    e.preventDefault();

    const presendComment = comment;
    setComment('');
    // @ts-ignore
    await addDoc(collection(db, 'posts', id, 'comments'), {
      comment: presendComment,
      username: session.user.username,
      userImage: session.user.image,
      timestamp: serverTimestamp(),
    });
  };

  return (
    <div className="bg-white my-7 border rounded-sm" data-test="component-Post">
      {/* header */}
      <div className="flex items-center p-5">
        <img src={userImg} alt="" className="postImg" />
        <p className="flex-1 font-bold">{username}</p>
        <DotsHorizontalIcon className="h-5 text-gray-300" />
      </div>
      {/* img */}
      <img src={img} alt="" className="object-cover w-full" />
      {/* buttons */}
      {session && (
        <div className="flex justify-between px-4 pt-4">
          <div className="flex space-x-4">
            {likedByUser ? (
              <HeartIconFilled
                className="postIcons text-red-500"
                onClick={likeHandler}
              />
            ) : (
              <HeartIcon className="postIcons" onClick={likeHandler} />
            )}
            <ChatIcon className="postIcons text-gray-300" />
            <PaperAirplaneIcon className="postIcons text-gray-300" />
          </div>
          <BookmarkIcon className="postIcons text-gray-300" />
        </div>
      )}
      {/* caption */}
      <p className="p-5 truncate">
        {likes.length > 0 && (
          <p className="font-bold mb-1">{likes.length} likes</p>
        )}
        <span className="font-bold mr-1">{username}</span>
        {caption}
      </p>
      {/* comments */}
      {comments.length > 0 && (
        <div className="ml-10 h-20 overflow-y-scroll scrollbar-thumb-black scrollbar-thin">
          {comments.map((comment) => (
            <div key={comment.id} className="flex items-center space-x-2 mb-3">
              <img
                src={comment.data().userImage}
                alt=""
                className="h-7 rounded-full"
              />
              <p className="text-sm flex-1">
                <span className="font-bold">{comment.data().username}</span>{' '}
                {comment.data().comment}
              </p>
              <Moment fromNow className="pr-5 text-xs">
                {comment.data().timestamp?.toDate()}
              </Moment>
            </div>
          ))}
        </div>
      )}
      {/* input box */}
      {session && (
        <form className="flex items-center p-4">
          <EmojiHappyIcon className="h-7" />
          <input
            type="text"
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            placeholder="Add a comment..."
            className="postInput"
          />
          <button
            className="font-semibold text-blue-400 cursor-pointer"
            type="submit"
            onClick={submitComment}
            disabled={!comment.trim()}
          >
            Post
          </button>
        </form>
      )}
    </div>
  );
}

export default Post;
