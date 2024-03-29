import * as Yup from "yup";

export const ResetPasswordPageSchema = Yup.object({
    code: Yup.number().required("please enter your code"),
    newPassword: Yup.string().required("please enter your new password"),
    
    
  });