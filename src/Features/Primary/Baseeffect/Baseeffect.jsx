import React, { useState, useEffect, useRef } from 'react';

// const Baseeffect = () => {
//   const [list, setList] = useState([
//     { name: 'sukure' },
//     { name: 'santhosh' },
//     { name: 'pawan' },
//   ]);

//   const [highlight, setHighlight] = useState(false);

//   const toggleHighlight = () => {
//     setHighlight(!highlight);
//   };

//   return (
//     <div>
//       <h1>List of Names</h1>  
//       <ul>
//         {
//             list.map((item, index) => (
//                 <li key={index} style={index === 0 && highlight ? { backgroundColor: 'red' } : {}}>{item.name}</li>
//             ))
//         }

//         <button onClick={toggleHighlight}>{highlight ? 'Remove highlight' : 'highlight'}</button>
//       </ul>
//     </div>
//   );
// };

// export default Baseeffect;


// const Baseeffect = () => {
//   const [list, setList] = useState([
//     { name: 'sukure' },
//     { name: 'santhosh' },
//     { name: 'pawan' },
//   ]);

//   const [change, setChange] = useState(Array(list.length).fill(false));

 

//   const toggleHighlight = (e) => {
//     const newHighlightedItems = [...change];

//     newHighlightedItems[e] = !newHighlightedItems[e];

//     setChange(newHighlightedItems);


//   };

//   return (
//     <div>
//       <h1>List of Names</h1>
//       <ul>
//         {list.map((item, index) => (
//           <li
//             key={index}
//             style={change[index] ? { backgroundColor: 'yellow' } : {}}  
//           >
//             {item.name}
//             <button onClick={() => toggleHighlight(index)}>
//               {change[index] ? 'Remove Highlight' : 'Highlight'}
//             </button>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default Baseeffect;




// const Baseeffect = () => {
//   const [list, setList] = useState([
//     { name: 'sukure' },
//     { name: 'santhosh' },
//     { name: 'pawan' },
//   ]);

//   const [newItem, setNewItem] = useState('');

//   const addItem = () => {
//     if (newItem.trim()) {
//       setList([...list, { name: newItem }]);
//       setNewItem('');
//     }
//     
//   };

//   return (
//     <div>
//       <h1>List of Names</h1>
//       <ul>
//         {list.map((item, index) => (
//           <li key={index}>{item.name}</li>
//         ))}
//       </ul>
//       <input
//         type="text" value={newItem}  
        
//         onChange={(e) => setNewItem(e.target.value)}
//         placeholder="Enter new name"
//       />
//       <button onClick={addItem}>Add</button>
//     </div>
//   );
// };

// export default Baseeffect;

// const Baseeffect = () => {
//     const [users, setUsers] = useState([
//         {
//             name: 'sukkur',
//             email: 'suk@gmail.com',
//             id: 1
//         },
//         {
//             name: 'kumar',
//             email: 'kum@gmail.com',
//             id: 2
//         },
//         {
//             name: 'ramya',
//             email: 'ram@gmail.com',
//             id: 3
//         }
//     ]);

//     const [newUser, setNewUser] = useState({
//         name: '',
//         email: '',
//         id: ''
//     });

//     const handleChange = (e) => {
//         const { name, value } = e.target;  
//         setNewUser((prevUser) => ({...prevUser, [name]: value}));
//     };

//     const addUser = () => {
//         setUsers((prevUsers) => [...prevUsers, { ...newUser, id: users.length + 1 }]);
//         setNewUser({ name: '', email: '', id: '' }); // Reset the form
//     };

//     return (
//         <div>
//             <ul>
//                 {users.map((user, index) => (
//                     <li key={index}>
//                         Name: {user.name}, Email: {user.email}, ID: {user.id || 'N/A'}
//                     </li>
//                 ))}
//             </ul>
//             <div>
//                 <input
//                     type="text"
//                     name="name"
//                     placeholder="Name"
//                     value={newUser.name}
//                     onChange={handleChange}
//                 />
//                 <input
//                     type="email"
//                     name="email"
//                     placeholder="Email"
//                     value={newUser.email}
//                     onChange={handleChange}
//                 />
//                 <button onClick={addUser}>Add User</button>
//             </div>
//         </div>
//     );
// };

// export default Baseeffect;


// const Baseeffect = () => {
//     const [users, setUsers] = useState([
//         {
//             name: 'sukkur',
//             email: 'suk@gmail.com',
//             id: 1
//         },
//         {
//             name: 'kumar',
//             email: 'kum@gmail.com',
//             id: 2
//         },
//         {},
//         {
//             name: 'ramya',
//             email: 'ram@gmail.com',
//             id: 3
//         }
//     ]);

