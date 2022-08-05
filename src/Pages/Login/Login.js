import { useState } from "react";
import { useNavigate } from "react-router-dom";
import github from '../../Assets/img/github.png'
import './Login.css';
export const base_URL = "https://api.github.com/users/";
const Login = () => {
    const [profileName, setProfileName] = useState();
    //const base_URL = "https://api.github.com/users/";
    let navigate = useNavigate();
    const loginGit = async () => {
        let request = await fetch(base_URL + profileName);
        let json = await request.json();
        localStorage.setItem("json_current_user", JSON.stringify(json)); // Armazena conteudo da API na memória local em forma de Json  
        navigate("/home")
    }

    return (

        <div className="login">
            <img src={github} />
            
                <input type="text" onChange={(typed) => { setProfileName(typed.target.value) }}></input>
                <button onClick={loginGit}> Login</button>

        </div >

    )
}
export default Login;
