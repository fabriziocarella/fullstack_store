// Own components
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import Footer from './components/Footer/Footer';
// 3rd party components
import React, { useState } from 'react'
import { BrowserRouter } from 'react-router-dom';
import { productContext } from './context/productContext';


function App() {
  const [games, setGames] = useState([])
  const videogames = { games, setGames }

  return (
    <div className="app">
      <BrowserRouter>
        <productContext.Provider value={videogames}>
          <Header />
          <Main />
        </productContext.Provider>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
