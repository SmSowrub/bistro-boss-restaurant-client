import { useQuery } from '@tanstack/react-query'
import useAxiosSecure from './UseAxiosSecure';
import { useAuth } from './UseAuth';

const UseCart = () => {
    const { user, loading } = useAuth()
    // const token =localStorage.getItem('access-token')
    const [axiosSecure] = useAxiosSecure();

    const { refetch, data: cart = [] } = useQuery({
        queryKey: ['cart', user?.email],
        enabled: !loading && !!user?.email,
        // queryFn: async()=>{
        //     if (!loading && user?.email) {
        //         const res = await fetch(`http://localhost:5000/carts?email=${user?.email}`, {headers:{
        //         authorization: `bearer ${token}`
        //     }})
        //     return res.json()
        //     }
        // }
        queryFn: async () => {
            if (!loading && !!user?.email) {
                const res = await axiosSecure(`/carts?email=${user?.email}`)
                console.log('res from axios', res)
                return res.data;
            }
        },
    })
    return [cart, refetch]
};

export default UseCart;