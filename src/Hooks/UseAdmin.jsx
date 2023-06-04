import { useQuery } from "@tanstack/react-query";
import { useAuth } from "./UseAuth"
import useAxiosSecure from "./UseAxiosSecure";

export const useAdmin = () =>{
    const {user}=useAuth();
    const [axiosSecure]=useAxiosSecure();
    const {data: isAdmin, isLoading: isAdminLoading}=useQuery({
        queryKey: ['isAdmin', user?.email],
        queryFn: async ()=>{
            const res = await axiosSecure.get(`users/admin/${user.email}`);
            console.log('is admin res', res);
            return res.data.admin;
        }
    })
    return [isAdmin, isAdminLoading]
}