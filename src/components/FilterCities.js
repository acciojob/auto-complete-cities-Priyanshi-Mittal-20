import React from 'react'
import { useState } from 'react';

const FilterCities = ({suggestions}) => {

const [filter,setFilter]=useState([])
function handleChange(e)
{
  setFilter(suggestions.filter(cty=> cty.toLowerCase().includes(e.target.value.toLowerCase())))
}
  return (
    <div>
      <label for="city">Search cities of India:</label>
      <input id="city" type="text" onChange={handleChange} />
      {
        filter &&
        <div>
            {filter.map(cty=>
              <li>{cty}</li>
            )}
        </div>
      }
    </div>
  )
}

export default FilterCities
