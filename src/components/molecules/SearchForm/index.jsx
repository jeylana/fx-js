import { useState } from "react";
import React from "react";
import { fetchFilteredElephants } from "../../../service/elephantService";
import { Button } from "../../atoms/button";
import { Select } from "../../atoms/dropdown";
import "./style.css";

export default function SearchForm(props) {
  const [category, setCategory] = useState("");
  const [speciesFilter, setSpeciesFilter] = useState("");
  const [sexFilter, setSexFilter] = useState("");
  const [err, setErr] = useState(false);

  const reset = () => {
    setSpeciesFilter("");
    setSexFilter("");
  };

  async function handleSearchFilter(e) {
    const filter = speciesFilter || sexFilter;

    const result = await fetchFilteredElephants(category, filter);
    if (result.length > 0) {
      console.log(result);
      setErr(false);
      await props.filterElephants(result);
      reset();
    } else {
      setErr("No Elephant Found!");
    }
  }

  return (
    <div className=" select-container">
      <Select
        name="Sex"
        label="Select gender"
        options={["Male", "Female"]}
        value={sexFilter}
        setValue={(v) => {
          setSexFilter(v);
          setCategory("sex");
        }}
      />

      <Select
        name="Species"
        label="Select species"
        options={["African", "Asian"]}
        value={speciesFilter}
        setValue={(v) => {
          setSpeciesFilter(v);
          setCategory("species");
        }}
      />

      <Button onClick={handleSearchFilter}>Search</Button>
    </div>
  );
}
