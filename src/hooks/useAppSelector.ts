import { useSelector, TypedUseSelectorHook } from "react-redux";
import type { RootState } from "../store/intex";

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;