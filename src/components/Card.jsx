import React from "react";
import { Link } from "react-router-dom";

/**
 * This should be a React component that, at the very least, comprises an image component a title and a description or subheading.
 *
 * @param props
 * @returns
 *
 */
const Card = (props) => {
  const {
    name,
    affiliation,
    species,
    sex,
    fictional,
    dob,
    dod,
    wikilink,
    image,
    note,
  } = props.data;

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "15px",
        color: "#333",
        border: "solid 1px #333",
        borderRadius: "5px",
      }}
    >
      <div
        style={{
          width: "90%",
          height: "200px",
          backgroundImage: `url(${image})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      ></div>
      <h1>{name}</h1>
      <h2>{species}</h2>
      <h2>
        {dob} - {dod}
      </h2>
      <Link to="/elephant-info">Click here to learn more!</Link>
    </div>
  );
};

export default Card;
