import React from 'react';
import Stories from './Stories';

function Feed() {
  return (
    <div className="feedWrapper">
      <section className="col-span-2">
        <Stories />
        {/*Posts*/}
      </section>
      <section>
        {/*Mini profile*/}
        {/*Suggestions*/}
      </section>
    </div>
  );
}

export default Feed;
