import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import useAxiosSecore from "./useAxiosSecore";

const useAdmin = () => {
    const {user} = useContext(AuthContext);
    const axiosSecure = useAxiosSecore();
    const {data: isAdmin, isPending: isAdminLoading} = useQuery({
        queryKey: [user?.email, 'isAdmin'],
        queryFn: async() => {
            const res = await axiosSecure.get(`/users/admin/${user.email}`);
            console.log(res.data)
            return res.data.admin;
        }
    })
    return [isAdmin]
};

export default useAdmin;