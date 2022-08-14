import React from 'react';
import Image from 'next/image';

function Header() {
  return (
    <div className="w-full">
      <div className="flex ">
        {/*Left*/}
        <div className="">
          <Image src="/images/logo.png" layout='fill' alt="logo" />
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
