import { useState } from "react";
import { getFilteredElephants } from "../service/elephantService";

export default function SearchForm(props) {
  //   const [category, setCategory] = useState("");
  //   const [filter, setFilter] = useState("");

  //   async function handleSearchFilter(e) {
  //     const result = await getFilteredElephants(filter, category);
  //     if (result.length > 0) {
  //       console.log(result);
  //       setErr(false);
  //       await props.getFilterPlants(result);
  //     } else {
  //       setErr("No Elephant Found!");
  //     }
  //   }

  return (
    <div class="dropdown">
      <button onclick="myFunction()" class="dropbtn">
        Dropdown
      </button>
      <div id="myDropdown" class="dropdown-content">
        <input
          type="text"
          placeholder="Search.."
          id="myInput"
          onkeyup="filterFunction()"
        ></input>
        <a href="#about">About</a>
        <a href="#base">Base</a>
        <a href="#blog">Blog</a>
        <a href="#contact">Contact</a>
        <a href="#custom">Custom</a>
        <a href="#support">Support</a>
        <a href="#tools">Tools</a>
      </div>
    </div>
  );
}
