import React, {useContext} from "react";
import Button from "react-bootstrap/Button";
import Nav from "react-bootstrap/Nav";
import { Link, useNavigate } from "react-router-dom";
import AuthContext from "../Context/AuthContext";



const Header = (props) => {

  const authCtx = useContext(AuthContext);
  const history = useNavigate();
  const isLoggedIn = authCtx.isLoggedIn;

  const logoutHandler = ()=> {
    alert("Do you want Logout")
     authCtx.Logout();
    history('login')
  };
  
  return (
    <>
    <div style={{backgroundColor: 'beige'}}>
      <Nav className="justify-content-center" activeKey="/home">
      <div style={{margin:'20px'}}><Link to="/">HOME</Link></div>

      {!isLoggedIn && <div style={{margin:'20px'}}><Link to="login" onClick={logoutHandler}>Logout</Link></div>}
      </Nav>
       </div>
    </>
  );
};

export default Header;