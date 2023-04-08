import React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import TextField from "../../../components/Fields/TextField";
import RadioGroup from "../../../components/Fields/RadioGroup";
import FormButton from "../../../components/Buttons/FormButton";
import StyledAuthForm from "./StyledAuthForm";
import { signUp} from '../reducers/authSlice';
import { useDispatch } from 'react-redux';
import { signUpSchema } from '../configs/formSchema';

const RegisterForm = () => {

  const dispatch = useDispatch();

  const {register, formState: {errors}, handleSubmit} = useForm({
    mode: 'onBlur',
    resolver: yupResolver(signUpSchema) 
  });

  const onSubmit = (formData) => {
    dispatch(signUp(formData));
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