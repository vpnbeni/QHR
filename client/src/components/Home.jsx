import { useEffect, useState } from "react";
import landingImg from "../image/hr dashboard.png";
import landingImg2 from "../image/attendance tracking0.png";
import landingImg3 from "../image/8.png";
import landingImg4 from "../image/11.png";
import { MdOutlineStar } from "react-icons/md";
import { BsFillBuildingsFill } from "react-icons/bs";
import { RiComputerLine } from "react-icons/ri";
import Features from "./Features";
import Testimonials from "./Testimonials";
const Home = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);
  return (
    <div className="home bg-orange-50 ">
      <div
        className={`section1  2xl:px-72 xl:px-52 lg:px-36 md:px-32 px-3  lg:pb-28 items-center justify-between flex flex-wrap md:flex-nowrap  text-center md:text-left  ${
          isMounted ? "animate-fadeInUp" : ""
        }`}
      >
        <div className="w-full lg:w-2/3 py-20 lg:py-0">
          <div className="text-3xl md:text-4xl lg:text-4xl 2xl:text-6xl font-bold inline-block lg:block">
            The Processes more &nbsp;
          </div>
          <span className="text-2xl md:text-4xl lg:text-3xl 2xl:text-4xl font-medium">
            important from
          </span>{" "}
          <span className="lg:inline block"> </span>
          <span className="text-2xl md:text-4xl lg:text-3xl 2xl:text-4xl text-orange-500 font-bold ">
            Q-HR{" "}
          </span>
          <div className="text-2xl md:text-4xl lg:text-3xl 2xl:text-4xl font-medium inline lg:block">
            Here!
          </div>
          <br />
          <div className="italic bg-inherit py-4 lg:py-1">
            {" "}
            Get Started For Free
          </div>
          <div className="getStarted ">
            <input
              className="rounded-3xl px-6 py-2 mb-4 lg:mb-1 my-1 w-4/5 sm:w-1/2 lg:w-auto "
              type="text"
              placeholder="Enter your email adress..."
            />
            <button className="text-lg px-3 mx-2 py-1 bg-red-400 rounded-3xl font-bold text-white hover:bg-orange-400 w-4/5 sm:w-1/3 lg:w-auto">
              Get Started
            </button>
          </div>
        </div>
        <div className="w-0 lg:w-auto ">
          <img
            className="w-0 md:w-0 lg:w-4/5 xl:w-full 2xl:w-auto m-auto "
            src={landingImg}
            alt=""
          />
        </div>
      </div>
      <div className="section2  2xl:px-64 xl:px-52 lg:px-36 md:px-32 px-3 py-20  block lg:flex  text-center bg-blue-100 p-auto">
        <div className="flex flex-col items-center lg:w-1/3 mx-3 mb-5 lg:pb-0">
          <MdOutlineStar className="text-6xl text-green-500" />
          <div className="text-lg font-medium">Highly Rated</div>
          <div className="text-wrap">
            Rated by 2000+ users, play store and app store
          </div>
        </div>
        <div className="flex flex-col items-center lg:w-1/3 mx-3 mb-5 lg:pb-0">
          <BsFillBuildingsFill className="text-6xl text-blue-500" />
          <div className="text-lg font-medium">Download & Used by</div>
          <div className="text-wrap">
            More than 60000 organizations across the globe
          </div>
        </div>
        <div className="flex flex-col items-center lg:w-1/3 mx-3 mb-5 lg:pb-0">
          <RiComputerLine className="text-6xl text-red-500" />
          <div className="text-lg font-medium">Availability</div>
          <div className="text-warp">
            Available on Android devices, iOS devices & web browsers.
          </div>
        </div>
      </div>
      <div className="section3 2xl:px-54 xl:px-36 lg:px-16 md:px-5 px-3 py-20 ">
        <div className="part1 text-center text-wrap pb-3 lg:pb-10">
          <div className="text-2xl pb-2 lg:pb-4 font-medium">
            Automate employees’ Time tracking with factoTime
          </div>
          <div className="pb-2 lg:pb-4">
            A single platform for marking, recording, and managing employee’s
            time, attendance, and salary calculation
          </div>
        </div>
        <div className="part2 flex flex-col lg:flex-row   items-center ">
          <div className="order-2 sm:order-1  w-full  lg:w-2/5 p-1  lg:p-1  2xl:p-10 my-8">
            <div className="smallText text-sm font-bold text-orange-500">
              EMPLOYEE ATTENDANCE TRACKER
            </div>
            <div className="text-3xl font-medium text-gray-700">
              Automate attendance tracking system
            </div>
            <div className="grayText text-gray-600">
              Adopt a new way to track, monitor, and record your staff’s
              attendance. Use readily available employee attendance management
              tool factoTime and automate and simplify your employee attendance
              management system.
            </div>
          </div>
          <div className=" order-1 sm:order-2  m-auto">
            <img src={landingImg2} alt="" />
          </div>
        </div>
      </div>
      <div className="section3 2xl:px-54 xl:px-36 lg:px-16 md:px-5 px-3 py-20 bg-white">
        <div className="part2 flex flex-col lg:flex-row   items-center ">
          <div className="order-1 sm:order-2  w-full  lg:w-2/5 p-1  lg:p-1  2xl:p-10 my-8">
            <div className="smallText text-sm font-bold text-orange-500">
              EMPLOYEE ATTENDANCE TRACKER
            </div>
            <div className="text-3xl font-medium text-gray-700">
              Automate attendance tracking system
            </div>
            <div className="grayText text-gray-600">
              Adopt a new way to track, monitor, and record your staff’s
              attendance. Use readily available employee attendance management
              tool factoTime and automate and simplify your employee attendance
              management system.
            </div>
          </div>
          <div className=" order-2 sm:order-1  m-auto">
            <img src={landingImg3} alt="" />
          </div>
        </div>
      </div>
      <div className="section3 2xl:px-54 xl:px-36 lg:px-16 md:px-5 px-3 py-20 bg-green-100">
        <div className="part2 flex flex-col lg:flex-row   items-center ">
          <div className="order-2 sm:order-1  w-full  lg:w-2/5 p-1  lg:p-1  2xl:p-10 my-8">
            <div className="smallText text-sm font-bold text-orange-500">
              EMPLOYEE ATTENDANCE TRACKER
            </div>
            <div className="text-3xl font-medium text-gray-700">
              Automate attendance tracking system
            </div>
            <div className="grayText text-gray-600">
              Adopt a new way to track, monitor, and record your staff’s
              attendance. Use readily available employee attendance management
              tool factoTime and automate and simplify your employee attendance
              management system.
            </div>
          </div>
          <div className=" order-1 sm:order-2  m-auto">
            <img src={landingImg4} alt="" />
          </div>
        </div>
      </div>
      <Features />
      <Testimonials />
    </div>
  );
};

export default Home;
