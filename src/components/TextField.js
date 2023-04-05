import MuiTextField from '@mui/material/TextField';
import capitalizeFirstLetter from '../utils/capitalizeFirstLetter';

export default function TextField({errors, register, register_id, ...props}) {
    
    return (
        <MuiTextField
        {...props}
        {...register(register_id)}
        id = {props.id || register_id}
        label = {(props.label ? capitalizeFirstLetter(props.label) : register_id)}
        type = {props.type || "text"}
        error= {!!errors[register_id]}
        helperText={errors[register_id]?.message}
      />
    )
}