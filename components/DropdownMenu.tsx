import React from 'react';
import { Menu } from '@headlessui/react';
import { MenuIcon } from '@heroicons/react/outline';
import Link from 'next/link';

function DropdownMenu({ onClick }: any) {
  return (
    <div>
      <Menu as="div" className="items-center relative inline-block md:hidden" data-test="component-DropdownMenu">
        <Menu.Button className="text-gray-700 p-2 text-xl rounded-md hover:ring-2 hover:ring-gray-300 dark:text-gray-200">
        <MenuIcon className="h-7 cursor-pointer" />
        </Menu.Button>
        <Menu.Items className="absolute right-0 w-[70vw] origin-top-right bg-white shadow-lg z-10">
          <Menu.Item>
            <Link href="/">
              <div className="dropdown-link">Home</div>
            </Link>
          </Menu.Item>
          <Menu.Item>
            <div className="dropdown-link" onClick={onClick}>
              Upload
            </div>
          </Menu.Item>
        </Menu.Items>
      </Menu>
    </div>
  );
}

export default DropdownMenu;
