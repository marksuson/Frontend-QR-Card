import PropTypes from "prop-types";

const ResultsDisplay = ({ bmi, weightCategory, idealWeight }) => {
  if (!bmi) return null; // Don't display anything if BMI hasn't been calculated yet

  return (
    <div className="mt-4">
      <p>Your BMI is: {bmi}</p>
      <p>{weightCategory}</p>
      <p>{idealWeight}</p>
    </div>
  );
};

ResultsDisplay.propTypes = {
  bmi: PropTypes.string.isRequired,
  weightCategory: PropTypes.string.isRequired,
  idealWeight: PropTypes.string.isRequired,
};

export default ResultsDisplay;
