import React from 'react';
import Image from 'next/image';

function Header() {
  return (
    <div>
      <div>Header</div>

      {/*Left*/}
      <div>
        <Image src="/images/header.png" layout='fill' height={}/>
      </div>
      {/*Middle*/}

      {/*Right*/}
    </div>
  );
}

export default Header;
