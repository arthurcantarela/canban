import React from "react";
import { Card } from ".";
import "./Column.scss";

const Column = ({ id, title, cards }) => (
	<ul className="Column">
		<h2 className="ColumnTitle">{title}</h2>
		{cards.map(({ id, ...card }) => (
			<Card key={id} id={id} {...card} />
		))}
	</ul>
);

export default Column;