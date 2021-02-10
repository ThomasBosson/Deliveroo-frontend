import React, { useState, useEffect } from "react";
import "./App.css";

import axios from "axios";
import Header from "./components/Header";
import Menu from "./components/Menu";
import Restaurant from "./components/Restaurant";
import Cart from "./components/Cart";

import { library } from "@fortawesome/fontawesome-svg-core";
import { faStar, faPlus, faMinus } from "@fortawesome/free-solid-svg-icons";
library.add(faStar, faPlus, faMinus);

function App() {
  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(
        "https://thomas-deliveroo-backend.herokuapp.com/"
      );
      // console.log(response.data);
      setData(response.data);
      setIsLoading(false);
    };
    fetchData();
  }, []);

  return isLoading ? (
    <span>En cours de chargement... </span>
  ) : (
    <>
      <div>
        <Header />
        <div className="container">
          <div className="section-1">
            <Restaurant data={data} />
          </div>
        </div>
        <div className="section-2">
          <div className="container">
            <div className="menu">
              {/* On parcours le tableau "catégorie" et on retournera les éléments qui nous intéresse dans le composant Menu.js */}
              {data.categories.map((e, index) => {
                return (
                  <Menu key={index} data={e} cart={cart} setCart={setCart} />
                );
              })}
            </div>
            <div className="cart-box">
              <Cart cart={cart} setCart={setCart} data={data} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
