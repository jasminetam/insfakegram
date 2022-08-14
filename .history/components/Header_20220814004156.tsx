import React from 'react';
import Image from 'next/image';

function Header() {
  return (
    <div>
      <div className="flex justify-between max-w-6xl ">
        {/*Left*/}
        <div className="w-20">
          <Image src="/images/logo.png" width={} alt="logo" />
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
