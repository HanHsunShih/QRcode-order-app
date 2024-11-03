import "./Card.scss";
import { useState } from "react";
import { Tag } from "../Tag/Tag";
import pourOverCoffee from "../../data/pourOverCoffee.json";

export const Card = ({ productTitle, productPrice }) => {
  const [cardTag, setCardTag] = useState(null);
  return (
    <div className="card">
      <img
        src="https://live.staticflickr.com/65535/54114328213_51718668db_z.jpg"
        alt=""
        className="card__image"
      />
      <h3 className="card__title">{productTitle}</h3>
      <p className="card__price">{productPrice}</p>
      <div className="card__tag-box">
        <Tag />
      </div>
    </div>
  );
};
