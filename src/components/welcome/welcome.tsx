import React from "react";
import { Button } from "react-bootstrap";
import { welcomeDescription } from "@src/utils/config";
import { useHistory } from "react-router-dom";

const Welcome: React.FC = () => {
	const history = useHistory();

	return (
		<div className="WelcomeView">
			<div className="Logo"></div>
			<Button
				className="BtnContinue"
				onClick={(): void => history.push("/dashboard")}
			>
				Continue...
			</Button>
			<p className="Description">{welcomeDescription}</p>
		</div>
	);
};

export default Welcome;
