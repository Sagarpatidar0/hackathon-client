import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from './pages/home';
import Mdonation from './pages/Mdonation';
import Bdonation from './pages/Bdonation';
import Needblood from './pages/Needblood';
import Loginpage from './pages/Login';
import Registrationpage from './pages/Registration';
import Ngos from './pages/ngos';

function App() {
  return (
    <BrowserRouter >
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/mdonate' element={<Mdonation/>}/>
        <Route path='/bdonate' element={<Bdonation/>}/>
        <Route path='/needblood' element={<Needblood/>}/>
        <Route path='/login' element={<Loginpage/>}/>
        <Route path='/registration' element={<Registrationpage/>}/>
        <Route path='/ngo' element={<Ngos/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
