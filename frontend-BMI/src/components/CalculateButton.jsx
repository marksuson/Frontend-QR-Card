import PropTypes from "prop-types";

const CalculateButton = ({ calculateBMI }) => (
  <button onClick={calculateBMI} className="bg-blue-500 text-white p-2 w-full">
    Calculate BMI
  </button>
);

CalculateButton.propTypes = {
  calculateBMI: PropTypes.func.isRequired,
};

export default CalculateButton;
