import React from 'react';

interface Props {
  img: string;
  username: string;
}

function Story({ img, username }: Props) {
  return (
    <div data-test="component-Story">
      <img className="storyImg" src={img} alt="" />
      <p className="storyUsername">{username}</p>
    </div>
  );
}

export default Story;
