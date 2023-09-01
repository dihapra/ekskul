import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-white border-gray-200">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <Link href="/" className="flex items-center ">
          <Image
            src={"/dashboard/logo-ekskul.png"}
            width={150}
            height={150}
            alt="logo"
          />
        </Link>
        <button
          onClick={toggleMenu}
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:text-sky-800 focus:outline-none focus:ring-2 focus:ring-gray-200"
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
            />
          </svg>
        </button>
        <div
          className={`${isOpen ? "block" : "hidden"} w-full md:block md:w-auto`}
          id="navbar-default"
        >
          <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white">
            <li>
              <Link
                className="block py-2 pl-3 pr-4 font-bold text-gray-900 rounded hover:text-sky-800 md:hover:bg-transparent"
                href="/dashboard"
              >
                Dashboard
              </Link>
            </li>
            <li>
              <Link
                className="block py-2 pl-3 pr-4 font-bold text-gray-900 rounded hover:text-sky-800 md:hover:bg-transparent"
                href="/introduction"
              >
                Pengenalan
              </Link>
            </li>
            <li>
              <Link
                className="block py-2 pl-3 pr-4 font-bold text-gray-900 rounded hover:text-sky-800 md:hover:bg-transparent"
                href="/smp"
              >
                SMP
              </Link>
            </li>
            <li>
              <Link
                className="block py-2 pl-3 pr-4 font-bold text-gray-900 rounded hover:text-sky-800 md:hover:bg-transparent"
                href="/sma"
              >
                SMA
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
