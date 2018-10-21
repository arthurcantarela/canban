import React from "react";
import "./Button.scss";

const Button = ({ onClick, label, children }) => (
	<button onClick={onClick} className="Button" aria-label={label} type="button">
		{children}
	</button>
);

export default Button;