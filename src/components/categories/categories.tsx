import React, { useRef, useState } from "react";
import { FormControl, InputGroup } from "react-bootstrap";
import { TwitterPicker } from "react-color";
import cancel from "@public/cancel.png";

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
	const initialName = useRef("");
	const initialDesc = useRef("");
	const initialColor = useRef("");
	const [name, setName] = useState("");
	const [description, setDescription] = useState("");
	const [color, setColor] = useState("");
	const [showColorpicker, setShowColorpicker] = useState(false);

	function onMouseDown(): void {
		//Activate resize functionality
		resizeActive.current = true;
	}

	function onMouseUp(): void {
		//Deactivate resize functionality
		resizeActive.current = false;
	}

	function onMouseMove(event: any): void {
		//Resize on mouse move only if resizebar is pressed
		if (resizeActive.current) {
			//Get x coordinate of view
			const left = view.current.getBoundingClientRect().left;
			const delta = event.clientX - left;
			console.log(delta);
			if (delta > 500) {
				col1W.current = 495;
				col2W.current = 200;
			} else {
				//Calculate new width for column 1
				col1W.current = event.clientX - left;
				//Calculate new width for column 2
				col2W.current = 700 - col1W.current - 5;
			}
			//Set new widths
			col1.current.style.width = `${col1W.current}px`;
			col2.current.style.width = `${col2W.current}px`;
		}
	}

	function onColorpickerClick(): void {
		setShowColorpicker(!showColorpicker);
	}

	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	function onColorChange(color: any, event: any): void {
		pickerEl.current.style.background = color.hex;
		setColor(color.hex);
	}

	function onClose(): void {
		props.setIsOpen(false);
		setName("");
		setDescription("");
		setShowColorpicker(false);
	}

	function onCancel(): void {
		setName(initialName.current);
		setDescription(initialDesc.current);
		setColor(initialColor.current);
	}

	function onCategoryClick(): void {}

	function show(): JSX.Element {
		if (props.isOpen) {
			return (
				<div
					ref={view}
					className="CategoriesView"
					onMouseMove={onMouseMove}
					onMouseUp={onMouseUp}
				>
					<div className="TopBar">
						<img
							src={cancel}
							className="CancelIcon"
							onClick={onClose}
						/>
					</div>
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
							<div className="BtnGroup">
								<button className="BtnCategory">Save</button>
								<button
									className="BtnCategory"
									onClick={onCancel}
								>
									Cancel
								</button>
							</div>
						</div>
					</div>
				</div>
			);
		} else return <></>;
	}

	return show();
};

export default CategoriesModal;
