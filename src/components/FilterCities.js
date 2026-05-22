import React, { useState } from 'react';

const FilterCities = ({ suggestions }) => {

  const [filter, setFilter] = useState([]);
  const [inputValue, setInputValue] = useState("");

  function handleChange(e) {
    const value = e.target.value;

    setInputValue(value);

    setFilter(
      suggestions.filter(cty =>
        cty.toLowerCase().includes(value.toLowerCase())
      )
    );
  }

  function handleClick(city) {
    setInputValue(city);
    setFilter([]);
  }

  return (
    <div>
      <label htmlFor="city">Search cities of India:</label>

      <input
        id="city"
        type="text"
        value={inputValue}
        onChange={handleChange}
      />

      <div>
        {
          filter.map((cty, index) => (
            <li
              key={index}
              onClick={() => handleClick(cty)}
            >
              {cty}
            </li>
          ))
        }
      </div>
    </div>
  );
}

export default FilterCities;