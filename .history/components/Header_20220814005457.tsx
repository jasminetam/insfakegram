import React from 'react';
import Image from 'next/image';

function Header() {
  return (
    <div className="w-full">
      <div className="flex flex-col justify-between max-w-6xl ">
        {/*Left*/}
        <div className="">
          <Image
            src="/images/logo.png"
            objectFit={'contain'}
            width={200}
            height={100}
            alt="logo"
          />
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
