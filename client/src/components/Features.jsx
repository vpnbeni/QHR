import {  FaCalendarAlt, FaClock, FaQrcode, FaLock, FaMobileAlt } from 'react-icons/fa';
import FeatureCard from './FeatureCard';

const features = [
  {
    icon: <FaMobileAlt className='text-blue-600 text-3xl' />,
    bgColor:'bg-blue-100',
    title: 'Punch + selfie + location',
    description: 'With the three-factor authentication security of Punch + Selfie + Location, you can get dependable and authentic reports for your organization.',
  },
  {
    icon: <FaQrcode className='text-green-600 text-3xl' />,
    bgColor:'bg-green-100',

    title: 'Attendance with QR code',
    description: 'Employees can also mark attendance with a QR code. It will prevent time theft and buddy punch by allowing the employee to punch in and punch out using unique QR codes from their mobile phone only.',
  },
  {
    icon: <FaClock className='text-yellow-600 text-3xl' />,
    bgColor:'bg-yellow-100',

    title: 'Employees time-keeping',
    description: 'No more need to maintain a register of the employees. factoTime will record and keep the employee’s name, attendance, overtime, leave, salary, and many more details.',
  },
  {
    icon: <FaLock className='text-red-600 text-3xl' />,
    bgColor:'bg-red-100',

    title: 'Restrict employees device',
    description: 'This feature enables employees to punch only from the smartphone registered in the company database. This feature makes factoTime the most secure app in the market.',
  },
  {
    icon: <FaCalendarAlt className='text-green-600 text-3xl' />,
    bgColor:'bg-green-100',

    title: 'Holiday calendar',
    description: 'The yearly holiday list, including festivals and national and regional holidays. Which can be configured as per your requirement in the factoTime app.',
  },
  {
    icon: <FaCalendarAlt className='text-blue-600 text-3xl' />,
    bgColor:'bg-blue-100',

    title: 'Working days calendar',
    description: 'You can arrange a calendar with working days, hours, and weekly offs. You can also configure it as per your requirements. The reports are generated according to the configured setting.',
  },
];

const Features = () => {
  return (
    <div className="container mx-auto p-4 2xl:px-42 xl:px-36 lg:px-32 md:px-20 px-3">
      <h2 className="text-2xl font-bold mb-4 text-center lg:py-20">Exclusive Features Offered By factoTime</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 ">
        {features.map((feature, index) => (
          <FeatureCard key={index} feature={feature} />
        ))}
      </div>
    </div>
  );
}

export default Features;
