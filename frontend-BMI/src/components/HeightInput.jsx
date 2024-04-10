const HeightInput = ({
  unit,
  height,
  setHeight,
  feet,
  setFeet,
  inches,
  setInches,
}) => {
  return (
    <div>
      {unit === "metric" ? (
        <div>
          <label htmlFor="height" className="block mb-2">
            Height (cm)
          </label>
          <input
            type="number"
            id="height"
            value={height}
            onChange={(e) => setHeight(e.target.value)}
            className="border p-2 mb-4 w-full"
          />
        </div>
      ) : (
        <div className="flex space-x-2 mb-4">
          <div className="flex-1">
            <label htmlFor="feet" className="block mb-2">
              Height (feet)
            </label>
            <input
              type="number"
              id="feet"
              value={feet}
              onChange={(e) => setFeet(e.target.value)}
              className="border p-2 w-full"
            />
          </div>
          <div className="flex-1">
            <label htmlFor="inches" className="block mb-2">
              Height (inches)
            </label>
            <input
              type="number"
              id="inches"
              value={inches}
              onChange={(e) => setInches(e.target.value)}
              className="border p-2 w-full"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default HeightInput;
