import React from 'react';
import Image from 'next/image';
import { AiOutlineInstagram } from 'react-icons/ai';
import {SearchIcon, PlusCircleIcon, UserGroupIcon, HeartIcon, PaperAirplaneIcon, MenuIcon} from '@heroicons/react/outline'

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
        <div className="relative lg:hidden inline-grid w-24 h-10 cursor-pointer">
          <Image
            src="/images/instagram.png"
            layout="fill"
            objectFit="contain"
            alt="logo"
          />
        </div>

        {/*Middle*/}
        <div>
          <div><SearchIcon className="h-5 w-5 text-gray" /></div>
          <input type="text" placeholder="Search" />
        </div>
        {/*Right*/}
        <div>Icons</div>
      </div>
    </div>
  );
}

export default Header;
