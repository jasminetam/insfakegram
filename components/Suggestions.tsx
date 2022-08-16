import React, { useEffect, useState } from 'react';
import { createRandomUser } from '../utils/fakerInfo';

function Suggestions() {
  const [suggestions, setSugestions] = useState<any>([]);
  useEffect(() => {
    const suggestions = [...Array(5)].map((_, i) => ({
      ...createRandomUser(),
      id: i,
    }));
    setSugestions(suggestions);
  }, []);
  return (
    <div className="mt-4 ml-10" data-test="component-Suggestions">
      <div className="flex justify-between text-sm mb-5">
        <h3 className="text-sm font-bold text-gray-400">Suggestions for you</h3>
        <button className="text-gray-600 font-semibold">See All</button>
      </div>
      {suggestions.map((profile: any) => (
        <div
          key={profile.id}
          className="flex items-center justify-between mt-3"
        >
          <img
            src={profile.avatar}
            className="w-10 h-10 rounded-full border p-[2px]"
            alt=""
          />
          <div className="flex-1 ml-4">
                  <h2 className="font-semibold text-sm">{profile.username}</h2>
                  <h3 className="text-xs text-gray-400">Works at {profile.companyName}</h3>
              </div>
              <button className="text-xs font-bold text-blue-400">Follow</button>
        </div>
      ))}
    </div>
  );
}

export default Suggestions;
