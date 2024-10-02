import React from "react";
import useFetch from "../useFetch";

const Home = () => {
    const {data} = useFetch("https://api.thedogapi.com/v1/images/search?limit=50")
     return (
        <>
        {
          data && data.map((item) => {
             return <h3 key={item.id}>{item.url}</h3>
          })
        }
        </>
         
     )
 }
 export default Home;