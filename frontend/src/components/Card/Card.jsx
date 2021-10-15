import React from "react";

const Card = (props) => {
  let games = {
    title: props.info.title,
    rating: props.info.rating,
    company: props.info.company,
    productimage: props.info.productimage,
    price: props.info.price,
    description: props.info.description,
    id_company: props.info.id_company,
    shortDesc: props.info.description.slice(0, 125).concat(`...`)
  }
  const { title, rating, company, productimage, price, description, shortDesc } = games
  return (
    <article className="card">
      <div className="title_sub_company">
        <h3 className="title">{title}</h3>
        <h5 className="sub_company">{company}</h5>
      </div>
      <img src={productimage} alt={title} className="productimage" width="150px" />
      <div className="rating_price">
        <span className="rating">{rating}/5</span>
        <span className="price">{price}</span>
      </div>
      <p>{description}</p>
      <p>{shortDesc}<a href="#" target="_blank"> Ver más!</a></p>
    </article>
  );
};

export default Card;
