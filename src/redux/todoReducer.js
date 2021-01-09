import { v4 as uuidv4 } from "uuid";

let initState = {
  todo: [
    {
      id: uuidv4(),
      title: "sleep",
      isDone: false,
    },
    {
      id: uuidv4(),
      title: "play",
      isDone: false,
    },
    {
      id: uuidv4(),
      title: "work",
      isDone: false,
    },
  ],
  filter: "",
};

function todoReducer(state = initState, action) {
  switch (action.type) {
    case "ADD_TODO":
      return {
        ...state,
        todo: [
          ...state.todo,
          { id: uuidv4(), title: action.payload, isDone: false },
        ],
      };
    case "REMOVE":
      return {
        ...state,
        todo: state.todo.filter((el) => el.id !== action.payload),
      };
    case "COMPLET":
      return {
        ...state,
        todo: state.todo.map((task) =>
          task.id === action.payload ? { ...task, isDone: !task.isDone } : task
        ),
      };
    case "EDIT":
      return {
        ...state,
        todo: state.todo.map((task) =>
          task.id === action.payload.id
            ? { ...task, title: action.payload.title }
            : task
        ),
      };
    case "FILTER":
      return { ...state, filter: action.payload };

    default:
      return state;
  }
}

export default todoReducer;
