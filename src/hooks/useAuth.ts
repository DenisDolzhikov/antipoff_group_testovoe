import { useMemo } from "react";
import { useAppSelector } from "./useAppSelector";
import { selectCurrentUser } from '../store/slices/authSlice';

export const useAuth = () => {
  const user = useAppSelector(selectCurrentUser);

  return useMemo(() => ({ user }), [user]);
};