import { useQuery } from "@tanstack/react-query";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import { GoTrash } from "react-icons/go";
import useAxiosSecore from "../../../Hooks/useAxiosSecore";
import { FaUsers } from "react-icons/fa6";
import Swal from "sweetalert2";

const AllUsers = () => {
  const axiosSecure = useAxiosSecore();

  const { data: users = [], refetch } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await axiosSecure.get("/users");
      return res.data;
    },
  });

  const handleMakeAdmin = (user) => {
    axiosSecure.patch(`/users/admin/${user._id}`).then((res) => {
      console.log(res.data);
      if (res.data.modifiedCount > 0) {
        refetch();
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: `${user.name} is an Admin Now!`,
          showConfirmButton: false,
          timer: 1500,
        });
      }
    });
  };

  const handleDeleteUser = (user) => {
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
        axiosSecure.delete(`/users/${user._id}`).then((res) => {
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
      <SectionTitle heading={"MANAGE ALL USERS"} subHeading={"How many??"} />
      <div className="mt-10 mx-10 bg-white p-5">
        <div>
          <h1 className="text-3xl cinzel font-semibold">
            Total Users: {users.length}
          </h1>
        </div>
        <div>
          <div className="overflow-x-auto p-4">
            <table className="table-auto w-full border-collapse border border-gray-300">
              <thead className="bg-[#B08448] text-white rounded-t-lg">
                <tr>
                  <th className="p-4 text-left"></th>
                  <th className="p-4 text-left">Name</th>
                  <th className="p-4 text-left">Email</th>
                  <th className="p-4 text-left">Role</th>
                  <th className="p-4 text-left">Action</th>
                </tr>
              </thead>
              <tbody>
                {users.map((user, index) => (
                  <tr key={user._id} className="border-b border-gray-300">
                    <td className="p-4">{index + 1}</td>
                    <td className="p-4">{user?.name}</td>
                    <td className="p-4">{user.email}</td>
                    <td className="p-4">
                      {user.role === "admin" ? (
                        "Admin"
                      ) : (
                        <button
                          onClick={() => handleMakeAdmin(user)}
                          className="btn bg-[#B08448] text-white rounded"
                        >
                          <FaUsers />
                        </button>
                      )}
                    </td>
                    <td className="p-4">
                      <button
                        onClick={() => handleDeleteUser(user)}
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

export default AllUsers;
