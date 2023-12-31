import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";
import { useContext } from "react";


const PrivateRoute = ({children}) => {
    const {user , loading} = useContext(AuthContext);
    const location = useLocation();
    
    if(loading){
        return <div className="flex justify-center"><span className="loading loading-spinner loading-lg"></span></div>
    }

    if (!loading && !user?.email){
        return <Navigate state={location.pathname} to="/login"></Navigate>;
    
    }
     


    return children;
};

export default PrivateRoute;
