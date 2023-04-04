import React from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';

const HandleForm = ({form: Form, reduxAction}) => {
  const dispatch = useDispatch();
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (formData) => {
    dispatch(reduxAction(formData));
  };

  return (
    <Form register={register} errors={errors} onSubmit={handleSubmit(onSubmit)}/>
  );
};

export default HandleForm;