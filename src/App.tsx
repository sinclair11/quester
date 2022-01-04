import React from "react";
import { HashRouter as Router, Route } from "react-router-dom";
import { hot } from "react-hot-loader";
import Welcome from "@components/welcome/welcome";
import "./app.sass";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const App: React.FC<{ title: string; version: string }> = (props: {
	title: string;
	version: string;
}) => {
	return (
		<Router>
			<Route exact path="/" component={Welcome} />
		</Router>
	);
};

export default hot(module)(App);
