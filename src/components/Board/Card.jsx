import React from "react";
import "./Card.scss";

const Card = ({ id, title, description }) => (
  <li className="Card">
    <h3 className="CardTitle">{title}</h3>
    <p className="CardDescription">{description}</p>
  </li>
);

export default Card;
