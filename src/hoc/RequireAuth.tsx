// import { ReactElement } from "react";
// import { useAppSelector } from "../hooks/useAppSelector";
// import { Navigate } from "react-router-dom";

// interface Props {
//   children: ReactElement | null;
// }

// const RequireAuth: React.FC<Props> = ({ children }) => {
//   const isAuthenticated = useAppSelector(state => state.auth.isLoggedIn);

//   return isAuthenticated ? children : <Navigate to='/login' />
// }

// export { RequireAuth };