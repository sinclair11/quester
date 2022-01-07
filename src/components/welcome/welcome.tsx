import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { welcomeDescription } from "@src/utils/config";
import { useHistory } from "react-router-dom";

const Welcome: React.FC = () => {
	const history = useHistory();
	const [fadeout, setFadeout] = useState(false);

	async function btnClick(): Promise<void> {
		//Start fadeout effect
		setFadeout(true);
		//Go to dashboard
		setTimeout(() => {
			history.push("/dashboard");
		}, 1500);
	}

	function display(): JSX.Element {
		//Return welcome page content
		if (!fadeout) {
			return (
				<div className="WelcomeView">
					<div className="Logo"></div>
					<Button className="BtnContinue" onClick={btnClick}>
						Continue...
					</Button>
					<p className="Description">{welcomeDescription}</p>
				</div>
			);
		}
		//Transition to fade-out effect
		else {
			return <div className="Fadeout"></div>;
		}
	}

	return display();
};

export default Welcome;
