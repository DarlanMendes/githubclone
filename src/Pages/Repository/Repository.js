import { useEffect, useState } from "react";
import { base_URL } from "../Login/Login";
import './Repository.css'
import { FaStar } from "react-icons/fa";

const Repository = ({ json }) => {
    const [jsonRepos, setJsonRepos] = useState([]);
    const fetchUserRepository = async () => {
        let resultUserRepository = await fetch(base_URL + json.login + '/repos');
        let jsonRes = await resultUserRepository.json();
        setJsonRepos(jsonRes);
    }
    useEffect(() => {
        fetchUserRepository();
    })
    return (
        <div className="repository">
            <div className="repository-container-card">


                {jsonRepos && jsonRepos.map((item, key) => (
                    <main key={key} className="repository-card">
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
                ))}
            </div>
        </div>
    )

}
export default Repository;