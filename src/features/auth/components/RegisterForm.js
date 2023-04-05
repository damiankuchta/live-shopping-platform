import React from 'react';
import { Button } from '@mui/material';
import { styled } from '@mui/material/styles';
import TextField from "../../../components/TextField";
import RadioGroup from "../../../components/RadioGroup";
import { useWatch, useFormContext } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";

const Form = styled('form')({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  '& > *': {
    margin: '8px',
    width: '25ch',
  },
});

let userSchema = yup.object().shape({
  userName: yup.string().email(),
  nickname: yup.string().min(8).max(20),
  password: yup.string().min(8).max(20).matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/),
  password2: yup.string().min(8).max(20).matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/)
            .oneOf([yup.ref('password'), null], 'doNotMatch'),
  name: yup.string(),
  familyname: yup.string(),
  address: yup.string()
}).required();

const RegisterForm = () => {

  const {register, formState: {errors}, handleSubmit } = useFormContext({
    resolver: yupResolver(userSchema),
  });

  return (
    <Form onSubmit={handleSubmit}>
      <TextField
        label="E-mail"
        type="email"
        register_id="username"
        register={register}
        errors={errors}
      />

      <TextField
        label="Username"
        register_id="nickname"
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
      />

      <RadioGroup
        register_id='gender'
        register={register}
        errors={errors}
        values={['male', 'female', 'other']}
      />
      
      <Button
        variant="contained"
        color="primary"
        sx={{ margin: '16px 0' }}
        type="submit"
      >
        Register
      </Button>
    </Form>
  );
};

export default RegisterForm;