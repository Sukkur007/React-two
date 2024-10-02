import React, { useState, useRef, useEffect, useReducer, useMemo } from "react";
// use Reducer ===============================================================================>

// const UserForm = () => {
//   // Initial State
//   const userState = {
//     username: "",
//     email: "",
//     password: "",
//     age: 0,
//     student: false,
//   };

//   // Reducer
//   const formReducer = (state, action) => {
//     switch (action.type) {
//       case "HANDLE_INPUT":
//         return {
//           ...state,
//           [action.field]: action.payload,
//         };
//       case "HANDLE_BOOL_INPUT":
//         console.log("HANDLE_BOOL_INPUT");
//         return {
//           ...state,
//           student: action.payload,
//         };
//       default:
//         return state;
//     }
//   };

//   // useReducer
//   const [formState, dispatch] = useReducer(formReducer, userState);

//   // dispatch functions
//   const handleTextChange = (e) => {
//     dispatch({
//       type: "HANDLE_INPUT",
//       field: e.target.name,
//       payload: e.target.value,
//     });
//   };

//   const handleNumberChange = (e) => {
//     dispatch({
//       type: "HANDLE_INPUT",
//       field: e.target.name,
//       payload: Number(e.target.value),
//     });
//   };

//   const handleBool = () => {
//     console.log("handlebool");
//     dispatch({
//       type: "HANDLE_BOOL_INPUT",
//       field: "student",
//       payload: !formState.student,
//     });
//   };

//   // Form Submission
//   const handleFormSubmit = (e) => {
//     console.log("handle form submit");
//     e.preventDefault();
//     console.log(formState);
//   };

//   return (
//     <form onSubmit={handleFormSubmit}>
//       <label name="name">
//         Name:
//         <br />
//         <input
//           type="text"
//           value={formState.username}
//           name="username"
//           onChange={handleTextChange}
//         />
//       </label>
//       <br />

//       <label name="email">
//         Email:
//         <br />
//         <input
//           type="text"
//           value={formState.email}
//           name="email"
//           onChange={handleTextChange}
//         />
//       </label>
//       <br />

//       <label name="password">
//         Password:
//         <br />
//         <input
//           type="password"
//           name="password"
//           value={formState.password}
//           onChange={handleTextChange}
//         />
//       </label>
//       <br />

//       <label name="age">
//         Age:
//         <br />
//         <input
//           type="text"
//           name="age"
//           value={formState.age}
//           onChange={handleNumberChange}
//         />
//       </label>
//       <br />
//       <label name="student">
//         Student:
//         <br />
//         <input
//           type="checkbox"
//           name="student"
//           checked={formState.student}
//           onChange={handleBool}
//         />
//       </label>
//       <br />

//       <button type="submit">Submit</button>
//     </form>
//   );
// };

// export default UserForm;

// const App = () => {

//   const counterReducer = (state, action) => {  
//    switch (action.type) {
//       case "INCREMENT": 
//       return { count: state.count + action.payload};
//       case "DECREMENT": 
//       return { count: state.count - action.payload };
//       case "RESET": 
//       return { count: 0};
//       default:
//         throw Error ("Invalid action");
//    }
// }


//    const [state, dispatch] = useReducer(counterReducer, {count:0})

//    return(
//       <>
//       <h1>Counter: {state.count}</h1>
//          <button onClick={() => dispatch({type: "INCREMENT", payload:10})}>StartRedu</button>
//          <button onClick={() => dispatch({type: "DECREMENT", payload:10})}>PauseRedu</button>
//          <button onClick={() => dispatch({type: "RESET"})}>restartRedu</button>
//       </>
//       )
   
// }

// export default App

// use Memo ===============================================================================>


//  const Home = () => {
//   // State
//   const [count, setCount] = useState(0);
//   const [todos, setTodos] = useState([]);

//   //Expensive Function

// //   const calculation = simpleCalculation(count);


//   const calculation = useMemo(() => expensiveCalculation(count),[count]);

//   const increment = () => {
//     setCount((prevCount) => prevCount + 1);
//   };
//   const addTodo = () => {
//     setTodos((prevState) => [...prevState, "New Todo"]);
//   };

//   return (
//     <div>
//       <div>
//         <h2>My Todos </h2>
//         {todos.map((todo, index) => (
//           <p key={index}>{todo}</p>
//         ))}
//         <button onClick={addTodo}>Add Todo</button>
//       </div>
//       <hr />
//       <div>
//         Count: {count}
//         <button onClick={increment}> + </button>
//         <h2>Costly Calculation</h2>
//         {calculation}
//       </div>
//     </div>
//   );
  
// };

// export default Home;


// const expensiveCalculation = (num) => {
//   console.log("Calculating...");
//   for (let i = 0; i < 1000000000; i++) {
//     num += 1;
//   }
//   return num;
// };

// const simpleCalculation = (num) => {
//   console.log("I am simple function...");
//   for (let i = 0; i < 10; i++) {
//     num += 1;
//   }
//   return num;
// }

const Home = () => {
   const [count, setCount] = useState(10);
   const [arr, setArr] = useState([1,2,3,4,5]);

  const showMax = () => {
    console.log("changing Max")
    return Math.max(...arr);
  }
const memoVal = useMemo(() => showMax(),[arr])

   return (
      <div>
         <button onClick={() => setCount(count + 1)}>Click</button>
          <button onClick={() => setArr([...arr,Math.round(count * Math.random())])}>change array</button>
        <p>{JSON.stringify(arr)}</p>

        <p>{count}</p>
        <p>{memoVal}</p>

      </div>
     
   )
}

export default Home;










