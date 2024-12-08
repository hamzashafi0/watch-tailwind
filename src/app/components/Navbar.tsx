import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <div className="bg-purple-600">
      <header className="text-gray-600 body-font">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
            <span className="ml-3 text-xl font-bold">Watch Shop</span>
          </a>
          <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
            <Link href={"/"} className="mr-5 hover:text-gray-300 text-black">
              Home
            </Link>
            <Link
              href={"#about"}
              className="mr-5 hover:text-gray-300 text-black"
            >
              About
            </Link>
            <Link
              href={"#project"}
              className="mr-5 hover:text-gray-300 text-black"
            >
              Watches
            </Link>
            <Link
              href={"#contect"}
              className="mr-5 hover:text-gray-300 text-black"
            >
              Contact
            </Link>
          </nav>
        </div>
      </header>
    </div>
  );
};

export default Navbar;
