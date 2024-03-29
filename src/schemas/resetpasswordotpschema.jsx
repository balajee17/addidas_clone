import * as Yup from "yup";

export const ResetPasswordOtpPageSchema = Yup.object({
    email: Yup.string().email().required("please enter your email"),
    
  });