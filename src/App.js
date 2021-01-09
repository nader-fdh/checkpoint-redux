import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import AddTodo from "./components/AddTodo";
import TodoList from "./components/TodoList";
import Filter from "./components/Filter";

function App() {
  return (
    <div className="App-header">
      <h1>Todo List</h1>
      <Filter />
      <AddTodo />
      <TodoList />
    </div>
  );
}

export default App;
