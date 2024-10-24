import "./Header.css";
import { Link } from "react-router-dom";

function Header  ()  {


  return (
    <nav className="navbar navbar-expand-lg"> 
      <div className="master container-fluid p-0">
        <h1 className="logo">LocaCar</h1>
      </div>
      <div className="reserva">
       <h1>RESERVA</h1>
      </div>
      <div className="input">
        <input type="text" />
      </div>
    
    </nav>
  );
};

export default Header;
