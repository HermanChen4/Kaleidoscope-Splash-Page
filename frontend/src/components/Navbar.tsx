import React, { useState, useEffect } from 'react';
import { Disclosure } from '@headlessui/react';
import { XIcon, MenuIcon } from '@heroicons/react/outline';
import { PlusIcon } from '@heroicons/react/solid';
import icon from '../assets/kaleidoscope.png';
import '../styles/tailwind.css';
import Blog from './Blog'

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ');
}

export default function Example() {
  const [isSticky, setSticky] = useState(false);

  // Handle scroll event to toggle sticky class
  const handleScroll = () => {
    if (window.scrollY > 0) {
      setSticky(true);
    } else {
      setSticky(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className={isSticky ? 'sticky-navbar' : ''}>
      <Disclosure as="nav" className="bg-white shadow">
        {({ open }) => (
          <>
            <div className="mx-auto max-w-7xl px-4 lg:px-8">
              <div className="flex h-16 justify-between">
                <div className="flex">
                  <div className="-ml-2 mr-2 flex items-center md:hidden">
                    {/* Mobile menu button */}
                    <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                      <span className="absolute -inset-0.5" />
                      <span className="sr-only">Open main menu</span>
                      {open ? (
                        <XIcon className="block h-6 w-6" aria-hidden="true" />
                      ) : (
                        <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                      )}
                    </Disclosure.Button>
                  </div>
                  <div className="flex flex-shrink-0 items-center">
                    <a href='#'>
                      <img
                        className="h-8 w-auto"
                        src={icon}
                        alt=""
                      />
                    </a>
                    <a href='#'>
                    <p className="text-indigo-700 pulse-text font-extrabold">
                            Kaleidoscope
                        </p>
                        </a>
                  </div>
                  <div className="hidden md:ml-6 md:flex md:space-x-8">
                    {/* Current: "border-indigo-500 text-gray-900", Default: "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700" */}
                    <a
                      href="#topSection"
                      className="inline-flex items-center border-b-2 border-indigo-600 px-1 pt-1 text-lg font-medium text-gray-900"
                    >
                      About
                    </a>
                    <a
                      href="#midSection"
                      className="inline-flex items-center border-b-2 border-transparent px-1 pt-1 text-lg font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700"
                    >
                      Demo
                    </a>
                    <a
                      href="#teamSection"
                      className="inline-flex items-center border-b-2 border-transparent px-1 pt-1 text-lg font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700"
                    >
                      Team
                    </a>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="flex-shrink-0">
                    <a href="https://github.com/oslabs-beta/spiritsnail" target="_blank" rel="noopener noreferrer">
                      <button
                        type="button"
                        className="relative inline-flex items-center gap-x-1.5 rounded-md bg-indigo-600 px-3 py-2 text-lg font-semibold text-white shadow-lg hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                        <PlusIcon className="-ml-0.5 h-5 w-5" aria-hidden="true" />
                        View Our Project
                      </button>
                    </a>
                  </div>
                  <div className="hidden md:ml-4 md:flex md:flex-shrink-0 md:items-center">
                    {/* Add any additional content here */}
                  </div>
                </div>
              </div>
            </div>
            <Disclosure.Panel className="md:hidden">
              {/* Mobile menu panel */}
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>
      <Blog />
    </div>
  );
}
