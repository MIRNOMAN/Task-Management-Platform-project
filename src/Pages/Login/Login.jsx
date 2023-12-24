import Lottie from "lottie-react";
import { useContext, useState } from "react";
import toast from "react-hot-toast";
import login from "../../assets/login.json";
import { FcGoogle } from "react-icons/fc";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
import github from "../../../public/github.png"
import github2 from "../../../public/github_picture.png"



const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const { signIn, googleSignIn,githubLogin } = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();

    const handleGoogle = () => {
        googleSignIn()
    .then(result => {
        console.log(result.user)
        
        navigate('/')
     navigate(location?.state ? location.state : '/');
    })
    .catch(err => {
        console.log(err)
    })

    }

    const handleToGithubLogin = () => {
        githubLogin()
            .then(() => {
                toast.success('You successfully signed in');
                navigate('/dashboard/DashboardHome')
            })
            .catch((err) => {
                console.log(err);
            })
    }

    const handleLogin = async (e) => {
        e.preventDefault();

        const toastId = toast.loading('Login in');

        try {
            await signIn(email, password);
            toast.success('Login successful', { id: toastId });
            navigate('/')
            navigate(location?.state ? location.state : '/');
        } catch (err) {
            toast.error(err.message, { id: toastId })
        }
    }


    return (
        <div className="mt-12">
        <div className="flex justify-center items-center lg:flex-row-reverse mx-auto">
            <div className="text-center lg:text-left lg:w-1/2">
                
            <Lottie className="h-screen" animationData={login}></Lottie>
            </div>
            <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl lg:w-1/2 bg-base-100">
                <form onSubmit={handleLogin} className="card-body">
                    <h1 className="text-3xl font-bold">Login now!</h1>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" onBlur={(e) => setEmail(e.target.value)} placeholder="email" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="password" onBlur={(e) => setPassword(e.target.value)} placeholder="password" className="input input-bordered" required />
                        <label className="label">
                            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                        </label>
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn btn-error text-white">Login</button>
                    </div>
                    <p>Don't Have An account?<Link className="text-red-500 font-semibold" to="/register">Register</Link></p>

                    <button onClick={handleGoogle} className="btn w-full btn-error text-white"><FcGoogle className="text-xl"></FcGoogle>Sign in With Google</button>
                    <button onClick={handleToGithubLogin} className="btn w-full btn-error text-white">
                     <img className="w-10 h-8" src={github2} alt="" />
                        Sign in With Github</button>
                </form>

            </div>

        </div>
    </div>
    );
};

export default Login;