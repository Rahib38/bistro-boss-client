import { useContext, useEffect,  useState } from "react";
import {
  loadCaptchaEnginge,
  LoadCanvasTemplate,
  validateCaptcha,
} from "react-simple-captcha";
import { AuthContext } from "../Provider/AuthProvider";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const Login = () => {
  const { signIn } = useContext(AuthContext);
console.log(signIn);
  const [disable, setDisable] = useState(true);
  const navigate = useNavigate()
  const location = useLocation()
  const from = location.state?.from?.pathname || '/'
  useEffect(() => {
    loadCaptchaEnginge(6);
  }, []);
  const handleLogin = (e) => {
    e.preventDefault();
    const from = e.target;
    const email = from.email.value;
    const password = from.password.value;
    // console.log(email, password);
    signIn(email, password)
      .then((result) => {
      const users = result.user;
      console.log(users);
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "User Login SuccessFully",
        showConfirmButton: false,
        timer: 1500,
      });
        navigate(from, { replace:true})
    });
  };
  const handleValidateCaptch = (e) => {
    const user_captcha_value = e.target.value;
    if (validateCaptcha(user_captcha_value)) {
      setDisable(false);
    } else {
      setDisable(true);
    }
  };
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center md:1/2 lg:text-left">
          <h1 className="text-5xl font-bold">Login now!</h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
        </div>
        <div className="card  md:w-1/2 max-w-sm shadow-2xl bg-base-100">
          <form onSubmit={handleLogin} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                placeholder="password"
                name="password"
                className="input input-bordered"
                required
              />
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control">
              <label className="label">
                <LoadCanvasTemplate />
              </label>
              <input
                onBlur={handleValidateCaptch}
               
                type="text"
                placeholder="type the text above"
                name="captcha"
                className="input input-bordered"
                required
              />
       
            </div>
            <div className="form-control mt-6">
              <button disabled={disable} className="btn btn-primary">
                Login
              </button>
            </div>
          </form>
          <p>
            <small>
              New Here?<Link to="/signUp">Create an Account</Link>
            </small>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
