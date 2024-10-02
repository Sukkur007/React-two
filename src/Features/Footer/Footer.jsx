import React, {useState, useEffect} from "react";
import './Footer.css'

const Footer = () => {
const [data, setData] = useState([])



useEffect(()=>{

},[])

useEffect(()=>{
    
},[data])

useEffect(()=>{
return () => {
    
}
},[])

useEffect(() => {
  const fetchTodo = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/todos")
    const jsonResponse = await response.json()
    setData(jsonResponse)
  }
  fetchTodo()
},[])

const handleClick = (e, index) => {
  setData(data.filter((v, ind) => ind !== index));
}

return (
  <div>
   <h1>Table data</h1>
    <table>
      <thead>
        <th></th>
      </thead>
      <tbody>
        {
          data.splice(0,6).map((item, index) => (
            <tr key={index}>
              <td>{item.userId}</td>
              <td>{item.id}</td>
              <td>{item.title}</td>
              <td>{item.completed ? "true" : "false"}</td>
              <td>
                <button onClick={(e) => handleClick(e, index)}>Action</button>
              </td>
            </tr>
          ))
        }
      </tbody>
    </table>
  </div>
)
}

export default Footer;