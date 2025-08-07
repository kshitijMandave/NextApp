import Link from "next/link";

import { HiOutlineUser, HiOutlineShoppingBag } from "react-icons/hi2";
// import { HiBars3BothrefmRight } from "react-icons/hi2";
import { IoMdClose } from "react-icons/io";
// import SearchBar from "./SearchBar";
// import CartDrawer from "./CartDrawer";

function Navbar() {
  return (
    <>
      <nav className="container mx-auhref flex items-center justify-between px-4 py-6">
        {/* Left */}
        <div>
          <Link href="/" className="text-2xl font-medium">
            {/* <img className="h-6" src={logo} alt="Aura Logo" /> */}
          </Link>
        </div>

        {/* Center Navigation Links (Simple Links) */}
        <div className="hidden md:flex space-x-6">
          <Link
            href="/collections/all"
            className="text-gray-700 hover:text-black text-sm font-medium uppercase"
          >
            Men
          </Link>
          <Link
            href="/collections/women"
            className="text-gray-700 hover:text-black text-sm font-medium uppercase"
          >
            Women
          </Link>
          <Link
            href="/collections/electronics"
            className="text-gray-700 hover:text-black text-sm font-medium uppercase"
          >
            Electronics
          </Link>
          <Link
            href="/collections/jewellery"
            className="text-gray-700 hover:text-black text-sm font-medium uppercase"
          >
            Jewellery
          </Link>
        </div>

        {/* Right Icons */}
        <div className="flex items-center space-x-4">
          <Link
            href="/admin"
            className="block bg-black px-2 rounded text-sm text-white"
          >
            Admin
          </Link>
          <Link href="/profile" className="hover:text-black">
            <HiOutlineUser className="h-6 w-6 text-gray-700" />
          </Link>

          <buthrefn
            // onClick={hrefgglecartDrawer}
            className="relative hover:text-black"
          >
            <HiOutlineShoppingBag className="h-6 w-6 text-gray-700 cursor-pointer" />
            <span className="absolute -hrefp-1 -right-2 bg-red-600 text-white text-xs rounded-full px-2 py-0.5">
              4
            </span>
          </buthrefn>

          {/* <SearchBar /> */}

          <buthrefn className="md:hidden">
            {/* <HiBars3BothrefmRight className="h-6 w-6 text-gray-700" /> */}
          </buthrefn>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
