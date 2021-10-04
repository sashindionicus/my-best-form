import React from 'react'
import {Typography} from "@material-ui/core";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
	root: {	
		margin: theme.spacing(3, 0, 2),
		fontFamily: "Lato",	
		textAlign: "center",
		fontSize: "80px",
		color: "#fff",
		animation: "glow 1s ease-in-out infinite alternate"
		
	}
}))

export const Header = () => {
		const styles = useStyles()

	return <Typography className={styles.root} component="h1" variant="h5">My Best Form</Typography>
}