import { useQuery } from "@tanstack/react-query";
import useAxiosSecore from "./useAxiosSecore";
import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";

const useCart = () => {
  const axiosSecore = useAxiosSecore();
  const { user } = useContext(AuthContext);
  const { refetch, data: cart = [] } = useQuery({
    queryKey: ["cart", user?.email],
    queryFn: async () => {
      const res = await axiosSecore.get(`/carts?email=${user.email}`);
      return res.data;
    },
  });
  return [cart, refetch];
};

export default useCart;
