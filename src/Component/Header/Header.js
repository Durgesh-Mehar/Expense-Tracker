import React, {useContext} from "react";
import Button from "react-bootstrap/Button";
import Nav from "react-bootstrap/Nav";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { authActions } from "../Store/AuthSlicer";
import { darkAction } from "../Store/DarkSlicer";
import { useSelector } from 'react-redux';
import Download from "../pages/Download";

const Header = (props) => {
  const dispatch = useDispatch();
  
  
  const dark = useSelector(state => state.dark.showDarkTheme);
  const showActivefiture = useSelector(state => state.primium.showfiture)
  const show = useSelector(state => state.auth.isLogin)
  const logoutHandler = ()=> {
    alert("Do you want Logout")
    dispatch(authActions.logout())
  };

  const darkHandler = () => {
     dispatch(darkAction.showDark());
  }; 
  
  return (
    <div style={{backgroundColor: 'beige'}}>
      <Nav className="justify-content-center" activeKey="/home">
    {showActivefiture &&  <div style={{margin:'20px'}}><Button variant="dark" onClick={darkHandler}>{dark ? "Light Theme" : "Dark Theme"}</Button></div>}
    {show && <div style={{margin:'20px'}}><Link to="/" onClick={logoutHandler}><Button variant="outline-danger">Logout</Button></Link></div>}
    {showActivefiture && <div style={{margin:'20px'}}> <Download/></div>}
      </Nav>
       </div>
  )
};

export default Header;