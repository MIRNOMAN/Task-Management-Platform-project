import { Outlet } from "react-router-dom";
import Navbar from "../Share/Navbar/Navbar";
import Footer from "../Share/Footer/Footer";


const MainLayout = () => {
    return (
        <div className="bg-cover bg-fixed" style={{backgroundImage: 'url(https://i.ibb.co/yV4Rd3j/6070859.jpg)'}} >
            <div className="max-w-5xl mx-auto">
            <Navbar></Navbar>
            <Outlet></Outlet>
            </div>
            
            <Footer></Footer>
        </div>
    );
};

export default MainLayout;