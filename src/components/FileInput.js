import React from "react";
import { Controller } from "react-hook-form";
import List from "@material-ui/core/List";
import {ListItem, ListItemIcon, ListItemText, makeStyles, Paper} from "@material-ui/core";
import Dropzone from "react-dropzone";
import {CloudUpload, InsertDriveFile} from "@material-ui/icons";

const useStyles = makeStyles((theme) => ({
	root: {
		backgroundColor: "#eee",
		textAlign: "center",
		cursor: "pointer",
		color: "#333",
		padding: "10px",
		marginTop: "20px",
	},
	icon: {
		marginTop: "16px",
		color: "#888888",
		fontSize: "42px",
	},
}));

export const FileInput = ({ control, name }) => {
	const styles = useStyles();

	return (
		<Controller
			control={control}
			name={name}
			defaultValue={[]}
			render={({ onChange, onBlur, value }) => (
				<>
					<Dropzone onDrop={onChange}>
						{({ getRootProps, getInputProps }) => (
							<Paper
								variant="outlined"
								className={styles.root}
								{...getRootProps()}
							>
								<CloudUpload className={styles.icon} />
								<input {...getInputProps()} name={name} onBlur={onBlur} />
								<p>Drag 'n' drop files here, or click to select files</p>
							</Paper>
						)}
					</Dropzone>
					<List>
						{value && value.map((f, index) => ( // this bug value.map((f, index)
							<ListItem key={index}>
								<ListItemIcon>
									<InsertDriveFile />
								</ListItemIcon>
								<ListItemText primary={f.name} secondary={f.size} />
							</ListItem>
						))}
					</List>
				</>
			)}
		/>
	);
};