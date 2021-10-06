import React from 'react'
import {MainContainer} from "./components/MainContainer";
import {Checkbox, FormControlLabel, Typography} from "@material-ui/core";
import {Form} from "./components/Form";
import {Input} from "./components/Input";
import {useHistory} from "react-router-dom";
import {useForm} from "react-hook-form";
import {PrimaryButton} from "./components/PrimaryButton";
import * as yup from "yup";
import {yupResolver} from "@hookform/resolvers/yup";
import {parsePhoneNumberFromString} from "libphonenumber-js";
import {useData} from "./DataContext";


const schema = yup.object().shape({
	email: yup.string().email("Email should have correct format")
	.required("Email is a required field"),
});

const normalizePhoneNumber = (value) => {
	const phoneNumber = parsePhoneNumberFromString(value)
	if(!phoneNumber){
		return value
	}

	return (
		phoneNumber.formatInternational()
	);
};

export const Step2 = () => {
	const history = useHistory()
	const { setValues, data } = useData();
	const { register, formState: { errors }, handleSubmit, watch } = useForm({
		defaultValues: {
			email: data.email,
			hasPhone: data.hasPhone,
			phoneNumber: data.phoneNumber,
		},
		mode: "onBlur",
		resolver: yupResolver(schema),
	})

	const hasPhone = watch("hasPhone");

	const onSubmit = (data) => {
		history.push("/step3")
		setValues(data);
	}

	return <MainContainer>
		<Typography component="h2" variant="h5">
			Step 2 🌌
		</Typography>
		<Form onSubmit={handleSubmit(onSubmit)}>
			<Input
				{...register('email')}
				id="email"
				type="email"
				label="Email"
				mame="email"
				error={!!errors?.email}
				helperText={errors?.email?.message}
				required
			/>

			<FormControlLabel
				control={
					<Checkbox defaultValue={data.hasPhone}
					          defaultChecked={data.hasPhone}
					          color="primary"
					          {...register('hasPhone')}
					          name="hasPhone"
					/>
				}
				label="Do you have a phone"
			/>

			{
				hasPhone && (
				<Input
					{...register('phoneNumber')}
					id="phoneNumber"
					type="tel"
					label="Phone Number"
					name="phoneNumber"
					onChange={(event) => {
						event.target.value = normalizePhoneNumber(event.target.value);
					}}
				/>
			)
			}
			<PrimaryButton>CLICK</PrimaryButton>
		</Form>
	</MainContainer>
}