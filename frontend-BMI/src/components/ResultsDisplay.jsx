const ResultsDisplay = ({ bmi, weightCategory, idealWeight }) => {
  if (!bmi) return null;

  return (
    <div className="mt-4">
      <p>Your BMI is: {bmi}</p>
      <p>{weightCategory}</p>
      <p>{idealWeight}</p>
    </div>
  );
};

export default ResultsDisplay;
