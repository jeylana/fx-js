import "regenerator-runtime/runtime";

import React, { useState, useEffect } from "react";
import Card from "../components/Card";
import SearchForm from "../components/SearchForm";

import { getAllElephants } from "../service/elephantService";

export const Home = () => {
  const [data, setData] = useState([]);

  const getElephantsAndSet = async () => {
    setData(await getAllElephants());
  };

  useEffect(() => {
    getElephantsAndSet();
  }, []);

  function printElephantData() {
    return data.map((info, i) => {
      if (info.image) {
        return <Card key={i} data={info} />;
      } else return;
    });
  }

  function getFilterElephants(filteredElephants) {
    setData(filteredElephants);
  }

  return (
    <div>
      <h1>Elephants</h1>
      <div>
        {/* <SearchForm
        // getFilterElephants={getFilterElephants}
        /> */}
      </div>
      <div
        className="App"
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr 1fr",
          rowGap: "10px",
          columnGap: "20px",
        }}
      >
        {printElephantData()}
      </div>
    </div>
  );
};

export default Home;
