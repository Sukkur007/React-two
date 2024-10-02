import React, {useState } from "react";


// const Basehooks = () => {
//     const [count, setCount] = useState(0);
//     const [person, setPerson] = useState({firstName: '', lastName: ''});


//     const increaseFive = () => {
//         for (let i = 0; i < 5; i++) {
//             setCount(prevState => prevState  + 1)

//         }
//     }
//     return (
//         <>

//         <div>
//             <button onClick={() => setCount(count + 1)}>click</button>
//             <p>current value {count}</p>
//             <button onClick={() => increaseFive()}>submit 5</button>
//             <hr/>
//             <input type="text" onChange = {(e) => setPerson({...person, firstName: e.target.value})} placeholder="Enter firstName"/>
//             <input type="text" onChange = {(e) => setPerson({...person, lastName: e.target.value})}placeholder="Enter lastName"/>
//             {JSON.stringify(person)}
//             <p>firstName valu is: {person.firstName}</p>
//             <p>LastName valu is: {person.lastName}</p>
//         </div>
//         </>
//     )
// }


// export default Basehooks;

// muliple letters in word ==========================================================>
// function StringCompressor() {
//     const [output, setOutput] = useState('');

//     const handleChange = () => {
//         setOutput(compressString("aaafffgggfr"));
//     };

//     function compressString(input) {
//         let result = '';
//         let count = 1;
    
//         for (let i = 0; i < input.length; i++) {
//             if (input[i] === input[i + 1]) {
//                 count++;
//             } else {
//                 result += input[i] + (count > 1 ? count : '1');
//                 count = 1;
//             }
//         }
    
//         return result;
//     }
    

//     return (
//         <div>
//             <h1>String Compressor</h1>
//             <button onClick={handleChange}>click</button>
//             <p>Output: {output}</p>
//         </div>
//     );
// }

// export default StringCompressor;


// const CompressString = () => {
//   const [input, setInput] = useState("aaavvccfr");
//   const [output, setOutput] = useState("");

//   const compressString = (str) => {
//     let result = "";
//     let count = 1;
    
//     for (let i = 0; i < str.length; i++) {
//       if (str[i] === str[i + 1]) {
//         count++;
//       } else {
//         result += str[i] + (count > 1 ? count : "");
//         count = 1;
//       }
//     }
//     return result;
//   };

//   const handleCompress = () => {
//     const compressed = compressString(input);
//     setOutput(compressed);
//   };

//   return (
//     <div>
//       <h1>String Compressor</h1>
//       <input 
//         type="text" 
//         value={input} 
//         onChange={(e) => setInput(e.target.value)} 
//       />
//       <button onClick={handleCompress}>Compress</button>
//       <p>Output: {output}</p>
//     </div>
//   );
// };

// export default CompressString;

// crud opereator ====================================================================================>
const ItemManager = () => {
    const [items, setItems] = useState([]);
    const [newItem, setNewItem] = useState('');
  const [editIndex, setEditIndex] = useState(null);
  const [editValue, setEditValue] = useState('');

  const handleAdd = () => {
    if (newItem.trim() !== '') {
      setItems([...items, newItem]);
      setNewItem('');
    }
  };

  const handleDelete = (index) => {
    setItems(items.filter((_, i) => i !== index));
  };

  const handleEdit = (index) => {
    setEditIndex(index);
    setEditValue(items[index]);
  };

  const handleSave = (index) => {
    const updatedItems = items.map((item, i) => (i === index ? editValue : item));
    setItems(updatedItems);
    setEditIndex(null);
    setEditValue('');
  };

  return (
    <div>
      <h1>Item Manager</h1>
      <input
        type="text"
        value={newItem}
        onChange={(e) => setNewItem(e.target.value)}
      />
      <button onClick={handleAdd}>Add Item</button>
      <ul>
        {items.map((item, index) => (
          <li key={index}>
            {editIndex === index ? (
              <input
                type="text"
                value={editValue}
                onChange={(e) => setEditValue(e.target.value)}
              />
            ) : (
              item
            )}
            <button onClick={() => handleDelete(index)}>Delete</button>
            {editIndex === index ? (
              <button onClick={() => handleSave(index)}>Save</button>
            ) : (
              <button onClick={() => handleEdit(index)}>Edit</button>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ItemManager;


