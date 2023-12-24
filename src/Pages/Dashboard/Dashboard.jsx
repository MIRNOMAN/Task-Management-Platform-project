import { useContext } from "react";
import { Link, NavLink, Outlet } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
import { IoHome } from "react-icons/io5";
import { MdTask } from "react-icons/md";

const Dashboard = () => {
    const { user } = useContext(AuthContext)
    return (
        <div>
            <div className="flex ">
            <div className="w-64 min-h-screen bg-[#3789bc]">
                <div className="avatar flex flex-col gap-5 items-center justify-center mt-10 md:mt-24">
                    <div className="w-20 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                        <img src={user?.photoURL} />

                    </div>
                    <p className="text-white md:text-2xl mb-3">{user?.displayName}</p>
                    <ul className="bg-purple-400 rounded-lg w-28 md:w-56 text-black space-y-2 md:space-y-4 py-2 md:px-4 mb-5">
                    <li><NavLink className='flex justify-center items-center gap-3' to='/dashboard/dashboardHome'>
                            
                            <p className="text-xl  md:text-xl">User Home</p>
                        </NavLink></li>
                        <hr />
                        <li><NavLink className='flex justify-center  items-center gap-3' to='/dashboard/addTask'>
                            
                            <p className="text-xl md:text-xl">Add Task</p>
                        </NavLink></li>
                    </ul>
                </div>
                <hr />
                <Link to='/'>
                    <button className="btn btn-primary py-3 bg-gradient-to-r from-blue-400 to-blue-700 font-bold text-xl rounded-md shadow-md hover:from-blue-600 hover:to-blue-900 transition-all duration-300 text-black uppercase md:ml-2  md:w-60 mt-10"><IoHome className="mb-1" />HOME</button></Link>
            </div>
            <div className="flex-1 p-8">
                <Outlet></Outlet>
            </div>
        </div>
        </div>
    );
};

export default Dashboard;