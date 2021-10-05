import React, {forwardRef} from 'react'
import {styled, TextField} from "@material-ui/core";


const CssTextField = styled(TextField)({
	'& .MuiInputBase-input': {
		color: 'white',
	},
	'& .MuiInputLabel-outlined': {
		color: 'white',
	},
	'& label.Mui-focused': {
		color: 'white',
	},
	'& .MuiInput-underline:after': {
		borderBottomColor: 'white',
	},
	'& .MuiOutlinedInput-root': {
		'& fieldset': {
			borderColor: 'white',
		},
		'&:hover fieldset': {
			borderColor: 'white',
		},
		'&.Mui-focused fieldset': {
			borderColor: 'white',
		},
	},
});

export const Input = forwardRef((props, ref) => {

	return <CssTextField
		variant="outlined"
		margin="normal"
		innerRef={ref}
		fullWidth
		{ ...props }/>
})