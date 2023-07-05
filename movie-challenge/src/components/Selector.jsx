// import React from 'react'

function Selector() {
  return (
    <div>
      <select className="SelectCategory">

      <option> category </option>
        <option> movies </option>
        <option> tv </option>

      </select>

      <select className="SelectGenre">

        <option> genres </option>
        <option> drama </option>
        <option> terror </option>

      </select>
    </div>
    
  )
}

export default Selector;