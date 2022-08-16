import React from 'react';
import Stories from './Stories';
import Posts from './Posts';
import MiniProfile from './MiniProfile';
import Suggestions from './Suggestions';

function Feed() {
  return (
    <div className="feedWrapper">
      <section className="col-span-2">
        <Stories />
        <Posts />
      </section>
      <section className="hidden xl:inline-grid md:col-span-1">
        <div className="fixed top-20">
          <MiniProfile />
          <Suggestions />
        </div>
      </section>
    </div>
  );
}

export default Feed;
