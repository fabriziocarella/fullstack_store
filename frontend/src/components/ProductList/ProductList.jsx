import React from "react";

import Card from '../Card'

const ProductList = ({ currentGames, search, games }) => {

  return (
    <article className="cardContainer">
      {currentGames.filter((game) => {
        if (search == "") {
          return game
        } else if (game.title.toString().toLowerCase().includes(search.toLowerCase()) || game.company.toString().toLowerCase().includes(search.toLowerCase())) {
          return game
        }
      }).map((game, i) => <Card info={game} key={i} />)}
    </article>
  )
};

export default ProductList;
