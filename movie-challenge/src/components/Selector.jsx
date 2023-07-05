// import React from 'react'

function Selector() {
  return (
    <div>
      <select className="SelectCategory">

      <option> Categoría </option>
        <option> Películas </option>
        <option> TV </option>

      </select>

      <select className="SelectGenre">

        <option> Géneros </option>
        <option> Drama </option>
        <option> Terror </option>

      </select>
    </div>
    
  )
}

export default Selector;