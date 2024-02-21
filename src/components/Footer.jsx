import { FaFacebookF, FaTwitter, FaLinkedinIn, FaPhone } from "react-icons/fa";
import { MdLocationPin } from "react-icons/md";

export default function Footer() {
  return (
    <footer className="bg-background py-20">
      <div className="container mx-auto px-6">
        <h2 className="lg:text-5xl text-white text-center font-semibold">
          Subscribe for Newsletter
        </h2>
        <p className="text-white text-center py-8">
          Never miss the Hajj & Umrah. Taqwa always open for offers.
        </p>
        <div className="flex gap-x-6 lg:w-1/3 mx-auto h-14 my-4">
          <input
            type="email"
            placeholder="Enter Email"
            className="rounded-l-full bg-transparent placeholder:text-white text-white border-solid border border-primary outline-none pl-4 w-full"
          />
          <button className="bg-primary font-semibold text-base rounded-r-full outline-none border-none w-40 hoverBtn">
            Subscribe
          </button>
        </div>
        <section className="lg:flex pt-16">
          <div className="flex flex-col justify-between">
            <div className="flex items-center gap-x-2">
              <img src="/logo.png" alt="image logo" className="w-12" />
              <span>
                <p className="text-white font-semibold text-lg leading-tight">
                  At-taqwa
                </p>
                <p className="text-primary text-sm">Hajj & Umrah</p>
              </span>
            </div>
            <p className="text-white leading-7 py-4 lg:w-2/3">
              At-taqwa hajj & umrah help service for people Hajj & Islamic Umrah
            </p>
            <div className="flex items-center gap-x-6">
              <button className="rounded-full outline-none border-none bg-[#262626] text-primary flex items-center p-3 hoverBtn">
                <FaFacebookF className="text-2xl" />
              </button>
              <button className="rounded-full outline-none border-none bg-primary flex items-center p-2 hoverBtn">
                <FaTwitter className="text-2xl" />
              </button>
              <button className="rounded-full outline-none border-none bg-[#262626] text-primary flex items-center p-3 hoverBtn">
                <FaLinkedinIn className="text-2xl" />
              </button>
            </div>
          </div>
          <div className="flex lg:flex-nowrap flex-wrap xl:w-2/3 w-full justify-between lg:pt-0 pt-12">
            <div>
              <h6 className="text-white text-2xl pb-6">Quick Link</h6>
              <ul className="flex flex-col gap-6">
                <a
                  href="#"
                  className="text-white no-underline hover:text-primary"
                >
                  Hajj & Umrah
                </a>
                <a
                  href="#"
                  className="text-white no-underline hover:text-primary"
                >
                  Facilities
                </a>
                <a
                  href="#"
                  className="text-white no-underline hover:text-primary"
                >
                  IslamicTour
                </a>
                <a
                  href="#"
                  className="text-white no-underline hover:text-primary"
                >
                  Gallery
                </a>
              </ul>
            </div>
            <div>
              <h6 className="text-white text-2xl pb-6">Offers</h6>
              <ul className="flex flex-col gap-6">
                <a
                  href="#"
                  className="text-white no-underline hover:text-primary"
                >
                  Hajj Packages
                </a>
                <a
                  href="#"
                  className="text-white no-underline hover:text-primary"
                >
                  Umrah Packages
                </a>
                <a
                  href="#"
                  className="text-white no-underline hover:text-primary"
                >
                  Hajj Guidelines
                </a>
                <a
                  href="#"
                  className="text-white no-underline hover:text-primary"
                >
                  Hajj Management
                </a>
              </ul>
            </div>
            <div className="sm:pt-0 pt-12 lg:w-1/2">
              <h6 className="text-white text-2xl pb-6">Contact Us</h6>
              <p className="flex gap-x-2 text-white sm:w-4/5 leading-7">
                <MdLocationPin className="text-primary text-3xl" /> 4517
                Washington Ave. Manchester, Kentucky 39495
              </p>
              <p className="flex items-center gap-x-2 text-white leading-10">
                <FaPhone className="text-primary text-2xl" /> (205) 555-0100
              </p>
            </div>
          </div>
        </section>
      </div>
    </footer>
  );
}
