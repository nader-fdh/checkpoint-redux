export const add_todo = (input) => {
  return {
    type: "ADD_TODO",
    payload: input,
  };
};

export const remove = (id) => {
  return { type: "REMOVE", payload: id };
};

export const complet = (id) => {
  return { type: "COMPLET", payload: id };
};

export const edit = (id, title) => {
  return {
    type: "EDIT",
    payload: { id, title },
  };
};

export const filter = (filter) => {
  return {
    type: "FILTER",
    payload: filter,
  };
};
