import { useEffect } from "react";
import './Followers.css';
import { base_URL } from "../Login/Login";
import FollowersCard from "../../components/FollowersCard";






const Followers = ({ json, jsonFollowers, setJsonFollowers }) => {

    const fetchUserFollowers = async () => {
    
        let resultUserFollowers = await fetch(base_URL + json.login + '/followers');
        let jsonFollowers = await resultUserFollowers.json();
        setJsonFollowers(jsonFollowers);
        localStorage.setItem('jsonFollowers', JSON.stringify(jsonFollowers));
       
    }


    useEffect(() => {
        if(!json){
            window.location.pathname='/'
        }
        fetchUserFollowers();
       
    }, [])


    return (
        <div className="followers">
           
           <div className="followers-container">
                {jsonFollowers && jsonFollowers.map((item, key) => (
                    <FollowersCard key={key} item={item} />
                ))}
            </div>

        </div>
    )
}
export default Followers;