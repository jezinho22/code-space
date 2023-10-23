import React from "react";

export default function Button({ title, onClick }) {
	return (
		<div>
			<button
				style={{
					maxWidth: "140px",
					minWidth: "80px",
					height: "30px",
					marginRight: "5px",
				}}
				onClick={onClick}>
				{title}
			</button>
		</div>
	);
}
