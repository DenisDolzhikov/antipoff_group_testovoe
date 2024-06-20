import { useDispatch } from "react-redux";
import type { AppDispatch } from "../store/intex";

export const useAppDispatch = () => useDispatch<AppDispatch>();
