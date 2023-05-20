import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../Provider/AuthProvider";
import { Tooltip } from 'react-tooltip'

const Header = () => {

    const { user, logOut } = useContext(AuthContext);


    const handleLogOut = () => {
        logOut()
            .then()
            .catch(error => console.log(error));
    }



    return (
        <div className="navbar bg--100 px-5">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        <li>
                            <Link to='/'>Home</Link>
                        </li>

                        <li>
                            <Link to='/allToys'>All Toys</Link>
                        </li>
                        <li>
                            <Link to='/myToys'>My Toys</Link>
                        </li>
                        <li>
                            <Link to='/addToy'>Add Toy</Link>
                        </li>

                        <li>
                            <Link to='/blog'>Blog</Link>
                        </li>
                    </ul>
                </div>
                <Link to='/'>
                    <img className="w-[220px]" src="https://i.ibb.co/9H465Dg/vite-removebg-preview.png" alt="" />
                </Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    <li>
                        <Link to='/'>Home</Link>
                    </li>

                    <li>
                        <Link to='/allToys'>AllToys</Link>
                    </li>
                    <li>
                        <Link to='/myToys'>My Toys</Link>
                    </li>
                    <li>
                        <Link to='/addToy'>Add Toy</Link>
                    </li>

                    <li>
                        <Link to='/blog'>Blog</Link>
                    </li>
                </ul>
            </div>
            <div className="navbar-end">

                {
                    user ?
                        <div className="flex items-center justify-center gap-5 ">
                            <div className="avatar">
                                <div className="w-8 lg:w-12 rounded">

                                    <div data-tooltip-id="my-tooltip" data-tooltip-content={user.displayName}>
                                        <img src={user.photoURL} alt="Tailwind-CSS-Avatar-component"
                                        />
                                        <Tooltip id="my-tooltip" />
                                    </div>
                                </div>
                            </div>
                            <button className="btn"
                                onClick={handleLogOut}
                            >Logout</button>
                        </div> :
                        <Link to='login' className="btn">Login</Link>
                }
            </div>
        </div>
    );
};

export default Header;