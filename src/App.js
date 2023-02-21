import { Route, Routes } from 'react-router-dom';
import SignUp from './Component/SignUp';
import LogIn from './Component/LogIn';
import Welcome from './Component/pages/Welcome';

function App() {
  return (
    <Routes>
      <Route path='/' element={<SignUp/>} />
      <Route path="login" element={<LogIn />} />
      <Route path='welcome' element={<Welcome/>}/>
    </Routes>
  );
}

export default App;


//import { Link } from "react-router-dom";
//<Link to="/login">Log in</Link>
// history("/welcome");