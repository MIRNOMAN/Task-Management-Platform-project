import Lottie from "lottie-react";
import errorpage from "../../assets/error.json"

const ErrorPage = () => {
    return (
        <div>
            <Lottie className="h-screen" animationData={errorpage}  />
           
        </div>
    );
};

export default ErrorPage;