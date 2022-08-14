import React from 'react';
import Image from 'next/image';

function Header() {
  return (
    <div>
      <div className="flex justify-between max-w-6xl">
        {/*Left*/}
        <div className="relative w-24">
          <Image src="/images/logo.png" layout="fill" />
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
