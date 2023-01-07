export interface User {
  email: string;
  password: string;
}

export interface LoginReqData extends User {}
export interface SignupFormData extends User {
  passwordConfirmation: string;
}
export interface SignupReqData extends User {}
