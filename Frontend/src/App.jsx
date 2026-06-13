import './App.css'
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom';
import LandingPage from "./Components/LandingPage.jsx";
import Navbar from './Components/Navbar.jsx';
import AuthModal from './Components/AuthModal.jsx';
import { MyContext } from './Contexts/MyContext.jsx';
import { useState } from 'react';
import { AuthProvider } from './Contexts/AuthContext.jsx';
import Toast from './Components/Toast.jsx';
import VideoMeetComponenet from './Components/VideoMeet.jsx';

function App() {
  const [openRegister,setOpenRegister] = useState(false);
  const [ openLogin,setOpenLogin] = useState(false);
  const [ username,setUsername] = useState("");
  const [ email,setEmail] = useState("");
  const [ password,setPassword] = useState("");

  const values={
    openRegister,setOpenRegister,
    openLogin,setOpenLogin,
    email,setEmail,
    username,setUsername,
    password,setPassword
  }
  return (
    <>
      <MyContext value={values}>
        <Navbar/>
        <Router>

          <AuthProvider>
            <Routes>
              <Route path="/" element={
                <>
                  <AuthModal open={openLogin} setOpen={setOpenLogin} title={"LOGIN"}/>
                  <AuthModal open={openRegister} setOpen={setOpenRegister} title={"REGISTER"}/>
                  <LandingPage/>
                </>}/>

                <Route path='/:url' element={<VideoMeetComponenet/>}></Route>
            </Routes>
          </AuthProvider>
          
        </Router>
      </MyContext>
      <Toast/>
    </>
  )
}

export default App
