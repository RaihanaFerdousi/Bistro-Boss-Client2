import { FaCartShopping } from "react-icons/fa6";
import { FaHouse } from "react-icons/fa6";
import { FaCalendarDays } from "react-icons/fa6";
import { GiWallet } from "react-icons/gi";
import { FaListAlt } from "react-icons/fa";
import { IoIosMenu } from "react-icons/io";
import { BsHandbagFill } from "react-icons/bs";
import { ImSpoonKnife } from "react-icons/im";
import { SlEnvolope } from "react-icons/sl";
import { TfiMenuAlt } from "react-icons/tfi";
import { FaBookJournalWhills } from "react-icons/fa6";
import { FaUsers } from "react-icons/fa6";
import star from "../assets/icon/Group 116.png";
import { NavLink, Outlet } from "react-router-dom";
import useCart from "../Hooks/useCart";
import useAdmin from "../Hooks/useAdmin";

const DashBored = () => {
  const [cart] = useCart();

  const [isAdmin] = useAdmin();

  return (
    <div className="flex">
      <div className="bg-[#B08448] w-64 p-6 flex flex-col justify-between">
        {/* Top Section */}
        <div>
          <NavLink to="/" className="text-black text-[25px] cinzel font-bold">
            <span className="whitespace-nowrap">Bistro Boss</span> <br />
            <span className="tracking-[0.3rem] font-thin text-xl">
              Restaurant
            </span>
          </NavLink>
          <ul className="space-y-6 mt-5 cinzel h-[220px]">
            {isAdmin ? (
              <>
                <NavLink className="flex items-center space-x-2 text-black hover:text-white">
                  <FaHouse />
                  <span>Admin Home</span>
                </NavLink>
                <NavLink
                  to="/dashboard/addItems"
                  className="flex items-center space-x-2 text-black hover:text-white"
                >
                  <ImSpoonKnife />
                  <span>Add Items</span>
                </NavLink>
                <NavLink
                  to="/dashboard/manageItems"
                  className="flex items-center space-x-2 text-black hover:text-white"
                >
                  <TfiMenuAlt />
                  <span>Manage Itmes</span>
                </NavLink>
                <NavLink className="flex items-center space-x-2 text-black hover:text-white">
                  <FaBookJournalWhills />
                  <span>Manage bookings</span>
                </NavLink>
                <NavLink
                  to="/dashboard/allUsers"
                  className="flex items-center space-x-2 text-black hover:text-white"
                >
                  <FaUsers />
                  <span>All Users</span>
                </NavLink>
              </>
            ) : (
              <>
                <NavLink className="flex items-center space-x-2 text-black hover:text-white">
                  <FaHouse />
                  <span>User Home</span>
                </NavLink>
                <NavLink className="flex items-center space-x-2 text-black hover:text-white">
                  <FaCalendarDays />
                  <span>Reservation</span>
                </NavLink>
                <NavLink className="flex items-center space-x-2 text-black hover:text-white">
                  <GiWallet />
                  <span>Payment History</span>
                </NavLink>
                <NavLink
                  to="/dashboard/cart"
                  className="flex items-center space-x-2 text-black hover:text-white"
                >
                  <FaCartShopping />
                  <span>My Cart ({cart.length})</span>
                </NavLink>
                <NavLink className="flex items-center space-x-2 text-black hover:text-white">
                  <img src={star} className="w-[1rem]" alt="" />
                  <span>Add Review</span>
                </NavLink>
                <NavLink className="flex items-center space-x-2 text-black hover:text-white">
                  <FaListAlt />
                  <span>My Booking</span>
                </NavLink>
              </>
            )}
          </ul>
          <div>
            <hr className="border-black my-6 " />
            <ul className="space-y-6">
              <NavLink className="flex cinzel items-center space-x-2 text-black hover:text-white">
                <FaHouse />
                <span>Home</span>
              </NavLink>
              <NavLink
                to="/orderFood/salad"
                className="flex cinzel items-center space-x-2 text-black hover:text-white"
              >
                <IoIosMenu />
                <span>Menu</span>
              </NavLink>
              <NavLink className="flex cinzel items-center space-x-2 text-black hover:text-white">
                <BsHandbagFill />
                <span>Shop</span>
              </NavLink>
              <NavLink className="flex cinzel items-center space-x-2 text-black hover:text-white">
                <SlEnvolope />
                <span>Contact</span>
              </NavLink>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
      </div>
      <div className="bg-white w-full flex-1">
        <Outlet />
      </div>
    </div>
  );
};

export default DashBored;
