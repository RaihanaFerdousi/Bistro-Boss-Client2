import { FaGoogle } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";

const SocialLogin = () => {
  const { googleSignIn } = useContext(AuthContext);
  const axiosPublic = useAxiosPublic();
  const navigate = useNavigate();

  const handleGoogleSignIn = () => {
    googleSignIn().then((result) => {
      console.log(result.user);
      const userInfo = {
        email: result.user?.email,
        name: result.user?.displayName,
      };
      axiosPublic.post("/users", userInfo).then((res) => {
        console.log(res.data);
        navigate("/");
      });
    });
  };
  return (
    <div>
      <button
        onClick={handleGoogleSignIn}
        className="flex items-center space-x-2 p-2 bg-gray-100 btn rounded-full hover:bg-gray-200"
      >
        <FaGoogle className=" text-xl" />
        <span className="text-sm font-medium">Google</span>
      </button>
    </div>
  );
};

export default SocialLogin;
