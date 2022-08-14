import React from 'react';
import Image from 'next/image';

function Header() {
  return (
    <div>
      <div>Header</div>

      {/*Left*/}
      <div>
        <Image src="/images/header.png" layout='fill' height={300} weight/>
      </div>
      {/*Middle*/}

      {/*Right*/}
    </div>
  );
}

export default Header;
