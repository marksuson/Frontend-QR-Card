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

export default WeightInput;
