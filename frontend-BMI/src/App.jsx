import { useState } from "react";
import UnitSelector from "./components/UnitSelector";
import HeightInput from "./components/HeightInput";
import WeightInput from "./components/WeightInput";
import Button from "./components/Button";
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
    <main>
      <section className="relative flex flex-col-2 max-w-[1276px] max-h-[737px] font-inter mt-[-1] ml-6 gap-8">
        <div className="bg-custom-section" />
        <section className="w-1/2 ml-[116px]">
          <h2 className="mb-4 text-3xl font-semibold">
            Body Mass Index Calculator
          </h2>
          <Button
            handleClick={resetInputs}
            className="w-full p-2 mb-4 text-white bg-gray-500"
          >
            New Calculation
          </Button>
        </section>
        <section className="flex flex-col items-center justify-center w-1/2">
          <div className="mb-4">
            <UnitSelector
              unit={unit}
              setUnit={setUnit}
              resetInputs={resetInputs}
            />
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
          <Button
            handleClick={calculateBMI}
            className="w-full p-2 text-white bg-blue-500"
          >
            Calculate BMI
          </Button>
          {bmi && (
            <ResultsDisplay
              bmi={bmi}
              weightCategory={weightCategory}
              idealWeight={idealWeight}
            />
          )}
        </section>
      </section>
    </main>
  );
};

export default App;
