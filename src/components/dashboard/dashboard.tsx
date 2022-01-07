import React from "react";
import Toolbar from "@components/toolbar/toolbar";

const Dashboard: React.FC = () => {
	return (
		<div className="DashboardView">
			<Toolbar view="dashboard" />
		</div>
	);
};

export default Dashboard;
