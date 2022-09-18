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
  const { name, affiliation, species, sex, fictional, dob, dod, image, note } =
    props.data;

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
      />
      <h1>{name}</h1>
      <h3>{species}</h3>
      <h3>{sex}</h3>
      <Link
        to="/elephant-info"
        state={{
          elephantInfo: {
            name,
            affiliation,
            species,
            sex,
            fictional,
            dob,
            dod,
            image,
            note,
          },
        }}
      >
        Learn more about {name}!
      </Link>
    </div>
  );
};

export default Card;
