import React, { useRef, useState } from "react";
import { FormControl, InputGroup } from "react-bootstrap";
import { TwitterPicker } from "react-color";

type ViewProps = {
	isOpen: boolean;
	setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const CategoriesModal: React.FC<ViewProps> = (props: ViewProps) => {
	const view = useRef(null);
	const resizeActive = useRef(false);
	const col1 = useRef(null);
	const col2 = useRef(null);
	const col1W = useRef(0);
	const col2W = useRef(0);
	const pickerEl = useRef(null);
	const [name, setName] = useState("");
	const [description, setDescription] = useState("");
	const [showColorpicker, setShowColorpicker] = useState(false);

	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	function onMouseDown(event: any): void {
		//Activate resize functionality
		resizeActive.current = true;
	}

	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	function onMouseUp(event: any): void {
		//Deactivate resize functionality
		resizeActive.current = false;
	}

	function onMouseMove(event: any): void {
		//Resize on mouse move only if resizebar is pressed
		if (resizeActive.current) {
			//Get x coordinate of view
			const left = view.current.getBoundingClientRect().left;
			//Calculate new width for column 1
			col1W.current = event.clientX - left;
			//Calculate new width for column 2
			col2W.current = 700 - col1W.current - 5;
			//Set new widths
			col1.current.style.width = `${col1W.current}px`;
			col2.current.style.width = `${col2W.current}px`;
		}
	}

	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	function onColorpickerClick(event: any): void {
		setShowColorpicker(!showColorpicker);
	}

	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	function onColorChange(color: any, event: any): void {
		pickerEl.current.style.background = color.hex;
	}

	function show(): JSX.Element {
		if (props.isOpen) {
			return (
				<div
					ref={view}
					className="CategoriesView"
					onMouseMove={onMouseMove}
					onMouseUp={onMouseUp}
				>
					<div className="ModalTop"></div>
					<div className="CategoryRow">
						<div ref={col1} className="CategoryColumn">
							<h3 className="CategoryTitle">
								Category ___________________
							</h3>
						</div>
						<div className="ResizeBar" onMouseDown={onMouseDown}>
							<p className="ResizeDash">-</p>
							<p className="ResizeDash">-</p>
							<p className="ResizeDash">-</p>
						</div>
						<div ref={col2} className="CategoryColumn">
							<InputGroup className="InputGroup">
								<InputGroup.Text className="Label">
									Name
								</InputGroup.Text>
								<FormControl
									className="InputArea"
									value={name}
									onChange={(e): void =>
										setName(e.target.value)
									}
								/>
							</InputGroup>
							<InputGroup className="InputGroup">
								<p className="Label NoMargins DescWidth">
									Description
								</p>
								<FormControl
									className="CategoryDescription"
									as="textarea"
									placeholder="Optional"
									value={description}
									onChange={(e): void =>
										setDescription(e.target.value)
									}
								/>
							</InputGroup>
							<div className="ColorGroup">
								<p className="Label NoMargins">Color</p>
								<div
									ref={pickerEl}
									className="ColorPicker"
									onClick={onColorpickerClick}
								/>
							</div>
							{showColorpicker && (
								<TwitterPicker onChange={onColorChange} />
							)}
						</div>
					</div>
				</div>
			);
		} else return <></>;
	}

	return show();
};

export default CategoriesModal;
