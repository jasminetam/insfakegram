import React from 'react';
import Image from 'next/image';
import {AiOutlineInstagram}

function Header() {
  return (
    <div className="w-full">
      <div className="flex justify-between max-w-6xl ">
        {/*Left*/}
        <div className="relative w-20">
          <Image src="/images/logo.png" layout="fill" objectFit="contain" alt="logo" />
        </div>
        {/*Middle*/}
        <div>Search Bar</div>
        {/*Right*/}
        <div>Icons</div>
      </div>
    </div>
  );
}

export default Header;
