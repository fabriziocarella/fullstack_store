import React from "react";

import Card from '../Card'

const ProductList = ({ currentGames, loading }) => {
  if (loading) {
    return <h2>Loading...</h2>;
  }
  return (
    <article className="cardContainer">
      {currentGames.map((game, i) => <Card info={game} key={i} />)}
    </article>
  )
};

export default ProductList;
