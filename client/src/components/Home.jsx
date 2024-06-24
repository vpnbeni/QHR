import landingImg from "../image/landingImg2.png";
import landingImg2 from "../image/7.png";
import landingImg3 from "../image/8.png";
import landingImg4 from "../image/11.png";
import { MdOutlineStar } from "react-icons/md";
import { BsFillBuildingsFill } from "react-icons/bs";
import { RiComputerLine } from "react-icons/ri";
const Home = () => {
  return (
    <div className="home">
      <div className="section1">
        <div>
          <div className="h1">The Processes more</div>
          <span className="heading">important from</span>{" "}
          <span className="impText">Q-HR </span>
          <div className="heading">Here!</div>
          <br />
          <div className="i"> Get Started For Free</div>
          <div className="getStarted">
            <input type="text" />
            <button className="btn">Get Started</button>
          </div>
        </div>
        <div>
          <img src={landingImg} alt="" />
        </div>
      </div>
      <div className="section2">
        <div className="item">
          <MdOutlineStar className="icon star" />
          <h3>Highly Rated</h3>
          <div>Rated by 2000+ users, play store and app store</div>
        </div>
        <div className="item">
          <BsFillBuildingsFill className="icon building" />
          <h3>Download & Used by</h3>
          <div>More than 60000 organizations across the globe</div>
        </div>
        <div className="item">
          <RiComputerLine className="icon  computer" />
          <h3>Availability</h3>
          <div>Available on Android devices, iOS devices & web browsers.</div>
        </div>
      </div>
      <div className="section3">
        <div className="part1">
          <h2>Automate employees’ Time tracking with factoTime</h2>
          <div>
            A single platform for marking, recording, and managing employee’s
            time, attendance, and salary calculation
          </div>
        </div>
        <div className="part2">
          <div className="left">
            <div className="smallText">EMPLOYEE ATTENDANCE TRACKER</div>
            <h3>Automate attendance tracking system</h3>
            <div className="grayText">
              Adopt a new way to track, monitor, and record your staff’s
              attendance. Use readily available employee attendance management
              tool factoTime and automate and simplify your employee attendance
              management system.
            </div>
          </div>
          <div className="right">
            <img src={landingImg2} alt="" />
          </div>
        </div>
      </div>
      <div className="section3 bg">
        
        <div className="part2">
        <div className="right">
            <img src={landingImg3} alt="" />
          </div>
          <div className="left">
            <div className="smallText">CLOCK IN AND OUT APP</div>
            <h3>Multiple time clock features</h3>
            <div className="grayText">
            factoTime app provides various options for clocking in and out. For example, employees can clock in with the location and punch or scan a QR code.
            </div>
          </div>
          
        </div>
      </div>
      <div className="section3">
        
        <div className="part2">
          <div className="left">
            <div className="smallText">SALARY CALCULATOR</div>
            <h3>Automate salary calculation</h3>
            <div className="grayText">
            Make the Salary calculation effortless; With the help of working hours and rates details, factoTime automatically calculate your employees’ salary.
            </div>
          </div>
          <div className="right">
            <img src={landingImg4} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
