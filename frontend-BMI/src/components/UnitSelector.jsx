import PropTypes from "prop-types";

const UnitSelector = ({ unit, setUnit }) => {
  return (
    <div className="mb-4">
      <label className="inline-flex items-center mr-4">
        <input
          type="radio"
          name="unit"
          value="metric"
          checked={unit === "metric"}
          onChange={() => setUnit("metric")}
          className="form-radio"
        />
        <span className="ml-2">Metric</span>
      </label>
      <label className="inline-flex items-center">
        <input
          type="radio"
          name="unit"
          value="imperial"
          checked={unit === "imperial"}
          onChange={() => setUnit("imperial")}
          className="form-radio"
        />
        <span className="ml-2">Imperial</span>
      </label>
    </div>
  );
};

UnitSelector.propTypes = {
  unit: PropTypes.string.isRequired,
  setUnit: PropTypes.func.isRequired,
};

export default UnitSelector;
