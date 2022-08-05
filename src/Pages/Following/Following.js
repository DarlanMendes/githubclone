import { useEffect } from "react";
import './Following.css';
import { base_URL } from "../Login/Login";
import FollowingCard from "../../components/FollowingCard";

const Following = ({ json, jsonFollowing, setJsonFollowing }) => {
    const fetchUserFollowing = async () => {
        let resultUserFollowing = await fetch(base_URL + json.login + '/following');
        let jsonFollowing = await resultUserFollowing.json();
        setJsonFollowing(jsonFollowing);
        localStorage.setItem('jsonFollowing', JSON.stringify(jsonFollowing));
    }


    useEffect(() => {
        if(!json){
            window.location.pathname='/'
        }
        fetchUserFollowing();
        
    }, [])


    return (
        <div className="following">
            <div className="following-container">

                {jsonFollowing && jsonFollowing.map((item, key) => (
                    <FollowingCard key={key} item={item} />
                ))}

            </div>


        </div>
    )
}
export default Following;