import { useAppSelector } from "../store/store";

export const useToken = () => {
  const token = useAppSelector((state) => state.auth.token);
  return token;
};
