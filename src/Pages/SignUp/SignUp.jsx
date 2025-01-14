import React, { useContext } from "react";
import { Helmet } from "react-helmet-async";
import img from "../../assets/authentication2 1.png";
import { Link, useNavigate } from "react-router-dom";
import { FaGoogle } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../providers/AuthProvider";
import Swal from "sweetalert2";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import SocialLogin from "../../Components/SocialLogin/SocialLogin";

const SignUp = () => {
  const {
    register,
    reset,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const { createUser, updateUserProfile } = useContext(AuthContext);
  const axiosPublic = useAxiosPublic();
  const navigate = useNavigate();

  const onSubmit = (data) => {
    createUser(data.email, data.password).then((result) => {
      const loggedUser = result.user;
      console.log(loggedUser);
      updateUserProfile(data.name, data.photoURL)
        .then(() => {
          const userInfo = {
            name: data.name,
            email: data.email,
          };
          axiosPublic.post("/users", userInfo).then((res) => {
            if (res.data.insertedId) {
              reset();
              Swal.fire({
                title: "Your have successfully Signed Up",
                showClass: {
                  popup: `
              animate__animated
              animate__fadeInUp
              animate__faster
            `,
                },
                hideClass: {
                  popup: `
              animate__animated
              animate__fadeOutDown
              animate__faster
            `,
                },
              });
              navigate("/");
            }
          });
        })
        .catch((err) => console.log(err));
    });
  };

  console.log(watch("example"));
  return (
    <>
      <Helmet>
        <title>Bistro Boss | Sign Up</title>
      </Helmet>
      <div className=" flex items-center py-7 justify-center">
        <div className="flex flex-col md:flex-row items-center h-[570px] bg-white shadow-lg rounded-lg p-6">
          <div className="w-full md:w-1/2 p-6">
            <h1 className="text-4xl font-bold text-center text-gray-800 mb-4">
              Sign Up
            </h1>
            <form onSubmit={handleSubmit(onSubmit)} className=" space-y-4">
              {/* Email Input */}
              <div>
                <label className="block text-gray-700">Name</label>
                <input
                  type="text"
                  {...register("name", { required: "This field is required" })}
                  name="name"
                  placeholder="Type here"
                  className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-yellow-400"
                />
                {errors.name && (
                  <span className="text-red-500">{errors.name.message}</span>
                )}
              </div>
              <div>
                <label className="block text-gray-700">Photo Url</label>
                <input
                  type="url"
                  {...register("photoURL", {
                    required: "This field is required",
                  })}
                  name="photoURL"
                  placeholder="Photo Url"
                  className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-yellow-400"
                />
                {errors.photoURL && (
                  <span className="text-red-500">
                    {errors.photoURL.message}
                  </span>
                )}
              </div>
              <div>
                <label className="block text-gray-700">Email</label>
                <input
                  type="email"
                  {...register("email")}
                  name="email"
                  placeholder="Type here"
                  className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-yellow-400"
                />
              </div>
              {/* Password Input */}
              <div>
                <label htmlFor="password" className="block text-gray-700">
                  Password
                </label>
                <input
                  id="password"
                  type="password"
                  {...register("password", {
                    required: "Password is required",
                    minLength: {
                      value: 6,
                      message: "Password must be at least 6 characters",
                    },
                    maxLength: {
                      value: 30,
                      message: "Password must not exceed 30 characters",
                    },
                    pattern: {
                      value:
                        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
                      message:
                        "Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character",
                    },
                  })}
                  placeholder="Enter your password"
                  className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-yellow-400"
                />
                {errors.password && (
                  <span className="text-red-500">
                    {errors.password.message}
                  </span>
                )}
              </div>

              {/* Login Button */}
              <div className="mt-4">
                <input
                  type="submit"
                  value="Sign Up"
                  className="w-full p-2 rounded-md bg-[#D1A054] text-white font-semibold"
                />
              </div>
            </form>
            <div className="text-center mt-4">
              <p className="text-sm text-gray-600">
                Already have an account?
                <Link
                  to="/login"
                  className="text-yellow-500 font-semibold hover:underline"
                >
                  Login
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
          {/* Right Section */}
          <div className="w-full md:w-1/2 flex justify-center">
            <img
              src={img}
              alt="Restaurant Illustration"
              className="rounded-lg"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUp;
