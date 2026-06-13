import axios from "axios";
import httpStatus from "http-status";
import { useContext ,useState} from "react";
import { useNavigate } from "react-router-dom";
import { createContext } from "react";
import server from "../../environment.js";

export const AuthContext = createContext({});

const url = server

const client = axios.create({
    baseURL:url
})

export const AuthProvider = ({children})=>{

    const authContext = useContext(AuthContext);

    const [userData,setUserData] = useState(authContext);

    const router = useNavigate();
    
    const handleRegister = async(username,email,password)=>{
        try{
            let request = await client.post("/register",{
                username,
                email,
                password
            })
            console.log(request)
            if(request.status === httpStatus.CREATED){
                return request.data.message;
            }
        }catch(err){
            console.log(err);

            throw err;
        }
    }

    const handleLogin = async(email,password)=>{
        try{
            let request = await client.post("/login",{
                email,
                password
            })

            if(request.status === httpStatus.OK){
                localStorage.setItem("token",request.data.token)
            }

        }catch(err){
            console.log(err);
            throw err;
        }
    }

    const data = {
        userData,setUserData,handleRegister,handleLogin
    }

    return(
        <AuthContext.Provider value={data}>
            {children}
        </AuthContext.Provider>
    )

}