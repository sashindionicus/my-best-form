import React from 'react'
import {MainContainer} from "./components/MainContainer";
import {Typography} from "@material-ui/core";
import {Form} from "./components/Form";
import {Input} from "./components/Input";
import {PrimaryButton} from "./components/PrimaryButton";
import {useForm} from "react-hook-form";
import * as yup from 'yup';
import {yupResolver} from "@hookform/resolvers/yup";


const schema = yup.object().shape({
	firstName: yup
	.string()
	.matches(/^([^0-9]*)$/, "First name should not contain numbers")
	.required("First name is a required field"),
	lastName: yup
	.string()
	.matches(/^([^0-9]*)$/, "Last name should not contain numbers")
	.required("Last name is a required field"),
});

export const Step1 = () => {
	const { register, formState: { errors }, handleSubmit} = useForm({
		mode: "onBlur",
		resolver: yupResolver(schema),
	})

	const onSubmit = (data) => {
		console.log(data)
	}


	return <MainContainer>
		<Typography component="h2" variant="h5">
			Step 1 🌌
		</Typography>
		<Form onSubmit={handleSubmit(onSubmit)}>
			<Input
				{...register('firstName')}
				id="firstName"
				type="text"
				label="First Name"
				name="firstName"
				error={!!errors?.firstName}
				helperText={errors?.firstName?.message}
			/>
			<Input
				{...register('lastName')}
				id="lastName"
				type="text"
				label="Last Name"
				name="lastName"
				error={!!errors?.lastName}
				helperText={errors?.lastName?.message}
			/>
			<PrimaryButton>CLICK</PrimaryButton>
		</Form>
	</MainContainer>
}