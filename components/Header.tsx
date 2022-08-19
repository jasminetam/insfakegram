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
import { useRouter } from 'next/router';
import { useRecoilState } from 'recoil';
import { modalState } from '../utils/modalAtom';
import DropdownMenu from './DropdownMenu';

const Header = ({ searchInput, handleChange }: any) => {
  const { data: session }: any = useSession();
  const [show, setShow] = useRecoilState<boolean>(modalState);
  const router = useRouter();

  return (
    <div className="nav">
      <div className="navFlex">
        {/*Left*/}
        <div
          onClick={() => router.push('/')}
          className="logo hidden lg:inline-grid"
        >
          <Image
            src="/images/logo.png"
            layout="fill"
            objectFit="contain"
            alt="logo"
          />
        </div>
        <div
          onClick={() => router.push('/')}
          className="logo lg:hidden inline-grid"
        >
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
            <input
              type="text"
              placeholder="Search"
              className="searchInput"
              value={searchInput}
              onChange={handleChange}
            />
          </div>
        </div>
        {/*Right*/}
        <div className="flex items-center justify-end space-x-4">
          <HomeIcon className={`homeIcon ${session && 'navIcon'}`} onClick={() => router.push('/')} />
          {session && <DropdownMenu onClick={() => setShow(true)} />}
          {session ? (
            <>
              <div className="relative navIcon">
                <PaperAirplaneIcon className="navIcon rotate-45 text-gray-300" />
                <div className="notification">3</div>
              </div>
              <PlusCircleIcon
                className="navIcon"
                onClick={() => setShow(true)}
              />
              <UserGroupIcon className="navIcon text-gray-300" />
              <HeartIcon className="navIcon text-gray-300" />
              <img
                src={session?.user?.image}
                alt="user"
                className="h-7 sm:h-10 rounded-full cursor-pointer pr-1"
                onClick={() => signOut()}
              />
            </>
          ) : (
            <button className="pr-3" onClick={() => signIn()}>
              Sign In
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
