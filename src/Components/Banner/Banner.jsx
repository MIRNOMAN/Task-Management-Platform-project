import Lottie from "lottie-react";
import banner from "../../assets/banner.json"
import { Link } from "react-router-dom";

const Banner = () => {
    return (
        <div className="flex items-center border  rounded-md mt-5 h-[500px]">
            <div className="w-1/2 p-7">
                <h1 className="text-5xl font-extrabold text-white">TASK <span className="text-[#EF7623]">MANAGEMENT</span></h1>
                <p className="mt-3 text-white">Task Manage Hub is a versatile project management tool that streamlines tasks, deadlines, and collaboration, fostering efficient team communication and project organization.</p>
                <Link to="/login">
                <button  type="button" className="text-white flex items-center mt-3 bg-gradient-to-br from-pink-500 to-orange-400 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Let’s Explore
                    <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                        <path stroke="currentColor" d="M1 5h12m0 0L9 1m4 4L9 9" />
                    </svg>
                </button>
                </Link>
            </div>
            <div className="w-1/2">
                <Lottie className="h-[400px]" animationData={banner} />
            </div>
        </div>
    );
};

export default Banner;