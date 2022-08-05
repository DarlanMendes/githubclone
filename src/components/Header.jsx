import './Header.css'
import {FaArrowRight} from 'react-icons/fa'
const Header =({json, jsonRepos, jsonFollowers, jsonFollowing})=>{

    
    const getOutAppApi =()=>{
        localStorage.clear();
        window.location.pathname='/'

    }


    return(
        <div className='header-containers'>
           {json&& 
           < div className="header-container-home">
           <h4>#{json.login}</h4>
           <div className="header-container-home-button">
           <button onClick={getOutAppApi}><span>Sair</span><FaArrowRight style={{fontSize:"15px", color:"#933"}}/></button>
           </div>
           </div>
           
          
           }
           
           
          
        </div>
    )
}
export default Header;