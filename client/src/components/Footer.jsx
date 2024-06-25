import logo from "../image/Qurilo final HR 4.png";

const Footer = () => {
  return (
    <>
      <div className="2xl:px-64 xl:px-48 lg:px-10 md:px-5 px-2 bg-gray-800 text-white grid grid-cols-1 lg:grid-cols-4 md:grid-cols-2 lg:gap-4 gap-10 py-20 text-sm ">
        <div className=" px-6">
          <img className="p-2 w-2/5 lg:w-3/4 md:w-1/2 pb-4" src={logo} alt="" />
          <p>
            factoTime is part of Version Systems, an employee experience
            platform. The only HR & Payroll software that is employee centric.
            Unlike traditional HR systems, we are a modern new generation
            platform focused on user experience and simplifying complex
            workflows.
          </p>
        </div>
        <div className=" px-6 ">
          <h3 className="text-xl font-bold pb-4 lg:pb-5    ">Features</h3>
          <ul>
            <li>Time Tracking</li>
            <li>Scheduling</li>
            <li>Geo Marking</li>
            <li>Mobile First Solution</li>
          </ul>
        </div>
        <div className=" px-6 ">
          <h3 className="text-xl font-bold pb-4 lg:pb-5    ">Company</h3>
          <ul>
            <li>About Us</li>
            <li>Plans</li>
            <li>Privacy Policy</li>
            <li>Terms & Conditions </li>
            <li>Help</li>
          </ul>
        </div>
        <div className=" px-6 ">
          <h3 className="text-xl font-bold pb-4 lg:pb-5    ">Location</h3>
          <ul>
            <li>
              Metro Station, Block-A, RZ-91/2, Second Floor, Main Mohan Garden
              Bus Stand, near Nawada, opp. Metro Pillar No. 745, New Delhi,
              Delhi 110059
            </li>
          </ul>
        </div>
      </div>
     
      <div className="bg-gray-900 text-white text-center py-4 font-medium ">
        {" "}
        © Copyright Qurilo Solutioin Pvt. Ltd. 2024
      </div>
    </>
  );
};

export default Footer;
