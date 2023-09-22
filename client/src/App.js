import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Signup from './pages/Signup'
import Login from './pages/Login'
import Homepage from "./pages/Homepage";
import Frontpage from "./pages/frontpage";
import ForgotPassword from "./pages/forgotpassword"
import ResetPassword from "./pages/resetpassword";
// import SelectLeauge from './pages/leauge';
import SearchPlayer from './pages/searchPlayer';
import PremireLeauge from './pages/teamselectprem';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Frontpage />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/signup" element={<Signup />}></Route>
        <Route path="/homepage" element={<Homepage />}></Route>
        <Route path="/searchplayer" element={<SearchPlayer />}></Route>
        <Route path="/forgotpassword" element={<ForgotPassword />}></Route>
        <Route path="/resetpassword" element={<ResetPassword />}></Route>
        <Route path="/premireleauge" element={<PremireLeauge />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App