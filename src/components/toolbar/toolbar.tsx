import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import Modal from "react-modal";

type ToolbarProps = {
	view: string;
};

const Toolbar: React.FC<ToolbarProps> = (props: ToolbarProps) => {
	const history = useHistory();
	const [showCategories, setShowCategories] = useState(false);
	const [showRewards, setShowRewards] = useState(false);
	const [showFilters, setShowFilters] = useState(false);

	function displayActions(): JSX.Element {
		switch (props.view) {
			case "dashboard":
				return (
					<div className="ToolbarView">
						{/* Filter icon */}
						<img
							className="ToolbarIcon"
							onClick={(): void => setShowFilters(true)}
						/>
						{/* Rewards icon */}
						<img
							className="ToolbarIcon"
							onClick={(): void => setShowRewards(true)}
						/>
						{/* Categories icon */}
						<img
							className="ToolbarIcon"
							onClick={(): void => setShowCategories(true)}
						/>
						{/* Calendar icon */}
						<img
							className="ToolbarIcon"
							onClick={(): void => history.push("/calendar")}
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
				return (
					<div className="ToolbarView">
						{/* Calendar icon */}
						<img
							className="ToolbarIcon"
							onClick={(): void => history.push("/calendar")}
						/>
						{/* Dashboard icon */}
						<img
							className="ToolbarIcon"
							onClick={(): void => history.push("/dashboard")}
						/>
						{/* Settings icon */}
						<img
							className="ToolbarIcon"
							onClick={(): void => history.push("/settings")}
						/>
					</div>
				);

			case "calendar":
				return (
					<div className="ToolbarView">
						{/* Archive icon */}
						<img
							className="ToolbarIcon"
							onClick={(): void => history.push("/archive")}
						/>
						{/* Dashboard icon */}
						<img
							className="ToolbarIcon"
							onClick={(): void => history.push("/dashboard")}
						/>
						{/* Settings icon */}
						<img
							className="ToolbarIcon"
							onClick={(): void => history.push("/settings")}
						/>
					</div>
				);

			case "settings":
				return (
					<div className="ToolbarView">
						{/* Calendar icon */}
						<img
							className="ToolbarIcon"
							onClick={(): void => history.push("/calendar")}
						/>
						{/* Dashboard icon */}
						<img
							className="ToolbarIcon"
							onClick={(): void => history.push("/dashboard")}
						/>
						{/* Archive icon */}
						<img
							className="ToolbarIcon"
							onClick={(): void => history.push("/archive")}
						/>
					</div>
				);
		}
	}

	return displayActions();
};

export default Toolbar;
