import { Navigate, Outlet} from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";

function ProtectedRoute() {

    const { user } = useAuth();

    if(user === null){
        return <Navigate to="/login"/>
    }

    return <Outlet />;
}

export default ProtectedRoute;