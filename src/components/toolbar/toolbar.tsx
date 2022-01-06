import React from "react";
import { useHistory } from "react-router-dom";

type ToolbarProps = {
	view: string;
};

const Toolbar: React.FC<ToolbarProps> = (props: ToolbarProps) => {
	const history = useHistory();

	function displayActions(): JSX.Element {
		switch (props.view) {
			case "dashboard":
				return (
					<div className="ToolbarView">
						{/* Filter icon */}
						<img className="ToolbarIcon" />
						{/* Rewards icon */}
						<img className="ToolbarIcon" />
						{/* Categories icon */}
						<img className="ToolbarIcon" />
						{/* Calendar icon */}
						<img
							className="ToolbarIcon"
							onClick={(): void => history.push("/settings")}
						/>
						{/* Archive icon */}
						<img
							className="ToolbarIcon"
							onClick={(): void => history.push("/archive")}
						/>
						{/* Settings icon */}
						<img
							className="ToolbarIcon"
							onClick={(): void => history.push("/settings")}
						/>
					</div>
				);

			case "archive":
				return <div className="IconPlaceholder"></div>;

			case "calendar":
				return <div className="IconPlaceholder"></div>;

			case "settings":
				return <div className="IconPlaceholder"></div>;
		}
	}

	return displayActions();
};

export default Toolbar;
