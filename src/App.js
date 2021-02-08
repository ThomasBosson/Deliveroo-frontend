import React, { useState, useEffect } from "react";
import "./App.css";

import axios from "axios";
import Header from "./components/Header";
import Menu from "./components/Menu";
import Restaurant from "./components/Restaurant";

function App() {
  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  const fetchData = async () => {
    const response = await axios.get(
      "https://thomas-deliveroo-backend.herokuapp.com/"
    );
    // console.log(response.data);
    setData(response.data);
    setIsLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return isLoading ? (
    <span>En cours de chargement... </span>
  ) : (
    <>
      <div className="container">
        <Header />
        <div className="section-1">
          <Restaurant data={data} />
        </div>
        <div className="section-2">
          <div className="menu">
            {data.categories.map((e) => {
              return <Menu data={e} />;
            })}
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
