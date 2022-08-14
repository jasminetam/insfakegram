import React from 'react';
import Image from 'next/image';

function Header() {
  return (
    <div>
      <div>Header</div>

      {/*Left*/}
      <div>
        <Image src="/images/1.jpg" layout='fill' />
      </div>
      {/*Middle*/}

      {/*Right*/}
    </div>
  );
}

export default Header;
