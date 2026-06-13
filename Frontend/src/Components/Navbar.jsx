import { useContext } from 'react';
import './Navbar.css';
import { MyContext } from '../Contexts/MyContext.jsx';

export default function Navbar(){
    const {openRegister,setOpenRegister,openLogin,setOpenLogin} = useContext(MyContext);

    return (
        <section className='navbar'>
            <div className="logo">
                <i className="fa-solid fa-video fa-2xl" style={{color:" rgb(86, 178, 249)",margin:"0 8px"}}></i>
                <h3><span style={{fontWeight:"700"}}>Video</span> Meet</h3>
            </div>
            <div className="authBtns">
                <button onClick={()=>{setOpenRegister(true)}}>REGISTER</button>
                <button onClick={()=>{setOpenLogin(true)}}>LOGIN</button>
            </div>
        </section>
    )
}