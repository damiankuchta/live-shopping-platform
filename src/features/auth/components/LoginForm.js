import React from 'react';
import { useForm } from 'react-hook-form';
import TextField from "../../../components/Fields/TextField";
import FormButton from "../../../components/Buttons/FormButton";
import StyledAuthForm from "./StyledAuthForm";
import { login } from "../reducers/authSlice";
import { useDispatch } from 'react-redux';

const LoginForm = () => {

  const dispatch = useDispatch();

  const {register, formState: {errors}, handleSubmit} = useForm({
    mode: 'onBlur',
  });

  const onSubmit = (formData) => {
    dispatch(login(formData));
  }


  return (
    <StyledAuthForm onSubmit={handleSubmit(onSubmit)}>
      <TextField
        label="E-mail"
        type="email"
        register_id="username"
        register={register}
        errors={errors}
      />

      <TextField
        type='password'
        register_id="password"
        register={register}
        errors={errors}
      />

      <FormButton text={'Login'}/>
    </StyledAuthForm>
  );
};

export default LoginForm;