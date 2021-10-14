import React, { useEffect, useState, useContext } from "react";
import axios from "axios";

import Pagination from "../Pagination/Pagination";
import ProductList from "../ProductList/ProductList";
import { productContext } from "../../context/productContext";

const Home = () => {
  const { games, setGames } = useContext(productContext)
  const { search, setSearch } = useContext(productContext)

  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(10);

  useEffect(() => {
    (() => {
      try {
        setLoading(true);
        axios.get(`http://localhost:5000/api/products/`)
          .then(response => {
            setGames(games.concat(response.data))
            setLoading(false);
            // console.log(games);
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
  // const handleChange = async (e) => {
  //   setSearch(e.target.value)
  //   await new Promise(resolve => setTimeout(resolve, 4000))
  //   e.target.value = ""
  // }
  // onChange={handleChange}
  return (
    <section className="home">
      <p>Insert the game you want to know more about them or just search by console!</p>
      <div>
        <input type="text" name="game_maker" placeholder="Search by game or console!" />
        <input type="button" value="Search!" />
      </div>
      <ProductList currentGames={currentGames} loading={loading} />
      <Pagination postsPerPage={postsPerPage} totalGames={games.length} paginate={paginate} />
    </section>
  )
};

export default Home;
