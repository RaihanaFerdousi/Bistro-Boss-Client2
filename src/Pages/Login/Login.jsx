import {
  loadCaptchaEnginge,
  LoadCanvasTemplate,
  validateCaptcha,
} from "react-simple-captcha";
import { Helmet } from "react-helmet-async";
import img from "../../assets/authentication2 1.png";
import { FaGoogle } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FaGithub } from "react-icons/fa";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import Swal from "sweetalert2";
import SocialLogin from "../../Components/SocialLogin/SocialLogin";

const Login = () => {
  const [disabled, setDisabled] = useState(true);
  const navigate = useNavigate();
  const location = useLocation();
  const { signIn } = useContext(AuthContext);

  const from = location.state?.from?.pathname || "/";

  useEffect(() => {
    loadCaptchaEnginge(6);
  }, []);

  const handleLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);
    signIn(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Login successful",
          showConfirmButton: false,
          timer: 1500,
        });
        navigate(from, { replace: true });
      })
      .catch((error) => {
        console.error("Error signing in:", error);
        Swal.fire({
          icon: "error",
          title: "Login failed",
          text: error.message,
        });
      });
  };
  const handleValidateCaptcha = (e) => {
    const user_captcha_value = e.target.value;
    console.log("User captcha value:", user_captcha_value);
    if (validateCaptcha(user_captcha_value)) {
      console.log("Captcha validated successfully");
      setDisabled(false);
    } else {
      console.log("Captcha validation failed");
      setDisabled(true);
    }
  };

  return (
    <>
      <Helmet>
        <title>Bistro Boss | Login</title>
      </Helmet>
      <div className=" flex items-center py-7 justify-center">
        <div className="flex flex-col md:flex-row items-center h-[570px] bg-white shadow-lg rounded-lg p-6">
          {/* Left Section */}
          <div className="w-full md:w-1/2 flex justify-center">
            <img
              src={img}
              alt="Restaurant Illustration"
              className="rounded-lg"
            />
          </div>
          {/* Right Section */}
          <div className="w-full md:w-1/2 p-6">
            <h1 className="text-4xl font-bold text-center text-gray-800 mb-4">
              Login
            </h1>
            <form onSubmit={handleLogin} className=" space-y-4">
              {/* Email Input */}
              <div>
                <label className="block text-gray-700">Email</label>
                <input
                  type="email"
                  name="email"
                  placeholder="Type here"
                  className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-yellow-400"
                />
              </div>
              {/* Password Input */}
              <div>
                <label className="block text-gray-700">Password</label>
                <input
                  type="password"
                  name="password"
                  placeholder="Enter your password"
                  className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-yellow-400"
                />
              </div>
              {/* Captcha */}
              <div>
                <label className="block text-gray-700">Captcha</label>
                <LoadCanvasTemplate />
                <input
                  type="text"
                  name="captcha"
                  onBlur={handleValidateCaptcha}
                  placeholder="Type the captcha above"
                  className="w-full p-2 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-yellow-400"
                />
              </div>
              {/* Login Button */}
              <div className="mt-4">
                <input
                  type="submit"
                  value="Login"
                  disabled={disabled}
                  className="w-full p-2 btn rounded-md bg-[#D1A054] text-white font-semibold"
                />
              </div>
            </form>
            <div className="text-center mt-4">
              <p className="text-sm text-gray-600">
                New here?
                <Link
                  to="/signup"
                  className="text-yellow-500 font-semibold hover:underline"
                >
                  Create a New Account
                </Link>
              </p>
              <p className="mt-2 text-gray-600">Or login with</p>
              <div className="flex justify-center space-x-4 mt-2">
                {/* Social Login Buttons */}
                <SocialLogin />
                <button className="flex items-center space-x-2 bg-gray-100  btn rounded-full hover:bg-gray-200">
                  <FaGithub className="text-xl" />
                  <span className="text-sm font-medium">GitHub</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
