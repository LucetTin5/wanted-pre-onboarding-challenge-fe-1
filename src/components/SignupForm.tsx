import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { SignupFormData, SignupReqData } from "../types/users";
import { yupResolver } from "@hookform/resolvers/yup";
import { SignupSchema } from "../schema/SignupSchema";

interface SignupFormProps {
  token: string | null;
  signup: (data: SignupReqData) => void;
}

export const SignupForm = ({ token, signup }: SignupFormProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<SignupFormData>({
    resolver: yupResolver(SignupSchema),
    mode: "onChange",
  });
  const navigate = useNavigate();
  const onSubmit = ({
    email,
    password,
    passwordConfirmation,
  }: SignupFormData) => {
    if (password === passwordConfirmation) {
      signup({ email, password });
    }
  };

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
      <label htmlFor="passwordConfirmation">Password Confirmation</label>
      <input {...register("passwordConfirmation")} type="password" />
      <span>{errors.passwordConfirmation?.message}</span>
      <button type="submit" disabled={!isValid}>
        회원가입
      </button>
    </form>
  );
};