//     const const [newUser, setNewUser] = useState({
//         name: '',
//         email: '',
//         id: ''
//     });

//     const handleChange = (e) => {
//         const { name, value } = e.target;
//         setNewUser((prevDetails) => ({
//             ...prevDetails,
//             [name]: value
//         }));
//     };

//     const addUser = () => {
//         setUsers((prevUsers) => {  
//             return prevUsers.map((user, index) => {
//                 if (Object.keys(user).length === 0) {
//                     return { ...newUser, id: index + 1 }; 
//                 }
//                 return user;
//             });
//         });
//         setNewUser({ name: '', email: '', id: '' }); 
//     };

//     return (
//         <div>
//             <ul>
//                 {users.map((user, index) => (
//                     <li key={index}>
//                         Name: {user.name || 'N/A'}, Email: {user.email || 'N/A'}, ID: {user.id || 'N/A'}
//                     </li>
//                 ))}
//             </ul>
//             <div>
//                 <input
//                     type="text"
//                     name="name"
//                     placeholder="Name"
//                     value={newUser.name}
//                     onChange={handleChange}
//                 />
//                 <input
//                     type="email"
//                     name="email"
//                     placeholder="Email"
//                     value={newUser.email}
//                     onChange={handleChange}
//                 />
//                 <button onClick={addUser}>Update Empty User</button>
//             </div>
//         </div>
//     );
// };

// export default Baseeffect;

// get button ID ----------------------------------------------------------
// const Baseeffect = () => {
//   const [list, setList] = useState([
//     { name: 'sukure' },
//     { name: 'santhosh' },
//     { name: 'pawan' },
//   ]);

//   const handleButtonClick = (asd) => {
//     console.log("id: ", asd);
//   };

//   return (
//     <div>
//       <h1>List of Names</h1>
//       <ul style={{ listStyleType: 'none' }}>
//         {list.map((item, index) => (
//           <li key={index} style={{ display: 'flex', alignItems: 'center' }}>
//             {item.name}
//             <button onClick={() => handleButtonClick(index)}>click</button>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default Baseeffect;


// const Baseeffect = () => {
//   const [list, setList] = useState([
//     { name: 'sukure' },
//     { name: 'santhosh' },
//     { name: 'pawan' },
//   ]);

//   const handleButtonClick = (event) => {
//     const buttonId = event.target.id;
//     console.log(`Button clicked: ID ${buttonId}`);
//   };

//   return (
//     <div>
//       <h1>List of Names</h1>
//       <ul style={{ listStyleType: 'none' }}>
//         {list.map((item, index) => (
//           <li key={index} style={{ display: 'flex', alignItems: 'center' }}>
//             {item.name}
//             <button id={`button-${index}`} onClick={handleButtonClick}>click</button>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default Baseeffect;

// get item name ----------------------------------------------------


// const Baseeffect = () => {
//   const [list, setList] = useState([
//     { name: 'sukure' },
//     { name: 'santhosh' },
//     { name: 'pawan' },
//   ]);

//   const handleClick = (asd) => {
//     console.log('Clicked name:', asd);
//     // Perform any other logic with the name here
//   };

//   return (
//     <div>
//       <h1>List of Names</h1>
//       <ul style={{ listStyleType: 'none' }}>
//         {
//           list.map((item, index) => (
//             <li key={index + 1}>
//               {item.name}
//               <button onClick={() => handleClick(item.name)}>click</button>
//             </li>
//           ))
//         }
//       </ul>
//     </div>
//   );
// }

// export default Baseeffect;


const App = () => {
  const [users, setUsers] = useState([
    { 
      id: 1,
      name: 'sukkur',
      email: 'suk@gmail.com'
      
    },
    {
      id: 2,
      name: 'kumar',
      email: 'kum@gmail.com'
      
    },
    {},
    {
      id: 4,
      name: 'ramya',
      email: 'ram@gmail.com'
      
    },
    {}
  ]);

  
  useEffect(() => {
    const updatedUsers = users.map((user, index) => {
      if (Object.keys(user).length === 0) {
        return {
          name: `name${index + 1}`,
          email: `email${index + 1}@example.com`,
          id: index + 1
        };
      }
      return user;
    });
    setUsers(updatedUsers);
  }, []);

  return (
    <div>
      {users.map((user, index) => (
        <div key={index}>
          <p>Name: {user.name}</p>
          <p>Email: {user.email}</p>
          <p>ID: {user.id}</p>
        </div>
      ))}
    </div>
  );
};

export default App;








