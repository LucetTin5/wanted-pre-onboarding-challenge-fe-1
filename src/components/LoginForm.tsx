import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { LoginSchema } from "../schema/LoginSchema";
import { LoginReqData } from "../types/users";
import { yupResolver } from "@hookform/resolvers/yup";

interface LoginFormProps {
  token: string | null;
  login: (data: LoginReqData) => void;
}

export const LoginForm = ({ token, login }: LoginFormProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<LoginReqData>({
    resolver: yupResolver(LoginSchema),
    mode: "onChange",
  });
  const navigate = useNavigate();
  const onSubmit = (data: LoginReqData) => login(data);

  useEffect(() => {
    if (token) {
      navigate("/");
    }
  }, [token]);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label htmlFor="email">Email</label>
      <input {...register("email")} type="email" />
      <span>{errors.email?.message}</span>
      <label htmlFor="password">Password</label>
      <input {...register("password")} type="password" />
      <span>{errors.password?.message}</span>
      <button type="submit" disabled={!isValid}>
        로그인
      </button>
    </form>
  );
};
