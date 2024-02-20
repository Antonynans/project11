/* eslint-disable react/prop-types */

import { FaPlay, FaStar } from "react-icons/fa";
import { MdBookOnline } from "react-icons/md";
import { IoPerson } from "react-icons/io5";
import { FaPersonPraying } from "react-icons/fa6";
import { GoPackage } from "react-icons/go";
import { IoBook } from "react-icons/io5";
import { GiNurseFemale } from "react-icons/gi";

/* eslint-disable react/no-unescaped-entities */
export default function Hero() {
  const Card = ({ image, packageType, duration, amount, type }) => {
    return (
      <div>
        <img
          src={image}
          alt=""
          className="w-full rounded-[10px] object-cover bg-[#ececec] shadow-md"
          height={212}
        />
        <p className="text-primary text-base font-semibold pt-4 pb-2">{type}</p>
        <h6 className="text-2xl">{packageType}</h6>
        <span className="text-secondary text-2xl flex items-baseline font-semibold pt-2">
          ${amount} <p className="text-black text-sm font-medium">/person</p>
        </span>
        <p className="pt-4 pb-6 font-medium">
          Package's Duration ({duration} Days)
        </p>
        <button className="rounded-full px-8 py-3 border-none outline-none font-medium text-base bg-lightBlue hover:bg-secondary hover:text-white hoverBtn">
          Details
        </button>
      </div>
    );
  };

  const Offers = ({ title, text, icon }) => {
    return (
      <div className="flex items-center gap-x-4">
        <span className="rounded-full bg-white w-16 h-16 flex items-center justify-center text-3xl">
          {icon}
        </span>
        <span>
          <p className="text-xl font-semibold pb-2">{title}</p>
          <p className="font-medium">{text}</p>
        </span>
      </div>
    );
  };

  const Packages = ({ image, title, text }) => {
    return (
      <div className="text-center flex flex-col justify-between items-center">
        <div className="rounded-[4rem] border-[1rem] border-black border-solid w-1/2 h-60">
          <img
            src={image}
            alt=""
            className="w-full h-full rounded-[3rem] object-cover"
          />
        </div>
        <p className="text-3xl font-semibold w-44 py-4">{title}</p>
        <p className="leading-7 px-2">{text}</p>
        <button className="outline-none border-none py-4 bg-transparent text-lg font-semibold hover:text-secondary hover:underline cursor-pointer">
          Read Info
        </button>
      </div>
    );
  };

  const Reviews = ({ image, rating, review }) => {
    return (
      <div className="flex flex-col items-center">
        <img src={image} alt="" className="w-40 h-20 object-contain" />
        <span className="font-medium text-lg">
          <FaStar className="text-yellow-400 text-xl" /> {rating}/5
        </span>
        <p className="pt-3 text-lg">{review} reviews</p>
      </div>
    );
  };
  return (
    <>
      <div className="bg-[url('/main_image.png')] bg-cover bg-center bg-no-repeat min-h-[50rem] h-screen pt-24">
        <h1 className="text-white text-center lg:text-5xl text-3xl pt-24 pb-8">
          Economy Hajj & Umrah Package
        </h1>
        <p className="text-white font-light text-center lg:w-2/5 sm:w-1/2 mx-auto leading-10">
          Budget-friendly & luxury package for a convenient hajj and umrah
          journey to the holy makkah & madinah for muslim brothers and sisters.
        </p>
        <div className="flex justify-center py-8">
          <button className="bg-primary rounded-full px-10 py-4 outline-none border-none font-semibold text-base hoverBtn">
            Get a Package Price
          </button>
        </div>
      </div>
      <section className="container mx-auto px-2 xl:pt-16 pb-24">
        <div className="flex flex-wrap items-center justify-evenly py-16 gap-y-8">
          <Reviews image="/trustpilot.svg" rating="4.5" review="1597" />
          <Reviews image="/facebook_logo.png" rating="5" review="3791" />
          <Reviews image="/hajj_logo.png" rating="4.5" review="2487" />
          <Reviews image="/yp_logo.png" rating="5" review="317" />
          <Reviews image="/angi.jpg" rating="5" review="317" />
        </div>
        <h2 className="font-semibold lg:text-5xl text-3xl text-center">
          Hajj And Umrah Special Offers
        </h2>
        <p className="text-center pt-8 font-medium">
          Don't miss out on these special offers from us!
        </p>
        <div className="grid xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-8 pt-16">
          <Card
            amount="15,000"
            duration="42-45"
            image="/image3.png"
            packageType="Haji Package"
            type="Classic"
          />
          <Card
            amount="12,000"
            duration="42-45"
            image="/image4.jpeg"
            packageType="Haji Package"
            type="Economy"
          />
          <Card
            amount="10,000"
            duration="10-14"
            image="/image5.jpeg"
            packageType="Umrah Package"
            type="Classic"
          />
          <Card
            amount="7,000"
            duration="10-14"
            image="/image6.jpeg"
            packageType="Umrah Package"
            type="Classic"
          />
        </div>
      </section>
      <section className="bg-light relative">
        <img
          src="/image2.png"
          alt=""
          className="lg:absolute right-8 xl:w-auto lg:w-1/2 lg:h-full h-80"
        />

        <div className="container mx-auto px-2 lg:py-24 py-12">
          <h2 className="font-semibold lg:text-5xl text-3xl">
            What Do We Offer
          </h2>
          <p className="lg:w-1/3 leading-8 font-semibold py-6">
            At-taqwa Hajj & Umrah travel offers you incredible facilities for
            your Hajj & Umrah tour. The facilities include the best
            accommodation, direct flights and clean hotels at affordable priced
            packages from At-taqwa Hajj & Umrah travel.
          </p>
          <button className="bg-primary rounded-full px-10 py-4 outline-none border-none font-semibold text-base mt-2 hoverBtn">
            Learn More
          </button>
          <div className="grid lg:grid-cols-2 grid-cols-1 lg:w-1/2 gap-8 pt-16">
            <Offers
              icon={<MdBookOnline />}
              text="We have over 40 payment ways."
              title="Hotel Booking"
            />
            <Offers
              icon={<IoPerson />}
              text="Best Ramadan Hajj Package."
              title="Hajj Offers"
            />
            <Offers
              icon={<IoBook />}
              text="No hestling in visa processing."
              title="Visa Processing"
            />
            <Offers
              icon={<FaPersonPraying />}
              text="Umrah offers for family"
              title="Umrah Offers"
            />
            <Offers
              icon={<GiNurseFemale />}
              text="Our guide will lead you all."
              title="Ziyarat Tours"
            />
            <Offers
              icon={<GoPackage />}
              text="This is a group Umrah Package."
              title="Umrah Packages"
            />
          </div>
        </div>
      </section>
      <section className="container mx-auto px-2 lg:pt-24 pt-12">
        <h4 className="text-2xl font-semibold text-center">
          Our Affiliations Flights & Hotels
        </h4>
        <div className="flex flex-wrap items-center justify-evenly py-16 gap-8">
          <img
            src="/Kuwait_Airways_logo.svg"
            alt=""
            className="w-40 h-20 object-contain"
          />
          <img
            src="/biman_logo.jpg"
            alt=""
            className="w-40 h-20 object-contain"
          />
          <img
            src="/qatar_logo.jpg"
            alt=""
            className="w-40 h-20 object-contain"
          />
          <img
            src="/novoair_logo.png"
            alt=""
            className="w-40 h-20 object-contain"
          />
          <img
            src="/hilton_logo.jpg"
            alt=""
            className="w-40 h-20 object-contain"
          />
          <img
            src="/hyatt_logo.jpeg"
            alt=""
            className="w-40 h-20 object-contain"
          />
        </div>
        <h2 className="font-semibold lg:text-5xl text-3xl text-center py-4">
          All Inclusive Packages
        </h2>
        <p className="lg:w-2/5 mx-auto leading-8 py-6 text-center">
          All inclusive Umrah package with good hotels. Solely focus and
          maximize every minute of your tour with our cheap Umrah packages.
        </p>
        <div className="grid xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-8 py-16">
          <Packages
            image="/image8.svg"
            text='In Islam, the term "al-Aqsa Mosque refers to the entire Noble Sanctuary. The mosque is believed.'
            title="Al-Aqsa Packages"
          />
          <Packages
            image="/image9.jpeg"
            text="Muslims practice all other patterns of tourism such as business, attending conferences and cultural tourism."
            title="Islamic Tour Packages"
          />
          <Packages
            image="/image10.svg"
            text="The Hajj is an annual Islamic pilgrimage to Mecca, Saudi Arabia, the holiest city for Muslims."
            title="Hajj 2021 Packages"
          />
          <Packages
            image="/image11.svg"
            text="The Umrah is an Islamic pilgrimage to Mecca that can be undertaken at any time of the year."
            title="Umrah Packages"
          />
        </div>

        <div className="lg:flex items-center gap-x-16 lg:pt-16">
          <div className="relative lg:w-[45rem] lg:h-[35rem] bg-light px-8 py-[3.5rem]">
            <img
              src="/image7.jpeg"
              alt="image of a man praying in the desert"
              className="w-full h-full rounded-[10px] object-cover relative z-10"
            />
            <div className="absolute bg-primary h-full w-2/5 top-0 left-24"></div>
          </div>
          <div className="lg:w-2/5 lg:py-0 py-8">
            <h2 className="font-semibold lg:text-5xl text-3xl">
              Learn correctly how to perform Umrah
            </h2>
            <p className="leading-8 py-8 font-medium">
              Take a full-body bath or Ghusi. Before you set off, ensure that
              you have prayed in full for all the Salat that is due. Make sure
              to read 2 Rakats from traveling Salah before you set out for
              traveling.
            </p>
            <button className="text-white text-base bg-secondary rounded-full px-8 py-4 flex items-center gap-2 outline-none border-none hoverBtn">
              <FaPlay /> Watch video
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
