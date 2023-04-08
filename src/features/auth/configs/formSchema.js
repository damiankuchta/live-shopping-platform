import * as yup from 'yup';

const errorMessage ={
    email: "invalidEmail",
    required: "This field is required",
    passwordMinLength: "Must have at least 8 characters",
    passwordMaxLength: "Must be 20 characters or less",
    pattern: "Must contain at least one uppercase, one lowercase and one number and one special character",
    validate: "Passwords must match",
    userNameMin: "Must have at least 3 characters",
    userNameMax: "Must be 10 characters or less",
  }
  
  export const signUpSchema = yup.object().shape({
    username: yup.string()
    .email(errorMessage.email)
    .required(errorMessage.required),
   
    preferred_username: yup.string()
    .min(3, errorMessage.userNameMin)
    .max(10, errorMessage.userNameMax)
    .required(errorMessage.required),
  
    password: yup.string()
    .min(8, errorMessage.passwordMinLength)
    .max(20, errorMessage.passwordMaxLength)
    //One uppercase, one lowercase and one number and one special character
    .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/, errorMessage.pattern)
    .required(errorMessage.required),
  
    password2: yup.string()
    .oneOf([yup.ref('password'), null], errorMessage.validate)
    .required(errorMessage.required),
  })
