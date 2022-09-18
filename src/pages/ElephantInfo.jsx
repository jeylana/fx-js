import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import ElephantMoreData from "../components/ElephantMoreData";

export const ElephantInfo = (props) => {
  const location = useLocation();
  const [elephantData, setElephantData] = useState();

  useEffect(() => {
    const { elephantInfo } = location.state;

    setElephantData(elephantInfo);
  }, []);

  return (
    <div>{!!elephantData && <ElephantMoreData data={elephantData} />}</div>
  );
};

export default ElephantInfo;
