import React from 'react';
import { useFormContext } from 'react-hook-form';

import TextField from "../../../components/TextField";
import FormButton from "../../../components/FormButton";
import StyledAuthForm from "./StyledAuthForm";

const LoginForm = () => {
  const {register, formState: {errors}, handleSubmit } = useFormContext();

  return (
    <StyledAuthForm onSubmit={handleSubmit}>
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