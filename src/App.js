import { useEffect, useState } from "react";
import "./App.css";
import { get } from "./components/api/get";

function App() {
  // fetched data with button
  let [users, setUsers] = useState(null);
  let [error, setError] = useState(false);
  let [loading, setLoading] = useState(false);

  const fetchUser = async () => {
    setLoading(true);
    try {
      let res = await fetch("https://jsonplaceholder.typicode.com/users");
      if (res.ok) {
        let users =  await res.json();
        setUsers(users);
      }else{
        throw new Error('Error in connection');
      }
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  
    return (
      <>
        <di>
          <h1> List of users</h1>
        </di>
        <button onClick={fetchUser}>fetch users</button>
        <div>
          {loading ? (
            <h1>loading....</h1>
          ) : error ? (
            <h3> Error {error} </h3>
          ) : (
            users && users.map((user) => <h3 key={user.id}>{user.name}</h3>)
          )}
        </div>{" "}
      </>
    );

  //fetched data with useEffect

  // let [todos, setTodos] = useState(null);
  // let [error, setError] = useState(false);
  // let [loading, setLoading] = useState(true);

  // useEffect( () => {
  //   const fetchData = async () =>{
  //   setLoading(true);
  //   setError(false);
  //   try {
  //     let data = await get('todos');
  //     console.log("loading todos" + todos);
  //     setTodos(data);
  //   } catch (error) {
  //     setError(true);
  //   } finally {
  //     setLoading(false);
  //   }}
  //   fetchData()
  // }, []);
  // // const handleClick = async () => {
  // //   try {
  // //     let data = await get();
  // //     // console.log(todos);

  // //     setTodos(data);
  // //   } catch (error) {
  // //     setError(true);
  // //   } finally {
  // //     setLoading(false);
  // //   }
  // // };
  // if (loading === true) return <h1> loading ....</h1>;
  // else if (error === true) return <h1>something went wrong</h1>;
  // else if (todos.length === 0) return <h1>Todos is empty</h1>;
  // else
  //   return (
  //     <>
  //       <div className="App">
  //         {/* <button onClick={handleClick}>Get Data</button> */}
  //         <ul>
  //           {todos &&
  //             todos.map((todo) => (
  //               <div
  //                 style={{ color: todo.completed ? "red" : "green" }}
  //                 key={todo.id}
  //               >
  //                 {todo.id} {todo.title}{" "}
  //               </div>
  //             ))}
  //         </ul>
  //       </div>
  //     </>
  //   );
}

export default App;
