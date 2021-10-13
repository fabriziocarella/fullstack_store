import React from "react";

import Card from '../Card'

const ProductList = (props) => {
  return (
    <article className="cardContainer">
      {props.videogames.map((game, i) => <Card info={game} key={i} />)}
    </article>
  )
};

export default ProductList;
