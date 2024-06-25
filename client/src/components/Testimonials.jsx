import TestimonialCard from './TestimonialCard';

const testimonials = [
  {
    name: 'Dhruv Vala',
    text: 'Awesome App All features are there which you want Daily punctuation facility are there',
    rating: 5
  },
  {
    name: 'Jobiden Jiofery',
    text: 'Very good app, business can use for attendance and salary management.',
    rating: 5
  },
  {
    name: 'Rashaad Hussain',
    text: 'Excellent app. Better than biometric attendance. I first used the free trial and now upgrade to premium for more better features. I have renewed by plan twice. I got very good support from the facto customer care. They even did custom settings for me.... Happy Facto Customer.',
    rating: 5
  },
  {
    name: 'Sopior Khan',
    text: 'We are using this app for past one year and subscribe premium plan from last 6 month working seamlessly and good support team.',
    rating: 5
  },
  {
    name: 'Sharene Van vuuren',
    text: 'Brilliant!!!! Makes my life so much easier and for my staff too. Would recomend to everyone',
    rating: 5
  },
  {
    name: 'Irah MC',
    text: 'Very user friendly. Does all that I need for attendance tracking and does not consume too much space in my phone memory.',
    rating: 5
  },
  {
    name: 'Anower Islamniiyjg',
    text: 'Facto Time is that only app that providing all over attendance and salary management with affordable subscription.',
    rating: 5
  },
];

const Testimonials = () => {
  return (
    <div className="container mx-auto p-4 2xl:px-42 xl:px-36 lg:px-32 lg:pb-32 md:px-20 px-3 ">
      <div className="bg-blue-100 p-6 rounded-lg my-20 text-center">
        <h2 className="text-4xl font-medium mb-2">Get started with factoTime for free.</h2>
        <p className="mb-4 text-lg">Try all features with a free trial without credit card details.</p>
        <button className="bg-blue-500 text-white px-8 py-2 rounded-full">Start Free Trial</button>
      </div>
      <h2 className="text-2xl font-bold mb-4 text-center lg:my-10">What Our Users Say</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {testimonials.map((testimonial, index) => (
          <TestimonialCard key={index} testimonial={testimonial} />
        ))}
      </div>
    </div>
  );
}

export default Testimonials;
