import React from 'react';
import { useFormContext } from 'react-hook-form';

import TextField from "../../../components/TextField";
import RadioGroup from "../../../components/RadioGroup";
import FormButton from "../../../components/FormButton";
import StyledAuthForm from "./StyledAuthForm";


const RegisterForm = () => {

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
        label="Username"
        register_id="preferred_username"
        register={register}
        errors={errors}
      />

      <TextField
        type="password"
        register_id="password"
        register={register}
        errors={errors}
      />

      <TextField
        label="Confirm password"
        type="password"
        register_id="password2"
        register={register}
        errors={errors}
      />
{/* 
      <TextField
        register_id="name"
        register={register}
        errors={errors}
      />

      <TextField
        label="Surname"
        register_id="familyname"
        register={register}
        errors={errors}
      />

      <TextField
        register_id="address"
        register={register}
        errors={errors}
      /> */}

      {/* <RadioGroup
        register_id='gender'
        register={register}
        errors={errors}
        values={['male', 'female', 'other']}
      /> */}
      
      <FormButton text={'Register'}/>
    </StyledAuthForm>
  );
};

export default RegisterForm;