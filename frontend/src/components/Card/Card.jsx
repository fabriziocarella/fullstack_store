import React from "react";

const Card = (props) => {
  let games = {
    title: props.info.title,
    rating: props.info.rating,
    company: props.info.company,
    productImage: props.info.productImage,
    price: props.info.price,
    description: props.info.description,
    id_company: props.info.id_company
  }
  const {title, rating, company, productImage, price, description, id_company} = games
  return (
  <article className="card">
    <div className="title">{title}</div>
    
  </article>
  );
};

export default Card;
