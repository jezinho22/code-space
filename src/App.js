import "./App.css";
import { useState } from "react";
import Button from "./components/Button";

export default function App() {
	const [opendEditor, setOpendEditor] = useState("html");

	function clickHandler(editorName) {
		setOpendEditor(editorName);
	}

	return (
		<div className="App">
			<Button title={"Click me"} onClick={clickHandler} />
		</div>
	);
}
