/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState, useContext } from 'react'
import { Transition } from '@headlessui/react'
import Link from 'next/link'
import { WindmillContext } from '@windmill/react-ui'
import { Moon, Sun } from './Icons/Icons'

const Nav2 = () => {
  const [isOpen, setIsOpen] = useState(false)

  const { mode, toggleMode } = useContext(WindmillContext) // dark mode

  const navList = [
    { name: 'Home', route: '/' },
    { name: 'Blog', route: '/blog' },
    { name: 'Projects', route: '/projects' },
    { name: 'About', route: '/about' },
  ]

  return (
    <header className="fixed top-0 w-full bg-white dark:text-gray-100 text-black  dark:bg-black z-20">
      <nav
      // className="border-b  border-gray-200 dark:border-gray-800"
      >
        <div className=" max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className=" flex items-center justify-between h-16">
            <div className="flex items-center">
              <div
                className="flex-shrink-0 cursor-pointer"
                onKeyPress={() => setIsOpen(false)}
                onClick={() => setIsOpen(false)}
                role="button"
                tabIndex={0}
              >
                <Link href="/">
                  <a aria-label="Logo">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 42.21 42.21"
                      className="h-8 w-8  hover:text-indigo-700 focus:text-indigo-700 dark:hover:text-indigo-500  dark:focus:text-indigo-500 "
                    >
                      <path d="M 19.2 0 L 24.6 0 L 26.55 34.35 L 23.275 34.35 L 22 15.425 Q 21.9 13.7 21.813 11.75 A 224.447 224.447 0 0 1 21.702 8.902 A 200.803 200.803 0 0 1 21.675 7.987 Q 21.625 6.175 21.588 4.85 A 228.533 228.533 0 0 0 21.572 4.312 Q 21.545 3.427 21.525 3.075 L 15.15 28.1 L 11.35 28.1 L 4.525 3.075 A 59.913 59.913 0 0 1 4.524 3.317 Q 4.523 3.711 4.517 4.444 A 803.438 803.438 0 0 1 4.513 4.925 Q 4.504 5.887 4.501 7.069 A 492.655 492.655 0 0 0 4.5 8.187 Q 4.5 10.05 4.45 11.962 A 172.227 172.227 0 0 1 4.401 13.552 Q 4.376 14.278 4.346 14.927 A 98.319 98.319 0 0 1 4.325 15.35 L 3.2 34.35 L 0 34.35 L 1.95 0 L 7.275 0 L 13.375 23.925 L 19.2 0 Z" />
                    </svg>
                  </a>
                </Link>
              </div>
              <div className=" hidden md:block">
                <div className="ml-10 flex items-baseline space-x-4">
                  {navList.map((item) => (
                    <Link href={item.route} key={item.name}>
                      <a className=" hover:bg-gray-100 focus:bg-gray-100 dark:hover:bg-gray-900  dark:focus:bg-gray-900 px-3 py-2 rounded-md text-sm lg:text-base font-medium">
                        {item.name}
                      </a>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
            <button
              type="button"
              aria-label="dark mode"
              onClick={toggleMode}
              className="shadow hidden md:block self-center bg-white hover:bg-gray-100 focus:ring focus:ring-gray-500  dark:bg-black dark:hover:bg-gray-900 focus:outline-none rounded-md p-1.5"
            >
              {mode === 'dark' ? <Sun aria-hidden="true" /> : <Moon aria-hidden="true" />}
            </button>
            <div className="-mr-2 flex md:hidden space-x-4">
              {/* <!-- Mobile menu button --> */}
              <button
                type="button"
                aria-label="dark mode"
                onClick={toggleMode}
                className="shadow block md:hidden self-center bg-white hover:bg-gray-100 focus:ring focus:ring-gray-500  dark:bg-black dark:hover:bg-gray-900 focus:outline-none rounded-md p-1.5"
              >
                {mode === 'dark' ? <Sun aria-hidden="true" /> : <Moon aria-hidden="true" />}
              </button>
              <button
                onClick={() => setIsOpen(!isOpen)}
                type="button"
                className="bg-gray-200 dark:bg-gray-900 inline-flex items-center justify-center p-2 rounded-md dark:text-gray-300 dark:hover:text-gray-100 hover:bg-gray-300 dark:hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-400 dark:focus:ring-offset-gray-800 focus:ring-white"
                aria-controls="mobile-menu"
                aria-expanded="false"
              >
                <span className="sr-only">Open main menu</span>
                {!isOpen ? (
                  <svg
                    className="block h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                ) : (
                  <svg
                    className="block h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>

        <Transition
          duration-300
          show={isOpen}
          enter="transition duration-300 ease-out duration-200 transform"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="transition duration-300 ease-in-out duration-200 transform"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          {/* <!-- Mobile menu, show/hide based on menu state. --> */}
          {(ref) => (
            <div className="border-b dark:border-gray-600 md:hidden" id="mobile-menu">
              <div ref={ref} className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                {navList.map((item) => (
                  <div key={item.name} onClick={() => setIsOpen(!isOpen)} aria-hidden="true">
                    <Link href={item.route}>
                      <a className=" hover:bg-gray-100 focus:bg-gray-100 dark:hover:bg-gray-900  dark:focus:bg-gray-900 block px-3 py-2 rounded-md text-sm md:text-base font-medium">
                        {item.name}
                      </a>
                    </Link>{' '}
                  </div>
                ))}
              </div>
            </div>
          )}
        </Transition>
      </nav>
    </header>
  )
}

export default Nav2
