import React from "react";
import Card from "react-bootstrap/Card";

const ElephantMoreData = (props) => {
  const { name, affiliation, species, sex, dob, dod, image, note } = props.data;

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
      <Card.Title>{affiliation}</Card.Title>
      <Card.Text>{species}</Card.Text>
      <Card.Text>{sex}</Card.Text>
      <Card.Text>{note}</Card.Text>
      {dob} - {dod}
    </div>
  );
};

export default ElephantMoreData;
