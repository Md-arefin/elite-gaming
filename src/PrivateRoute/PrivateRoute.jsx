import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import Loader from "../pages/loader/Loader";
import { AuthContext } from "../Provider/AuthProvider";


const PrivateRoute = ({children}) => {

    const {user , loading } = useContext(AuthContext);

    const location = useLocation();

    if(loading){
        return <Loader></Loader>
    }

    if(user){
        return children
    }



    return <Navigate state={{form: location}} to='/login' replace></Navigate>;
};

export default PrivateRoute;