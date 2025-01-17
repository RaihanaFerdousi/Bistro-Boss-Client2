import Swal from "sweetalert2";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import useAxiosSecore from "../../../Hooks/useAxiosSecore";
import useMenu from "../../../Hooks/useMenu";
import { GoTrash } from "react-icons/go";
import { LuFilePenLine } from "react-icons/lu";
import { Link } from "react-router-dom";

const ManageItems = () => {
  const [menu, refetch] = useMenu();
  const axiosSecure = useAxiosSecore();

  const handleDeleteItem = async (item) => {
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
        axiosSecure.delete(`/menu/${item._id}`).then((res) => {
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
      <div className="bg-[#F6F6F6]">
        <SectionTitle heading={"MANAGE ALL USERS"} subHeading={"Hurry Up!"} />
        <div className="mt-10 mx-10 bg-white p-5">
          <div>
            <h1 className="text-3xl cinzel font-semibold">
              Total Users: {menu.length}
            </h1>
          </div>
          <div>
            <div className="overflow-x-auto p-4">
              <table className="table-auto w-full border-collapse border border-gray-300">
                <thead className="bg-[#B08448] text-white rounded-t-lg">
                  <tr>
                    <th className="p-4 text-left"></th>
                    <th className="p-4 text-left">Image</th>
                    <th className="p-4 text-left">Item Name</th>
                    <th className="p-4 text-left">Price</th>
                    <th className="p-4 text-left">Update</th>
                    <th className="p-4 text-left">Delete</th>
                  </tr>
                </thead>
                <tbody>
                  {menu.map((item, index) => (
                    <tr key={item._id} className="border-b border-gray-300">
                      <td className="p-4">{index + 1}</td>
                      <td className="p-4">
                        <img
                          src={item.image}
                          className="w-16 rounded-full h-16"
                          alt=""
                        />
                      </td>
                      <td className="p-4">{item.name}</td>
                      <td className="p-4">{item.price}</td>
                      <td className="p-4">
                        <Link>
                          <button className="btn bg-[#B08448] text-white rounded">
                            <LuFilePenLine />
                          </button>
                        </Link>
                      </td>
                      <td className="p-4">
                        <button
                          onClick={() => handleDeleteItem(item)}
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
    </div>
  );
};

export default ManageItems;
