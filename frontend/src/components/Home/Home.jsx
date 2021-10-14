import React, { useEffect, useState, useContext } from "react";
import axios from "axios";

import ProductList from "../ProductList/ProductList";
import { productContext } from "../../context/productContext";

const Home = () => {
  const { games, setGames } = useContext(productContext)
  const { search, setSearch } = useContext(productContext)
  useEffect(() => {
    (() => {
      try {
        axios.get(`http://localhost:5000/api/products/`)
          .then(response => {
            setGames(games.concat(response.data))            
            console.log(games);
          })
      } catch (e) {
        console.log(e);
      }
    })();
  }, []);


  // useEffect(() => {
  //   const fetchPosts = async () => {
  //     setLoading(true);
  //     const res = await axios.get('http://localhost:3002/api/items/%27); 
  //     setPosts(res.data);
  //     console.log(res.data)
  //     setLoading(false)
  //   }
  //   fetchPosts();
  // }, []);


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
      <ProductList games={games} />
    </section>
  )
};

export default Home;
