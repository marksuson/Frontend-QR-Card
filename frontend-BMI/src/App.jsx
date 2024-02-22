import { useState } from "react";
import UnitSelector from "./components/UnitSelector";
import HeightInput from "./components/HeightInput";
import WeightInput from "./components/WeightInput";
import CalculateButton from "./components/CalculateButton";
import ResultsDisplay from "./components/ResultsDisplay";

const App = () => {
  const [unit, setUnit] = useState("metric");
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [feet, setFeet] = useState("");
  const [inches, setInches] = useState("");
  const [bmi, setBmi] = useState("");
  const [weightCategory, setWeightCategory] = useState("");
  const [idealWeight, setIdealWeight] = useState("");

  const resetInputs = () => {
    setWeight("");
    setHeight("");
    setFeet("");
    setInches("");
    setBmi("");
  };

  const calculateBMI = () => {
    let bmiValue;
    let weightText = "";
    let lowWeight, highWeight;

    if (unit === "metric" && weight && height) {
      const heightInMeters = height / 100;
      bmiValue = weight / (heightInMeters * heightInMeters);
    } else if (unit === "imperial" && weight && feet && inches) {
      const totalHeightInInches = parseInt(feet) * 12 + parseInt(inches);
      bmiValue = (weight / (totalHeightInInches * totalHeightInInches)) * 703;
    } else {
      return;
    }

    if (bmiValue < 18.5) {
      weightText = "Underweight";
    } else if (bmiValue >= 18.5 && bmiValue <= 24.9) {
      weightText = "a Healthy weight";
    } else if (bmiValue >= 25 && bmiValue <= 29.9) {
      weightText = "Overweight";
    } else if (bmiValue >= 30) {
      weightText = "Obese";
    }

    const heightInMeters =
      unit === "metric"
        ? height / 100
        : (parseInt(feet) * 12 + parseInt(inches)) * 0.0254;
    lowWeight = 18.5 * (heightInMeters * heightInMeters);
    highWeight = 24.9 * (heightInMeters * heightInMeters);

    if (unit === "imperial") {
      lowWeight = lowWeight * 2.20462;
      highWeight = highWeight * 2.20462;
    }

    setBmi(bmiValue.toFixed(2));
    setWeightCategory(`Your BMI suggests you're ${weightText}.`);
    setIdealWeight(
      `Your ideal weight is between ${lowWeight.toFixed(
        1
      )} - ${highWeight.toFixed(1)}.`
    );
  };

  return (
    <div className="p-4">
      <h2 className="text-lg font-semibold mb-4">BMI Calculator</h2>
      <button
        onClick={resetInputs}
        className="bg-gray-500 text-white p-2 mb-4 w-full"
      >
        <div>New Calculation</div>
      </button>
      <div className="mb-4">
        <UnitSelector unit={unit} setUnit={setUnit} />
      </div>
      <HeightInput
        unit={unit}
        height={height}
        setHeight={setHeight}
        feet={feet}
        setFeet={setFeet}
        inches={inches}
        setInches={setInches}
      />
      <WeightInput unit={unit} weight={weight} setWeight={setWeight} />
      <CalculateButton calculateBMI={calculateBMI} onClick={calculateBMI} />
      {bmi && (
        <ResultsDisplay
          bmi={bmi}
          weightCategory={weightCategory}
          idealWeight={idealWeight}
        />
      )}
    </div>
  );
};

export default App;
