import { Route, Routes } from 'react-router-dom';
import SignUp from './Component/SignUp';
import LogIn from './Component/LogIn';
import Welcome from './Component/pages/Welcome';
import CompleteProfile from './Component/pages/CompleteProfile';
import Header from './Component/Header/Header';

function App() {
  return (
    <>
    <Header/>
    <Routes>
      <Route path='/' element={<SignUp/>} />
      <Route path="login" element={<LogIn />} />
      <Route path='/welcome' element={<Welcome/>}/>
      <Route path='welcome/completeprofile' element={<CompleteProfile/>} />
    </Routes>
    </>
  );
}

export default App;


//import { Link } from "react-router-dom";
//<Link to="/login">Log in</Link>
// history("/welcome");