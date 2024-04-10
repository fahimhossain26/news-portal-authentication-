import { Link, NavLink } from "react-router-dom";
import userDefoutPic from "./../../../assets/user.png";
import { useContext } from "react";
import { AuthContext } from "../../../provider/AuthProvider";


const Navber = () => {

  const { user,logout }=useContext(AuthContext);

  const handelSignout=()=>{
 logout()
 .then()
 .catch()

  }


    const navLinks= <>

   <button className="btn btn-primary  bg-blue-200"> <li><NavLink to="/">Home</NavLink></li></button>
   <button className="btn btn-primary ml-2  bg-blue-200">  <li><NavLink to='/about'>About</NavLink></li></button>
   <button className="btn btn-primary ml-2  bg-blue-200" ><li><NavLink to='/career'>Career</NavLink></li></button>
            
             
             
    </>
    return (
        <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </div>
            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
              {navLinks}
            </ul>
          </div>
  
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            {navLinks}
          </ul>
        </div>

        
        <div className="navbar-end">

            <label>
            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
        <div className="w-10 rounded-full">
          <img alt="Tailwind CSS Navbar component" src={userDefoutPic} />
        </div>
        </div>

            </label>
          {
            user ? 
             <button onClick={handelSignout} className="btn" >SignOut</button>
            :
            <Link to="/login">
            <button   className="btn" >Login</button>
            </Link>
          }
        
        </div>
      </div>
    );
};

export default Navber;