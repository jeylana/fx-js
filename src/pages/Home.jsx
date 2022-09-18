import "regenerator-runtime/runtime";

import React, { useState, useEffect } from "react";
import Card from "../components/Card";
import SearchForm from "../components/molecules/SearchForm";

import { fetchAllElephants } from "../service/elephantService";

export const Home = () => {
  const [data, setData] = useState([]);

  const getElephantsAndSet = async () => {
    setData(await fetchAllElephants());
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

  function filterElephants(filteredElephants) {
    setData(filteredElephants);
  }

  return (
    <div>
      <div
        style={{
          display: "grid",
          rowGap: "10px",
          columnGap: "20px",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
        }}
      >
        <h1>Elephant Information</h1>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            rowGap: "10px",
          }}
        >
          <SearchForm filterElephants={filterElephants} />
        </div>
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
