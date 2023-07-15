import { Navigate } from "react-router-dom";
import "./Header.css"

function Header() {
  const handleClick = () => {
    window.location.href = '/'
  }
  return (
    <div className='header' onClick={handleClick}> 
        <h1> motion </h1>
        <img className="logo" src='../src/img/m-m.svg'></img>
    </div>
  )
}

export default Header;

