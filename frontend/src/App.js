import { Route, Routes } from 'react-router-dom';
import SignUp from './Component/pages/SignUp';
import LogIn from './Component/pages/LogIn';
import CompleteProfile from './Component/pages/CompleteProfile';
import Header from './Component/Header/Header';
import Welcome from './Component/pages/Welcome';
import { useSelector } from 'react-redux';

function App() {
  const dark = useSelector(state => state.dark.showDarkTheme);
  
  return (
  
    <div style={{backgroundColor:dark ? '#222222' : 'white'}}>
    <Header/>
    <Routes>
      <Route path="/" element={<LogIn />} />
      <Route path='/signup' element={<SignUp/>} />
      <Route path='/welcome' element={<Welcome/>}/>
      <Route path='welcome/completeprofile' element={<CompleteProfile/>} />
    </Routes>
    </div>
  );
}

export default App;

