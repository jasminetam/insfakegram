import React from 'react';
import Image from 'next/image';

function Header() {
  return (
    <div>
      <div>Header</div>

      {/*Left*/}
      <div className="relative w-24">
        <Image src="/images/logo.png" layout='fill' />
      </div>
      {/*Middle*/}

      {/*Right*/}
    </div>
  );
}

export default Header;
