import * as yup from "yup";

export const SignupSchema = yup.object().shape({
  email: yup.string().email().required(),
  password: yup.string().min(8).required(),
  passwordConfirmation: yup
    .string()
    .min(8)
    .required()
    .test("passwords-match", "Passwords must same", function (value) {
      return this.parent.password === value;
    }),
});
