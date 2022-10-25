import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle } from '@fortawesome/free-solid-svg-icons';

const Navbar = ()=>{
    return (
        <nav className="flex justify-between bg-indigo-500 px-10 py-5">
            <div className="text-white text-xl">Dashboard</div>
            <div className="text-xl">
                <FontAwesomeIcon icon={faUserCircle} className="text-white text-3xl" />
            </div>
        </nav>
    )
}

export default Navbar;