import React, {useState, useRef, useEffect} from "react";


const useFetch = (url) => {
    const [data, setdata] = useState('');

    
   useEffect(() => {
      const fetchTodo = async () => {
         const response = await fetch(url)
         const jsonResponse = await response.json()
         setdata(jsonResponse);
      }

      fetchTodo()
   },[url]);

    return {data}
}

export default useFetch;