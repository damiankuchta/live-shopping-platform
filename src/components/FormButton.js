import React from 'react';
import Button from '@mui/material/Button';

const FormButton = ({ ...props }) => {
  return (
    <Button
      variant={props.variant || "contained"}
      color={props.color || "primary"}
      sx={props.sx || { margin: '16px 0' }}
      type={props.type || "submit"}
    >
      {props.text || "Submit"}
    </Button>
  )
}

export default FormButton;