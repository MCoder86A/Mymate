import './navbar.css'
import {logo_url, profile_demo} from '../../config/images'

const Navbar = ()=>{
    return(
        <div className="navbar">
            <div className="leftpane">
                <img className="brandlogo" src={logo_url} alt="" />
                <div className="search_tool">
                    <input className='search' type="text" placeholder='Search'/>
                </div>
            </div>
            <div className="profileIcon">
                <img className="plogo" src={profile_demo} alt="" />
            </div>
        </div>
    );
}

export default Navbar;