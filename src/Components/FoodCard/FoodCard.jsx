import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import Swal from "sweetalert2";
import { useLocation, useNavigate } from "react-router-dom";
import useAxiosSecore from "../../Hooks/useAxiosSecore";
import useCart from "../../Hooks/useCart";

const FoodCard = ({ item }) => {
  const { name, image, price, description, id } = item;
  const navigate = useNavigate();
  const { user } = useContext(AuthContext);
  const location = useLocation();
  const axiosSecore = useAxiosSecore();
  const [, refetch] = useCart();

  const handleAddToCart = () => {
    if (user && user.email) {
      const cartItem = {
        menuId: id,
        email: user.email,
        name,
        image,
        price,
      };
      axiosSecore.post("/carts", cartItem).then((res) => {
        console.log(res.data);
        if (res.data.insertedId) {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Food Added To Cart",
            showConfirmButton: false,
            timer: 1500,
          });
          refetch();
        }
      });
    } else {
      Swal.fire({
        title: "you Are Not Logged In",
        text: "Please login to add to the cart!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Login",
      }).then((result) => {
        if (result.isConfirmed) {
          navigate("/login", { state: { from: location } });
        }
      });
    }
  };
  return (
    <div className="card bg-base-100 shadow-xl">
      <figure>
        <img src={image} className="w-[300px] h-[200px]" alt="Shoes" />
      </figure>
      <p className="absolute inter right-0 mr-16 mt-4 px-4 rounded-md bg-slate-900 text-white">
        ${price}
      </p>
      <div className="card-body flex flex-col items-center">
        <h2 className="card-title inter">{name}</h2>
        <p>{description}</p>
        <div className="card-actions justify-end">
          <button
            onClick={handleAddToCart}
            className="btn btn-outline bg-slate-100 border-0 border-b-4 border-orange-400 mt-4"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
