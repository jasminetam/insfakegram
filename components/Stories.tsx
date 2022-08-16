import React, { useState, useEffect } from 'react';
import Story from './Story';
import { createRandomUser } from '../utils/fakerInfo';



function Stories() {
  const [suggestions, setSuggestions] = useState<any>([]);

  useEffect(() => {
    const suggestions = [...Array(20)].map((_, i) => ({
      ...createRandomUser(),
      id: i,
    }));
    setSuggestions(suggestions);
  }, []);

  return (
    <div className="storyBar" data-test="component-Stories">
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
