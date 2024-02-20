import { useState } from "react";
import { HiMenuAlt3 } from "react-icons/hi";
import { MdClose } from "react-icons/md";
import { RiArrowDropDownLine } from "react-icons/ri";

export default function Navbar() {
  const [dropdown, setDropdown] = useState(false);

  const showDropdown = () => {
    setDropdown(!dropdown);
  };

  return (
    <nav className="w-full h-24 flex flex-col justify-center items-center bg-black fixed z-20">
      <div className="container mx-auto lg:px-2">
        <div className="lg:w-full w-11/12 mx-auto h-full flex justify-between items-center">
          <div className="flex flex-col gap-y-4">
            <div className="flex items-center gap-x-2">
              <img src="/logo.png" alt="image logo" className="w-12" />
              <span>
                <p className="text-white font-semibold text-lg leading-tight">
                  At-taqwa
                </p>
                <p className="text-primary text-sm">Hajj & Umrah</p>
              </span>
            </div>
          </div>
          <ul className="flex-1 flex justify-center items-center xl:gap-12 gap-x-4 max-lg:hidden">
            <a
              href="#"
              className="leading-normal no-underline text-white text-lg hover:text-primary"
            >
              Home
            </a>
            <a
              href="#"
              className="leading-normal no-underline text-white flex items-center text-lg hover:text-primary"
            >
              Hajj <RiArrowDropDownLine className="text-3xl" />
            </a>
            <a
              href="#"
              className="leading-normal no-underline text-white flex items-center text-lg hover:text-primary"
            >
              Umrah <RiArrowDropDownLine className="text-3xl" />
            </a>
            <a
              href="#"
              className="leading-normal no-underline text-white text-lg hover:text-primary"
            >
              Facilities
            </a>
            <a
              href="#"
              className="leading-normal no-underline text-white text-lg hover:text-primary"
            >
              Tour
            </a>
            <a
              href="#"
              className="leading-normal no-underline text-white text-lg hover:text-primary"
            >
              Blog
            </a>
            <a
              href="#"
              className="leading-normal no-underline text-white text-lg hover:text-primary"
            >
              Gallery
            </a>
          </ul>
          <div className="flex max-lg:hidden">
            <button className="rounded-full border border-solid border-primary bg-transparent text-lg text-white px-8 py-3 hoverBtn">
              Contact Us
            </button>
          </div>
          {dropdown ? (
            <div
              onClick={showDropdown}
              className="lg:hidden text-[22px] cursor-pointer text-white "
            >
              <MdClose />
            </div>
          ) : (
            <div
              onClick={showDropdown}
              className="lg:hidden text-[22px] cursor-pointer text-white "
            >
              <HiMenuAlt3 />
            </div>
          )}
        </div>
        {dropdown ? (
          <div
            onClick={showDropdown}
            className="lg:hidden w-full h-[100vh] fixed top-24 bg-black ease-in-out duration-100 "
          >
            <div className="w-full h-[320px] flex flex-col items-baseline pt-8 gap-4">
              <ul className="text-center p-0 flex flex-col justify-center w-full gap-y-8">
                <a
                  href="#"
                  className="leading-normal no-underline text-white text-lg hover:text-primary"
                >
                  Home
                </a>
                <a
                  href="#"
                  className="leading-normal no-underline text-white text-lg hover:text-primary"
                >
                  Hajj
                </a>
                <a
                  href="#"
                  className="leading-normal no-underline text-white text-lg hover:text-primary"
                >
                  Umrah
                </a>
                <a
                  href="#"
                  className="leading-normal no-underline text-white text-lg hover:text-primary"
                >
                  Facilities
                </a>
                <a
                  href="#"
                  className="leading-normal no-underline text-white text-lg hover:text-primary"
                >
                  Tour
                </a>
                <a
                  href="#"
                  className="leading-normal no-underline text-white text-lg hover:text-primary"
                >
                  Blog
                </a>
                <a
                  href="#"
                  className="leading-normal no-underline text-white text-lg hover:text-primary"
                >
                  Gallery
                </a>
              </ul>
              <div className="flex justify-center w-full">
                <button className="rounded-full border border-solid border-primary bg-transparent text-lg text-white px-8 py-3 hoverBtn">
                  Contact Us
                </button>
              </div>
            </div>
          </div>
        ) : null}
      </div>
    </nav>
  );
}
