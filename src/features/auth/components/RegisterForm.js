import React from 'react';
import { Button } from '@mui/material';
import { styled } from '@mui/material/styles';
import TextField from "../../../components/TextField";
import RadioGroup from "../../../components/RadioGroup";

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

const RegisterForm = ({ onSubmit, errors, register }) => {
  return (
    <Form onSubmit={onSubmit}>
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

      {/* <RadioGroup
        register_id='gender'
        register={register}
        errors={errors}
        values={['male', 'female', 'other']}
      />
       */}
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