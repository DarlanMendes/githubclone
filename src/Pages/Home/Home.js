import { useEffect } from "react";
import './Home.css'
import github from '../../Assets/img/github.png'
const Home = ({ json, setJson }) => {



    useEffect(() => {
        
        setJson(JSON.parse(localStorage.getItem("json_current_user")));
        if(!localStorage.getItem("json_current_user")){
            window.location.pathname='/';
        }
        
    }, [])
    return (
        <div className="home">
            <img src={json ? json.avatar_url : github} />

            
            <div className="glass-table-1"></div>
            <h1>{json?.login}</h1>
            
            


            <div className="glass-table-2"></div>
            <ul>
                <li><h1>{json ? json.followers : 0}</h1><h4> Seguidores</h4></li>
                <li><h1>{json ? json.following : 0}</h1><h4>Seguindo</h4></li>
                <li> <h1>{json ? json.public_repos : 0}</h1><h4>Repositórios</h4></li>
            </ul>


            <div className="home-bio">
                <h2> Bio: </h2>
                <p> "{json ? json.blog===''&&"Nenhuma descrição disponível." : "Nenhuma descrição disponível"} "</p>
            </div>

        </div>

    )

}
export default Home;