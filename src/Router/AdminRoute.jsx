import { Navigate, useLocation } from "react-router";
import { useAuth } from "../Hooks/UseAuth";
import { useAdmin } from "../Hooks/UseAdmin";


const PrivateRoute = ({ children }) => {
    const { user, loading } = useAuth();
    const [isAdmin, isAdminLoading]=useAdmin()
    const location = useLocation();

    if(loading || isAdminLoading){
        return <progress className="progress w-56"></progress>
    }

    if (user && isAdmin) {
        return children;
    }
    return <Navigate to="/login" state={{from: location}} replace></Navigate>
};

export default PrivateRoute;