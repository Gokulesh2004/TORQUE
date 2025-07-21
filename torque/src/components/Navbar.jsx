import React from 'react';
import { Disclosure, Menu } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import logo from '../assets/TORQUELOGO.jpeg';

const navigation = [
  { name: 'HOME', href: '/', current: false },
  { name: 'Blog', href: '/blog', current: false },
  { name: 'Team', href: '/team', current: false },
  { name: 'SHOP', href: '/shop', current: false },
  { name: 'Forum', href: '/forum', current: false },

 
  { name: 'Events', href: '/event', current: false },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

export default function Navbar() {
  return (
    <Disclosure as="nav" className="bg-gradient-to-r from-gray-900 via-black to-gray-900 opacity-90 text-white fixed top-0 left-0 right-0 z-50 shadow-lg">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="relative flex h-16 items-center justify-between">
              {/* Left-aligned logo */}
              <div className="flex-shrink-0">
                <img alt="Bikers and Cars Community" src={logo} className="h-14 w-auto rounded-lg transition-transform duration-300 hover:scale-110" />
              </div>

              {/* Center-aligned navigation */}
              <div className="hidden sm:block sm:ml-6">
                <div className="flex space-x-6">
                  {navigation.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className={classNames(
                        item.current ? 'text-yellow-400 font-bold' : 'text-gray-300 hover:text-yellow-300 hover:underline',
                        'rounded-md px-3 py-2 text-sm font-semibold uppercase tracking-widest transition-all duration-300'
                      )}
                      aria-current={item.current ? 'page' : undefined}
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
              </div>

              {/* Right-aligned icons */}
              <div className="flex items-center sm:ml-6">
                {/* Mobile menu button */}
                <div className="sm:hidden">
                  <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-800 hover:text-white focus:outline-none focus:ring-2 focus:ring-yellow-400">
                    <span className="sr-only">Open main menu</span>
                    {open ? (
                      <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                    ) : (
                      <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                    )}
                  </Disclosure.Button>
                </div>

                {/* Profile dropdown */}
                <Menu as="div" className="relative ml-4">
                  <div>
                    <Menu.Button className="flex items-center px-4 py-2 bg-yellow-500 text-white font-semibold rounded-full hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:ring-offset-2 transition duration-300 shadow-lg">
                      <span className="text-sm">Login</span>
                    </Menu.Button>
                  </div>
                  <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-gray-800 py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                    <Menu.Item>
                      {({ active }) => (
                        <a
                          href="/login"
                          className={classNames(active ? 'bg-gray-700' : '', 'block px-4 py-2 text-sm text-gray-300 hover:text-yellow-300')}
                        >
                          Login
                        </a>
                      )}
                    </Menu.Item>
                    <Menu.Item>
                      {({ active }) => (
                        <a
                          href="/signup"
                          className={classNames(active ? 'bg-gray-700' : '', 'block px-4 py-2 text-sm text-gray-300 hover:text-yellow-300')}
                        >
                          Sign Up
                        </a>
                      )}
                    </Menu.Item>
                  </Menu.Items>
                </Menu>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden bg-gray-900">
            <div className="space-y-1 px-2 pt-2 pb-3">
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as="a"
                  href={item.href}
                  className={classNames(
                    item.current ? 'text-yellow-400 font-bold' : 'text-gray-300 hover:bg-gray-800 hover:text-yellow-300',
                    'block rounded-md px-3 py-2 text-base font-medium'
                  )}
                  aria-current={item.current ? 'page' : undefined}
                >
                  {item.name}
                </Disclosure.Button>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}
