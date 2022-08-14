import React from 'react';
import Image from 'next/image';
import { AiOutlineInstagram } from 'react-icons/ai';
import {
  SearchIcon,
  PlusCircleIcon,
  UserGroupIcon,
  HeartIcon,
  PaperAirplaneIcon,
  MenuIcon,
} from '@heroicons/react/outline';
import {HomeIcon} from "@heroicons/react/solid"

function Header() {
  return (
    <div >
      <div className="flex justify-between items-center max-w-6xl mx-5 lg:mx-auto">
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
        <div className="max-w-xs">
        <div className="relative mt-1 p-3 rounded-md">
          <div className="absolute inset-y-0 pl-3 flex items-center pointer-events-none">
            <SearchIcon className="h-5 w-5 text-gray-500" />
          </div>
          <input
            type="text"
            placeholder="Search"
            className="searchInput"
          />
        </div>


        </div>
        {/*Right*/}
        <div className="flex items-center justify-end "><HomeIcon className="h-10 w-10" /></div>
      </div>
    </div>
  );
}

export default Header;
