import React from 'react';
import Image from 'next/image';

function Header() {
  return (
    <div>
      <div>Header</div>

      {/*Left*/}
      <div className="relative">
        <Image src="/images/logo.png" layout />
      </div>
      {/*Middle*/}

      {/*Right*/}
    </div>
  );
}

export default Header;
