import "./App.css";
import TodoCreate from "./components/TodoCreate";
import TodoList from "./components/TodoList";

function App() {
  return (
    <div className="App">
      <div style={{ height: "90vh" }}>
        <TodoCreate />
        <TodoList />
      </div>
    </div>
  );
}

export default App;
