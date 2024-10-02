import React, {useState, useRef, useEffect} from "react";


// import styled from 'styled-components'


// const Apiprop = () => {
//     const [counterArr, setCounterArr] = useState([
//       {id: 1,count: 0},
//       {id: 2,count: 0},
//       {id: 3,count: 0},
//     ]);
//     const addNum = (eve) => {
//       const updateArr = counterArr.map((item)=>{
//         if(eve === item.id ) {

//           return {id: eve,count: item.count + eve}
//         } else {
//           return item;
//         }
//       })
//       setCounterArr(updateArr);
//     };
  
//     return (
//         <div className='App'>

//       {
//         counterArr.map((e, index) => (
//           <div key={index + 1}>
//             <div>Counter {index + 1} : {e.count}</div>
//             <button onClick={() => addNum(index + 1)}>  {index + 1} </button>
//           </div>
//         ))
//       }
//     </div>
//     )
// }

// export default Apiprop;

const Apiprop = ({num}) => {
  const [count, setCount] = useState(0);

  const handleFun = () => {
    setCount(count + num)
  }
  

  return (
      <div className='App'>
        <div>Counter {num}: {count}</div>
        <button onClick={handleFun}>click{num}</button>
    
  </div>
  )
}

export default Apiprop;


