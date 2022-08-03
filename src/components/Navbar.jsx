
import './Navbar.css'
import {Link} from 'react-router-dom';

const Navbar=()=>{
    return(
        <div className='navbar'>
            <ul>
                <li><Link to="/home"> Home</Link></li>
                <li><Link to="/repository"> Repository</Link> </li>
                <li><Link to="/followers"> Followers </Link></li>
                <li><Link to="/following"> Following</Link> </li>
            </ul>
        </div>
    )
}
export default Navbar;