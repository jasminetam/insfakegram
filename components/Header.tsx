import React from 'react';
import Image from 'next/image';
import {
  SearchIcon,
  PlusCircleIcon,
  UserGroupIcon,
  HeartIcon,
  PaperAirplaneIcon,
  MenuIcon,
} from '@heroicons/react/outline';
import { HomeIcon } from '@heroicons/react/solid';
import { signIn, signOut, useSession } from 'next-auth/react';

function Header() {
  const { data: session } = useSession();
  console.log(session);

  return (
    <div className="nav">
      <div className="navFlex">
        {/*Left*/}
        <div className="logo hidden lg:inline-grid">
          <Image
            src="/images/logo.png"
            layout="fill"
            objectFit="contain"
            alt="logo"
          />
        </div>
        <div className="logo lg:hidden inline-grid">
          <Image
            src="/images/instagram.png"
            layout="fill"
            objectFit="contain"
            alt="logo"
          />
        </div>

        {/*Middle*/}
        <div className="max-w-xs">
          <div className="relative mt-1 p-2 sm:p-3 rounded-md">
            <div className="searchIcon">
              <SearchIcon className="h-5 w-5 text-gray-500" />
            </div>
            <input type="text" placeholder="Search" className="searchInput" />
          </div>
        </div>
        {/*Right*/}
        <div className="flex items-center justify-end space-x-4">
          <HomeIcon className="navIcon" />
          <MenuIcon className="h-8 md:hidden cursor-pointer" />
          {session ? (
            <>
              <div className="relative navIcon">
                <PaperAirplaneIcon className="navIcon rotate-45" />
                <div className="notification">3</div>
              </div>
              <PlusCircleIcon className="navIcon" />
              <UserGroupIcon className="navIcon" />
              <HeartIcon className="navIcon" />
              <img
                src={session.user?.image}
                alt="user"
                className="h-8 sm:h-10 rounded-full cursor-pointer"
                onClick={() => signOut}
              />
            </>
          ) : (
            <button onClick={() => signIn}>Sign In</button>
          )}
        </div>
      </div>
    </div>
  );
}

export default Header;
