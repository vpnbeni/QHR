import PropTypes from 'prop-types';

const FeatureCard = ({ feature }) => {
  return (
    <div className="bg-white shadow-xl rounded-lg p-6 flex flex-col  text-center items-center">
      <div className={`text-2xl mb-4 w-16 h-16  rounded-full flex items-center justify-center ${feature.bgColor}`}>{feature.icon}</div>
      <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
      <p>{feature.description}</p>
    </div>
  );
}

FeatureCard.propTypes = {
  feature: PropTypes.shape({
    icon: PropTypes.element.isRequired,
    bgColor: PropTypes.element.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
  }).isRequired,
};

export default FeatureCard;
