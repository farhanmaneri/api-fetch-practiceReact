import { useEffect, useState } from "react";
import "./App.css";
import { get } from "./components/api/get";

function App() {
  let [todos, setTodos] = useState(null);
  let [error, setError] = useState(false);
  let [loading, setLoading] = useState(true);

  useEffect( () => {
    const fetchData = async () =>{
    setLoading(true);
    setError(false);
    try {
      let data = await get('todos');
      console.log("loading todos" + todos);
      setTodos(data);
    } catch (error) {
      setError(true);
    } finally {
      setLoading(false);
    }}
    fetchData()
  }, []);
  // const handleClick = async () => {
  //   try {
  //     let data = await get();
  //     // console.log(todos);

  //     setTodos(data);
  //   } catch (error) {
  //     setError(true);
  //   } finally {
  //     setLoading(false);
  //   }
  // };
  if (loading === true) return <h1> loading ....</h1>;
  else if (error === true) return <h1>something went wrong</h1>;
  else if (todos.length === 0) return <h1>Todos is empty</h1>;
  else
    return (
      <>
        <div className="App">
          {/* <button onClick={handleClick}>Get Data</button> */}
          <ul>
            {todos &&
              todos.map((todo) => (
                <div
                  style={{ color: todo.completed ? "red" : "green" }}
                  key={todo.id}
                >
                  {todo.id} {todo.title}{" "}
                </div>
              ))}
          </ul>
        </div>
      </>
    );
}

export default App;
