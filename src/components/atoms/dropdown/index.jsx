import React from "react";
import "./style.css";

export const Select = ({ name, options, label, value, setValue }) => {
  return (
    <>
      <select
        className="select-menu"
        name={name}
        value={value}
        onChange={(e) => setValue(e.target.value)}
      >
        <option value="">{label}</option>
        {options.map((opt) => (
          <option key={opt} value={opt}>
            {opt}
          </option>
        ))}
      </select>
    </>
  );
};
