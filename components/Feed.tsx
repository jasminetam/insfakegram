import React from 'react';
import Stories from './Stories';
import Posts from './Posts';
import SideProfile from './SideProfile';
import Suggestions from './Suggestions';
import { useSession } from 'next-auth/react';

function Feed({searchResults}: any) {
  const { data: session } = useSession();
  return (
    <div className={`feedWrapper ${!session && "!grid-cols-1 !max-w-3xl"}`}>
      <section className="col-span-2">
        <Stories />
        <Posts searchResults={searchResults} />
      </section>
      {session && (
        <section className="hidden xl:inline-grid md:col-span-1">
          <div className="fixed top-20">
            <SideProfile />
            <Suggestions />
          </div>
        </section>
      )}
    </div>
  );
}

export default Feed;
