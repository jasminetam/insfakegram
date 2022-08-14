import React from 'react';
import Image from 'next/image';
import { AiOutlineInstagram } from 'react-icons/ai';
import {BsSearch} from "react-icons/bs"

function Header() {
  return (
    <div className="w-full">
      <div className="flex justify-between max-w-6xl ">
        {/*Left*/}
        <div className="relative hidden lg:inline-grid w-24 h-10 cursor-pointer">
          <Image
            src="/images/logo.png"
            layout="fill"
            objectFit="contain"
            alt="logo"
          />
        </div>
        <div className="relative lg:hidden inline-grid w-24 h-24 cursor-pointer">
          <AiOutlineInstagram className="text-3xl" />
        </div>
        {/*Middle*/}
        <div><div></div><input type="text" placeholder="Search" /></div>
        {/*Right*/}
        <div>Icons</div>
      </div>
    </div>
  );
}

export default Header;
