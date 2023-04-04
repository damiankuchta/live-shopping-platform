import MuiTextField from '@mui/material/TextField';
import capitalizeFirstLetter from '../../utils/capitalizeFirstLetter';

export default function TextField({errors, register, register_id, validators={ required: true }, ...props}) {

    
    return (
        <MuiTextField
        {...props}
        {...register(register_id, validators)}
        id = {props.id || register_id}
        label = {(props.label ? capitalizeFirstLetter(props.label) : register_id)}
        type = {props.type || "text"}
        error= {!!errors[register_id]}
        helperText={errors.password ? 'This field is required' : ''}
      />
    )
}