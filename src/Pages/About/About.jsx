import Lottie from "lottie-react";
import aboutImage from "../../assets/about.json"

const About = () => {
    return (
        <div>
            <div className="hero min-h-screen ">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <Lottie className="h-[600px]" animationData={aboutImage} />
                    <div>
                        <h1 className="text-5xl font-bold text-[#3789bc]">About Us!</h1>
                        <p className="py-6 text-white">Welcome to the Manage Hub, your go-to resource for effective organizational management. Explore insightful strategies, practical tips, and expert advice to enhance leadership skills and optimize team performance.</p>
                        <button type="button" className="text-white flex items-center mt-3 bg-gradient-to-br from-pink-500 to-orange-400 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"> Explore More
                            <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                <path stroke="currentColor" d="M1 5h12m0 0L9 1m4 4L9 9" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default About;