import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ElephantMoreData from "../components/ElephantMoreData";
import { fetchSingleElephant } from "../service/elephantService";

export const ElephantInfo = (props) => {
  const [elephantData, setElephantData] = useState();

  const { index } = useParams();

  const getElephant = async () => {
    setElephantData(await fetchSingleElephant(index));
  };
  useEffect(() => {
    getElephant();
  }, []);

  if (!elephantData) {
    return null;
  }

  return <ElephantMoreData data={elephantData} />;
};

export default ElephantInfo;
