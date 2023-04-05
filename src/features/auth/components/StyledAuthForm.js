import React from 'react';
import { styled } from '@material-ui/core/styles';

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

const StyledAuthForm = ({children, ...props}) => {
    return (
        <Form {...props}>
            {children}
        </Form>
        
    )
}

export default StyledAuthForm