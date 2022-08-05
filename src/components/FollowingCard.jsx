
import './FollowingCard.css';
import {FaArrowRight} from 'react-icons/fa';
import {useNavigate} from 'react-router-dom';
import { base_URL } from '../Pages/Login/Login';

const FollowersCard=({item})=>{
    let navigate = useNavigate()
    const setNewUser=async()=>{
        let request = await fetch(base_URL + item.login);
        let json = await request.json();
        localStorage.setItem("json_current_user", JSON.stringify(json)); // Armazena conteudo da API na memória local em forma de Json  
        navigate("/home")
    }
    
    return(
        <main className="following-card">
                        
                        <div className='following-avatar' onClick={setNewUser}>

                            <img src={item&&item.avatar_url} />
                           <h3> @ {item.login} </h3> <FaArrowRight style={{fontSize:"20px"}}/>
                        </div>
                    </main>

    );
}
export default FollowersCard;