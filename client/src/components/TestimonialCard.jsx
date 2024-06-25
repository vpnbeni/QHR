import PropTypes from 'prop-types';

const TestimonialCard = ({ testimonial }) => {
  const stars = Array(testimonial.rating).fill('⭐');

  return (
    <div className="bg-white shadow-md rounded-lg p-6 flex flex-col items-start text-left border-t-4" style={{ borderTopColor: getRandomColor() }}>
      <p className="mb-2">{testimonial.text}</p>
      <p className="font-semibold mb-1">{testimonial.name}</p>
      <div className="text-yellow-500">{stars}</div>
    </div>
  );
}

const getRandomColor = () => {
  const colors = ['#3B82F6', '#10B981', '#F59E0B', '#EF4444'];
  return colors[Math.floor(Math.random() * colors.length)];
};

TestimonialCard.propTypes = {
  testimonial: PropTypes.shape({
    name: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired
  }).isRequired
};

export default TestimonialCard;
