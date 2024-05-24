import { useContext } from "react";
import { Helmet } from "react-helmet-async";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../Provider/AuthProvider";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const navigate= useNavigate()
    const {createUser,updateUserProfile,reset}=useContext(AuthContext)
     const {
       register,
       handleSubmit,
     
       formState: { errors },
     } = useForm();
    const onSubmit = (data) => {
        createUser(data.email, data.password)
            .then(result => {
                const loggedUser = result.user
              console.log(loggedUser);
              updateUserProfile(data.name, data.photoURL)
                .then(() => {
                  console.log('user profile info update');
                  reset()
                      Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: "User create SuccessFully",
                        showConfirmButton: false,
                        timer: 1500,
                      });
                  navigate('/')
                })
              .catch(error=>console.log(error))
        })
        console.log(data);
  }
//   console.log(watch("example"));
    return (
      <>
        <Helmet>
          <title>Bistro Boss | Sign Up</title>
        </Helmet>
        <div className="hero min-h-screen bg-base-200">
          <div className="hero-content flex-col lg:flex-row-reverse">
            <div className="text-center lg:text-left">
              <h1 className="text-5xl font-bold">Login now!</h1>
              <p className="py-6">
                Provident cupiditate voluptatem et in. Quaerat fugiat ut
                assumenda excepturi exercitationem quasi. In deleniti eaque aut
                repudiandae et a id nisi.
              </p>
            </div>
            <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
              <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Name</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    placeholder="name"
                    className="input input-bordered"
                    {...register("name", { required: true })}
                  />
                  {errors.name && (
                    <span className="text-red-400 font-semibold">
                      This field is required
                    </span>
                  )}
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Photo URL</span>
                  </label>
                  <input
                    type="text"
                    name="photoURL"
                    placeholder="Photo URL"
                    className="input input-bordered"
                    {...register("photoURL", { required: true })}
                  />
                  {errors.photoURL && (
                    <span className="text-red-400 font-semibold">
                      This field is required
                    </span>
                  )}
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    placeholder="email"
                    className="input input-bordered"
                    {...register("email", { required: true })}
                  />
                  {errors.email && (
                    <span className="text-red-400 font-semibold">
                      This field is required
                    </span>
                  )}
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Password</span>
                  </label>
                  <input
                    type="password"
                    name="password"
                    placeholder="password"
                    className="input input-bordered"
                    {...register("password", {
                      required: true,
                      min: 6,
                      max: 12,
                      pattern: /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)/,
                    })}
                  />
                  {errors.password?.type === "required" && (
                    <span className="text-red-400 font-semibold">
                      This Password is required
                    </span>
                  )}
                  {errors.password?.type === "min" && (
                    <span className="text-red-400 font-semibold">
                      Password must be 6 characters
                    </span>
                  )}
                  {errors.password?.type === "max" && (
                    <span className="text-red-400 font-semibold">
                      Password must be less 15 characters
                    </span>
                  )}
                  {errors.password?.type === "pattern" && (
                    <span className="text-red-400 font-semibold">
                      Password must have one uppercase one lowerCase one digit
                    </span>
                  )}

                  <label className="label">
                    <a href="#" className="label-text-alt link link-hover">
                      Forgot password?
                    </a>
                  </label>
                </div>
                <div className="form-control mt-6">
                  <button className="btn btn-primary">Sign Up</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </>
    );
};

export default SignUp;
