import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { complet, remove, edit } from "../redux/actions";

const Task = ({ id, title, isDone }) => {
  const [formInput, setFormInput] = useState(false);
  const [input, setInput] = useState("");
  const dispatch = useDispatch();
  const handleChange = (e) => {
    e.preventDefault();
    setFormInput(false);
    dispatch(edit(id, input));
    setInput("");
  };
  return (
    <div className="titleTask">
      <div>{title}</div>
      {formInput ? (
        <span>
          <input value={input} onChange={(e) => setInput(e.target.value)} />
          <Button className="btn" variant="primary" onClick={handleChange}>
            change
          </Button>
        </span>
      ) : (
        <Button
          className="btn"
          variant="primary"
          onClick={() => setFormInput(true)}
        >
          Edit
        </Button>
      )}

      {isDone ? (
        <Button
          className="btn"
          variant="warning"
          onClick={() => dispatch(complet(id))}
        >
          unDone
        </Button>
      ) : (
        <Button
          className="btn"
          variant="success"
          onClick={() => dispatch(complet(id))}
        >
          Done
        </Button>
      )}
      <Button
        className="btn"
        variant="danger"
        onClick={() => dispatch(remove(id))}
      >
        Remove
      </Button>
    </div>
  );
};

export default Task;
