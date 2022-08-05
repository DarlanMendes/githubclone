import './RepositoryCard.css'
import { FaStar } from "react-icons/fa";
const RepositoryCard=({item})=>{
    return(
        <main className="repository-card">
                        <span>
                            {item.name}
                        </span>
                        <div>
                            <span className="repository-star">
                                <FaStar id="stargazer" />
                                {item.stargazers_count}
                            </span>
                        </div>
                    </main>

    );
}
export default RepositoryCard;