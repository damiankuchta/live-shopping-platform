import { RadioGroup as RG, FormControlLabel, Radio } from '@mui/material';

export default function RadioGroup({ values, errors, register, register_id, validators = { required: true }, ...props }) {

    return (
        <RG
            {...props}
            {...register(register_id, validators)}
            defaultValue= {props.defaultValue || values[0]}
            name={ props.name || register_id+"-radio-buttons-group"}
            helperText={errors.password ? 'This field is required' : ''}
            error={!!errors['register_id']}
        >
            {values.map((value) => {
                return (
                    <FormControlLabel value={value} control={<Radio />} label={value[0].toUpperCase()} />
                )
            })}
        </RG>
    )

}