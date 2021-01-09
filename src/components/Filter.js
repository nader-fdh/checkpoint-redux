import React from "react";
import { filter } from "../redux/actions";
import { useDispatch } from "react-redux";
const Filter = () => {
  const dispatch = useDispatch();
  const handleFilter = (e) => {
    dispatch(filter(e.target.value));
  };
  return (
    <div>
      <input
        type="radio"
        name="filter"
        id="all"
        value="all"
        onChange={handleFilter}
      />
      <label htmlFor="all">all</label>
      <input
        type="radio"
        name="filter"
        id="done"
        value="done"
        onChange={handleFilter}
      />
      <label htmlFor="done">done</label>
      <input
        type="radio"
        name="filter"
        id="undone"
        value="undone"
        onChange={handleFilter}
      />
      <label htmlFor="undone">undone</label>
    </div>
  );
};

export default Filter;
