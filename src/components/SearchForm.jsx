import { useState } from "react";
import React from "react";
import { fetchFilteredElephants } from "../service/elephantService";
import { Button } from "react-bootstrap";

export default function SearchForm(props) {
  const [category, setCategory] = useState("");
  const [filter, setFilter] = useState("");
  const [err, setErr] = useState(false);

  async function handleSearchFilter(e) {
    const result = await fetchFilteredElephants(category, filter);
    if (result.length > 0) {
      console.log(result);
      setErr(false);
      await props.filterElephants(result);
    } else {
      setErr("No Elephant Found!");
    }
  }

  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          columnGap: "20px",
          justifyContent: "space-around",
          paddingBottom: "20px",
        }}
      >
        <div>
          <input
            className="form-control"
            list="sexOptions"
            onChange={(e) => {
              setFilter(e.target.value);
              setCategory("sex");
            }}
            placeholder="Search by gender..."
          />
          <datalist id="sexOptions">
            <option value="Male" />
            <option value="Female" />
          </datalist>
        </div>

        <div>
          <input
            className="form-control"
            list="speciesOptions"
            onChange={(e) => {
              setFilter(e.target.value);
              setCategory("species");
            }}
            placeholder="Search by species ..."
          />
          <datalist id="speciesOptions">
            <option value="Asian" />
            <option value="African" />
          </datalist>
        </div>
        <Button
          type="button"
          variant="secondary"
          size="lg"
          onClick={handleSearchFilter}
        >
          Search
        </Button>
      </div>
    </>
  );
}
