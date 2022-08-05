import { useEffect, useState } from "react";
import { base_URL } from "../Login/Login";
import './Repository.css'
import RepositoryCard from "../../components/Repository";
import { FaStar } from "react-icons/fa";

const Repository = ({ json,jsonRepos,setJsonRepos }) => {
    

    const fetchUserRepository = async () => {
        let resultUserRepository = await fetch(base_URL + json.login + '/repos');
        let jsonRes = await resultUserRepository.json();
        setJsonRepos(jsonRes);
        localStorage.setItem('jsonRepos', JSON.stringify(jsonRepos));
    }
    useEffect(() => {
        fetchUserRepository();
    })
    return (
        <div className="repository">
            <div className="repository-container-card">


                {jsonRepos && jsonRepos.map((item, key) => (
                    <RepositoryCard key={key} item={item}/>
                ))}
            </div>
        </div>
    )

}
export default Repository;