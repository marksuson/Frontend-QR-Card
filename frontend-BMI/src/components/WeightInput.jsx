import PropTypes from "prop-types";

const WeightInput = ({ unit, weight, setWeight }) => {
  return (
    <div>
      <label htmlFor="weight" className="block mb-2">
        Weight ({unit === "metric" ? "kg" : "lb"})
      </label>
      <input
        type="number"
        id="weight"
        value={weight}
        onChange={(e) => setWeight(e.target.value)}
        className="border p-2 mb-4 w-full"
      />
    </div>
  );
};

WeightInput.propTypes = {
  unit: PropTypes.string.isRequired,
  weight: PropTypes.string.isRequired,
  setWeight: PropTypes.func.isRequired,
};

export default WeightInput;
