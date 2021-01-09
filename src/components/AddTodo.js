import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { add_todo } from "../redux/actions";
import { useDispatch } from "react-redux";

const AddTodo = () => {
  const dispatch = useDispatch();
  const [input, setInput] = useState("");
  const handleInput = (e) => {
    e.preventDefault();
    dispatch(add_todo(input));
    setInput("");
  };

  return (
    <div>
      <input
        className="inputAdd"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <Button variant="dark" type="submit" onClick={handleInput}>
        +
      </Button>
    </div>
  );
};
export default AddTodo;
