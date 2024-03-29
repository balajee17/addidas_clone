import * as Yup from "yup"

export const ValidateOtpPageSchema = Yup.object({
  otp: Yup.string().min(2).max(25).required("please enter your otp"),
  
});
