const UnitSelector = ({ unit, setUnit, resetInputs }) => {
  const handleUnitChange = (newUnit) => {
    setUnit(newUnit);
    resetInputs();
  };

  return (
    <div className="mb-4">
      <label className="inline-flex items-center mr-4">
        <input
          type="radio"
          name="unit"
          value="metric"
          checked={unit === "metric"}
          onChange={() => handleUnitChange("metric")}
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
          onChange={() => handleUnitChange("imperial")}
          className="form-radio"
        />
        <span className="ml-2">Imperial</span>
      </label>
    </div>
  );
};

export default UnitSelector;
