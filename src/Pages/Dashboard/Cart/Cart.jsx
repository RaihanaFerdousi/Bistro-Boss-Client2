import useCart from "../../../Hooks/useCart";
import { GoTrash } from "react-icons/go";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../Hooks/useAxiosSecore";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";

const Cart = () => {
  const [cart, refetch] = useCart();
  const totalPrice = cart.reduce((total, item) => total + item.price, 0);
  const axiosSecure = useAxiosSecure();

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure.delete(`/carts/${id}`).then((res) => {
          if (res.data.deletedCount > 0) {
            refetch();
            Swal.fire({
              title: "Deleted!",
              text: "Your file has been deleted.",
              icon: "success",
            });
          }
        });
      }
    });
  };

  return (
    <div>
      <SectionTitle heading={'WANNA ADD MORE?'} subHeading={'My Cart'}/>
      <div className="mt-10 mx-10 bg-white p-5">
        <div className="flex items-center justify-between">
          <h1 className="text-3xl cinzel font-semibold">
            Total Orders: {cart.length}
          </h1>
          <h1 className="text-3xl cinzel font-semibold">
            Total Price: ${totalPrice}
          </h1>
          <button className="text-white cinzel bg-[#D1A054] btn">Pay</button>
        </div>
        <div>
          <div className="overflow-x-auto p-4">
            <table className="table-auto w-full border-collapse border border-gray-300">
              <thead className="bg-[#B08448] text-white rounded-t-lg">
                <tr>
                  <th className="p-4 text-left">Item Image</th>
                  <th className="p-4 text-left">Item Name</th>
                  <th className="p-4 text-left">Price</th>
                  <th className="p-4 text-left">Action</th>
                </tr>
              </thead>
              <tbody>
                {cart.map((item) => (
                  <tr key={item._id} className="border-b border-gray-300">
                    <td className="p-4">
                      <div className="w-16 h-16 bg-gray-200 flex items-center justify-center">
                        {item.image ? (
                          <img
                            src={item.image}
                            alt={item.name}
                            className="w-full rounded-lg h-full object-cover"
                          />
                        ) : (
                          <span className="text-gray-500">No Image</span>
                        )}
                      </div>
                    </td>
                    <td className="p-4">{item.name}</td>
                    <td className="p-4">${item.price.toFixed(2)}</td>
                    <td className="p-4">
                      <button
                        onClick={() => handleDelete(item._id)}
                        className="btn text-black rounded hover:text-red"
                      >
                        <GoTrash />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
