import { Navigate, Outlet, useLocation } from "react-router-dom";
import { useAuth } from "../hooks/useAuth"; 

const PrivateOutlet = () => {
  const auth = useAuth();
  const location = useLocation();

  return auth.user ? (
    <Outlet />
  ) : (
    <Navigate to='/signup' state={{ from: location }} />
  )
}

export default PrivateOutlet;