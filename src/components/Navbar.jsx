import user from './img/user.svg'

const Navbar = ()=>{
    return (
        <nav className="flex justify-between bg-indigo-500 px-10 py-5">
            <div className="text-white text-xl">Dashboard</div>
            <div className="text-xl">
                <img src={user} className="text-white w-10" alt="" />
            </div>
        </nav>
    )
}

export default Navbar;