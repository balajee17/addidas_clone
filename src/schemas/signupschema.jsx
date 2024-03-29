import * as Yup from "yup"

export const SignupPageSchema = Yup.object({
  name: Yup.string().min(2).max(25).required("please enter your name"),
  email: Yup.string().email().required("please enter your email"),
  password: Yup.string().required("please enter your password"),
  // confim_password: Yup.string().required().oneOf([Yup.ref("password"), null], "Password must match"),
  
  
});

