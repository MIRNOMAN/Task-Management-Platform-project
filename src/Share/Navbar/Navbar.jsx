import { NavLink } from "react-router-dom";
import logo from "../../assets/icon.png"

const Navbar = () => {
    const navlinks = <>
    <li><NavLink className="text-white font-bold text-base" to="/">Home</NavLink></li>
    <li><NavLink className="text-white font-bold text-base" to="/about">About</NavLink></li>
    <li><NavLink className="text-white font-bold text-base" to="/contact">Contact</NavLink></li>
    <li><NavLink className="text-white font-bold text-base" to="/login">Login</NavLink></li>
    </>
    return (
        <div>
            <div className="navbar">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </div>
      <ul tabIndex={0} className="menu menu-sm  dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
        {navlinks}
      </ul>
    </div>
   <div className="flex items-center">
   <img className="h-[60px] w-[70px]" src={logo} alt="" />
   <p className="text-3xl font-bold text-white">Manage <span className="text-[#EF7623]">Hub</span></p>
   </div>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal space-x-2 px-1">
     {navlinks}
    </ul>
  </div>
  <div className="navbar-end">
  <div className="avatar">
    <div className="w-12">
      <img className="rounded-full" src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
    </div>
  </div>
  </div>
</div>
        </div>
    );
};

export default Navbar;