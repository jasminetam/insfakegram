import React, { useState, useEffect } from 'react';
import Story from './Story';
import { createRandomUser } from '../utils/fakerInfo';
import { useSession } from 'next-auth/react';

function Stories() {
  const [suggestions, setSuggestions] = useState<any>([]);
  const { data: session }: any = useSession();

  useEffect(() => {
    const suggestions = [...Array(20)].map((_, i) => ({
      ...createRandomUser(),
      id: i,
    }));
    setSuggestions(suggestions);
  }, []);

  return (
    <div className="storyBar" data-test="component-Stories">
      {session && (
        <Story img={session?.user?.image} username={session?.user?.username} />
      )}
      {suggestions.map((profile: any) => (
        <Story
          key={profile.id}
          img={profile.avatar}
          username={profile.username}
        />
      ))}
    </div>
  );
}

export default Stories;
