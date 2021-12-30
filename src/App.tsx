import React from "react";
import { HashRouter as Router, Route } from "react-router-dom";
import { hot } from "react-hot-loader";
import "./app.sass";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const App: React.FC<{ title: string; version: string }> = (props: {
	title: string;
	version: string;
}) => {
	return (
		<Router>
			<Route exact path="/" component={Hello} />
		</Router>
	);
};

const Hello: React.FC = () => {
	return <p style={{ color: "green" }}>Hello World!</p>;
};

export default hot(module)(App);
