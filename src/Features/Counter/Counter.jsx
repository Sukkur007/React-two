import React, { useState, useRef, useEffect } from "react";

// const Counter = () => {
//     const [time, setTime] = useState(0);
//     const text = useRef();
// // use effect no need to use--------
//     // useEffect(() => {
//     //     handleFunction()
//     //     return () => clearInterval(text.current);
//     // }, []);

//     const handleFunction = () => {
//         text.current = setInterval (() => {
//             setTime((pre) => pre + 1)
//         }, 1000)
//     }

//     return (
//         <div>
//             <h1>Counter: {time}</h1>
//             <button onClick={() => handleFunction()}>Start</button>
//             <button onClick={() => clearInterval(text.current)}>Pause</button>
//             <button onClick={() => {clearInterval(text.current);setTime(0)}}>Restart</button>
//         </div>
//     );
// };

// export default Counter;

// const Counter = () => {
//     const [time, setTime] = useState(0);
//     const [running, setRunning] = useState(false);

//     useEffect(() => {
//         let interVal;
//         if (running) {
//             interVal = setInterval(() => {
//                 setTime((pre) => pre + 1)
//             }, 1000)
//         }
//         return () => {
//             clearInterval(interVal)
//         }
//     },[running])

//     const startFun = () => {
//         setRunning(true)
//     }

//     const pauseFun = () => {
//         setRunning(false)
//     }

//     const restartFun = () => {
//         setTime(0)
//         setRunning(false)
//     }

//     return (
//         <div>
//             <h1>Counter: {time}</h1>
//             <button onClick={startFun}>Start</button>
//             <button onClick={pauseFun}>Pause</button>
//             <button onClick={restartFun}>restart</button>
//         </div>
//     );
// };

// export default Counter;

// const Counter = () => {
//   const [time, setTime] = useState({ ms: 0, s: 0, m: 0, h: 0 });
//   const { ms, s, m, h } = time;

//   const [inter, setInter] = useState();
//   const [status, setStatus] = useState(0);

//   var updatedMs = time.ms,
//     updatedM = time.m,
//     updatedS = time.s,
//     updatedH = time.h;

//     const Start = () => {
//         setInter(setInterval(run, 10))
//         setStatus(1)
//     }

//     const Stop = () => {
//         clearInterval(inter)
//         setStatus(0)
//     }

//     const Restart = () => {
//         clearInterval(inter)
//         setStatus(0)
//         setTime({ ms: 0, s: 0, m: 0, h: 0 })
//     }

//     const run = () => {
//         if (updatedM === 60) {
//             updatedM = 0;
//             updatedH++;
//         }
//         if (updatedS === 60) {
//             updatedS = 0;
//             updatedM++;
//         }
//         if (updatedMs === 100) {
//             updatedMs = 0;
//             updatedS++;
//         }
//         updatedMs++;

//         return setTime({ ms: updatedMs, s: updatedS, m: updatedM, h: updatedH})

//     }

//   return (
//     <div>
//       <h1>STOP WATCH</h1>
//       <div>
//         <span>{h > 10 ? h : "0" + h}</span>:
//         <span>{m > 10 ? m : "0" + m}</span>:
//         <span>{s > 10 ? s : "0" + s}</span>:
//         <span>{ms > 10 ? ms : "0" + ms}</span>
//         {status === 0 && <div><button onClick={Start}>Start</button></div>}
//         {status === 1 && 
//         <div>
//             <button onClick={Stop}>Stop</button>
//             <button onClick={Restart}>Restart</button>
//         </div>}
//       </div>
//     </div>
//   );
// };

// export default Counter;


const Stopwatch = () => {
  const [time, setTime] = useState(0);
  const [isActive, setIsActive] = useState(false);
  const intervalRef = useRef(null);

  const start = () => {
    if (!isActive) {
      setIsActive(true);
      intervalRef.current = setInterval(() => {
        setTime(prevTime => prevTime + 10);
      }, 10);
    }
  };

  const stop = () => {
  
      clearInterval(intervalRef.current);
      setIsActive(false);
   
  };

  const reset = () => {
    clearInterval(intervalRef.current);
    setIsActive(false);
    setTime(0);
  };

  const formatTime = (time) => {
    const milliseconds = ("0" + (Math.floor(time / 10) % 100)).slice(-2);
    const seconds = ("0" + (Math.floor(time / 1000) % 60)).slice(-2);
    const minutes = ("0" + (Math.floor(time / 60000) % 60)).slice(-2);
    const hours = ("0" + Math.floor(time / 3600000)).slice(-2);

    return `${hours}:${minutes}:${seconds}:${milliseconds}`;
  };

  return (
    <div>
      <h1>{formatTime(time)}</h1>
      {/* <h1>{new Date(time * 1000).toISOString().substr(11, 8)}</h1> */}
      <button onClick={start}>Start</button>
      <button onClick={stop}>Stop</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
};

export default Stopwatch;

