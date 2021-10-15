import React, { useEffect, useState, useContext } from "react";
import axios from "axios";

import Pagination from "../Pagination/Pagination";
import ProductList from "../ProductList/ProductList";
import { productContext } from "../../context/productContext";

const Home = () => {
  const { games, setGames } = useContext(productContext)
  const { search, setSearch } = useContext(productContext)

  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(10);

  useEffect(() => {
    (() => {
      try {
        axios.get(`http://localhost:5000/api/products/`)
          .then(response => {
            setGames(games.concat(response.data))
          })
      } catch (e) {
        console.log(e);
      }
    })();
  }, []);
  // Get current posts
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentGames = games.slice(indexOfFirstPost, indexOfLastPost);
  // Change page
  const paginate = pageNumber => setCurrentPage(pageNumber);

  const handleSort = (e) => {
    currentGames.sort((prev, next) => {
      if (prev.title > next.title) {
        return 1
      } else if (prev.title < next.title) {
        return -1
      }
      return 0
    });
    setGames(0);
  }

  const handleChange = async (e) => {
    let value = e.target.value.toString()
    setSearch(value)
  }
  return (
    <section className="home">
      <p className="welcome">Insert the game you want to know more about them or just search by console!</p>
      <div className="inputs">
        <input type="text" name="game_maker" placeholder="Search by game or console!" onChange={handleChange} />
        <select onChange={handleSort} defaultValue="sort" >
          <option disabledValue="sort"></option>
          <option value="name">Name</option>
          <option value="rating">Rating</option>
          <option value="price">Price</option>
        </select>
      </div>
      <article>
        <ProductList currentGames={currentGames} games={games} search={search} />
        <Pagination postsPerPage={postsPerPage} totalGames={games.length} paginate={paginate} />
      </article>
    </section>
  )
};

export default Home;
