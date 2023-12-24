import { updateProfile } from "firebase/auth";
import { useContext } from "react";
import toast from "react-hot-toast";
import { AuthContext } from "../../Provider/AuthProvider";
import { ToastContainer } from "react-toastify";
import { Link } from "react-router-dom";


const Register = () => {
    const { createUser } = useContext(AuthContext)

    const handleregister = (e) => {
      e.preventDefault();
      const form = new FormData(e.currentTarget)
      const name = form.get('name');
      const photo = form.get('photo');
      const email = form.get('email');
      const password = form.get('password');
      console.log(name,photo, email, password)
  
      if (!/^(?=.*?[A-Z])(?=.*?[#?!@$%^&*-]).{6,}$/.test(password)) {
        return toast('Minimum six characters, At least one upper case and  one special character')
      }
      createUser(email, password)
        .then(result => {
          console.log(result.user)
          toast('successfully Register')
          e.target.reset();
  
          updateProfile(result.user, {
            displayName: name,
            photoURL: photo,
          })
            .then(() => {
              console.log('profile updated successfully')
            })
            .catch()
        })
  
  
        .catch(err => {
          console.log(err)
        })
    }
  
    return (
        <div>
            <div className="hero min-h-screen py-16 ">

<div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
  <form onSubmit={handleregister} className="card-body">
    <h1 className="text-3xl font-bold">Register now!</h1>
    <div className="form-control">
      <label className="label">
        <span className="label-text">Name</span>
      </label>
      <input type="text" name="name" placeholder="Name" className="input input-bordered" required />
    </div>
    <div className="form-control">
      <label className="label">
        <span className="label-text">Photo</span>
      </label>
      <input type="text" name="photo" placeholder="Photo URL" className="input input-bordered" required />
    </div>
    <div className="form-control">
      <label className="label">
        <span className="label-text">Email</span>
      </label>
      <input type="email" name="email" placeholder="email" className="input input-bordered" required />
    </div>
    <div className="form-control">
      <label className="label">
        <span className="label-text">Password</span>
      </label>
      <input type="password" name="password" placeholder="password" className="input input-bordered" required />
      <label className="label">
        <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
      </label>
    </div>
    <div className="form-control mt-6">
      <button className="btn btn-primary">Register</button>
    </div>
    <p>Already haven't account?<Link className="text-red-500 font-semibold" to="/login">Sign in</Link></p>
  </form>
</div>
</div>
<ToastContainer />
        </div>
    );
};

export default Register;