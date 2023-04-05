import React from 'react';
import { useForm, FormProvider} from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";

const errorMessage ={
  email: "invalidEmail",
  required: "This field is required",
  minLength: "Must have at least 8 characters",
  maxLength: "Must be 20 characters or less",
  pattern: "Must contain at least one uppercase, one lowercase and one number",
  validate: "Passwords must match",
}

let userSchema = yup.object().shape({
  username: yup.string().email(errorMessage.email).required(errorMessage.required),
  nickname: yup.string().min(8, errorMessage.minLength).max(20, errorMessage.maxLength).required(errorMessage.required),
  password: yup.string().min(8).max(20).matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/, errorMessage.pattern).required(errorMessage.required),
  password2: yup.string().oneOf([yup.ref('password'), null], errorMessage.validate).required(errorMessage.required),
})

const HandleForm = ({form: Form, reduxAction}) => {
  const dispatch = useDispatch();
  const formMethods = useForm({
    mode: 'onBlur',
    resolver: yupResolver(userSchema),
  });

  const onSubmit = (formData) => {
    dispatch(reduxAction(formData));
  };

  return (
    <FormProvider {...formMethods} handleSubmit={formMethods.handleSubmit(onSubmit)}>
      <Form/>
    </FormProvider>
  );

};

export default HandleForm;