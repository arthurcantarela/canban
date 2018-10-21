import React from "react";
import { Card } from ".";
import Button from "components/Button";
import "./Column.scss";

const Column = ({ id, title, cards, addCard }) => (
	<ul className="Column">
		<h2 className="ColumnTitle">{title}</h2>
		{cards.map(({ id, ...card }) => (
			<Card key={id} id={id} {...card} />
		))}
		<Button onClick={() => addCard(id)}>
			Add card
		</Button>
	</ul>
);

export default Column;