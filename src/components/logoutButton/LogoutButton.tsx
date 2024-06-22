import { Navigate } from "react-router-dom";
import { useAppDispatch } from "../../hooks/useAppDispatch"
import { logout } from "../../store/slices/authSlice";

const LogoutButton = () => {
  const dispatch = useAppDispatch();

  const handleClick = (e) => {
    e.preventDefault();

    dispatch(logout());

    Navigate('/');
  }

  return (
    <div>
      <button onClick={() => dispatch(logout())}>
        Выйти
      </button>
    </div>
  )
}

export default LogoutButton;