import React, { useState } from 'react';

// Name Change ============================================================================>

// const Display = () => {
//   const [arr, setArr] = useState([
//     { id: 1, name: 'John Doe' },
//     { id: 2, name: 'Jane Smith' },
//     { id: 3, name: 'Alice Johnson' }
//   ]);

//   const changeName = (id, newName) => {
//     const updatedArr = arr.map(item => item.id === id ? { ...item, name: newName } : item);
//     setArr(updatedArr);
//   };

//   return (
//     <div>
//       <ul>
//         {arr.map(item => (
//           <li key={item.id}>{item.name}</li>
//         ))}
//       </ul>
//       <button onClick={() => changeName(2, 'Reeju')}>Change Name</button>
//     </div>
//   );
// };

// export default Display;

    
// const Display = () => {
//     const [users, setUsers] = useState([
//       { id: 1, name: "John Doe" },
//       { id: 2, name: "Jane Smith" },
//       { id: 3, name: "Alice Johnson" },
//     ]);

//   const [changedUser, setChangedUser] = useState(null);

//   const changeUserName = (id, newName) => {
//     const updatedUsers = users.map(user => {
//       if (user.id === id) {
//         const updatedUser = { ...user, name: newName };
//         setChangedUser(updatedUser);
//         return updatedUser;
//       }
//       return user;
//     });
//     setUsers(updatedUsers);
//   };

//   return (
//     <div>
//       <h1>User List</h1>
//       <ul>
//         {users.map(user => (
//           <li key={user.id}>{user.name}</li>
//         ))}
//       </ul>
//       <button onClick={() => changeUserName(2, "Rishad")}>Change Jane's Name</button>
//       {changedUser && (
//         <div>
//           <h2>Changed User</h2>
//           <p>ID: {changedUser.id}</p>
//           <p>Name: {changedUser.name}</p>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Display;

// const Display = () => {
//     const [user, setUser] = useState([
//         { id: 1, name: 'John Doe' },
//         { id: 2, name: 'Jane Smith' },
//         { id: 3, name: 'Alice Johnson' }
//       ]);
    
//       return (
//         <div>
//           <h1>First Names</h1>
//           <ul>
//             {user.map((u) => {
//               const firstName = u.name.split(' ')[1];
//               return <li key={u.id}>{firstName}</li>;
//             })}
//           </ul>
//         </div>
//       );
//     };
    
//     export default Display;

// const Display = () => {
//     const [user, setUser] = useState([
//         { id: 1, name: 'Sukkur' },
//         { id: 2, name: 'Bishmilla' },
//         { id: 3, name: 'Reeju haffiza' },
//         { id: 4, name: 'Rishad' }
//       ]);
    
//     const firstUser = user.find(item => item.id === 4)


//       return (
//         <div>
//           <h1>First User's Name</h1>
//           {firstUser ? <p>{firstUser.name}</p> : <p>No users available</p>}
//         </div>
//       );
//     };
// export default Display;

// const Display = () => {
//   const [user, setUser] = useState([
//     { id: 1, name: 'Sukkur' },
//     { id: 2, name: 'Bishmilla' },
//     { id: 3, name: 'Reeju haffiza' },
//     { id: 4, name: 'Rishad' }
//   ]);

//   const firstUserName = user.find(u => u.id === 1)?.name;

//   return (
//     <div>
//       <h1>First User Name: {firstUserName}</h1>
//       <ul>
//         {user.map(u => (
//           <li key={u.id}>{u.name}</li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default Display;

// Search Name  ============================================================================>

// function App() {
//   const [users, setUsers] = useState([
//     { id: 1, name: 'Sukkur' },
//     { id: 2, name: 'Bishmilla' },
//     { id: 3, name: 'Reeju haffiza' },
//     { id: 4, name: 'Rishad' }
//   ]);

//   const [searchTerm, setSearchTerm] = useState('');

//   // Filter users based on search term
//   const filteredUsers = users.filter(item =>
//     item.name.toLowerCase().startsWith(searchTerm.toLowerCase())
//   );

//   return (
//     <div>
//       <input
//         type="text"
//         placeholder="Search by first letter"
//         value={searchTerm}
//         onChange={e => setSearchTerm(e.target.value)}
//       />
//       <ul>
//         {filteredUsers.map(user => (
//           <li key={user.id}>{user.name}</li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// export default App;


// function NameSearch() {
//   const names = [
//     { id: 1, name: 'Sukkur' },
//     { id: 2, name: 'Bishmilla' },
//     { id: 3, name: 'Reeju Haffiza' },
//     { id: 4, name: 'Rishad' }
//   ];
 
//   const [results, setResults] = useState(names);
//   const [searchTerm, setSearchTerm] = useState('');

//   const handleSearch = (e) => {
//     const term = e.target.value.toLowerCase();
//     setSearchTerm(term);
//     if (term) {
//       const matches = names.filter(item => item.name.toLowerCase().includes(term));
//       setResults(matches);
//     } else {
//       setResults(names);
//     }
//   };

//   return (
//     <div>
//       <h1>Search for Names by Letter</h1>
//       <input 
//         type="text" 
//         value={searchTerm} 
//         onChange={handleSearch} 
//         placeholder="Enter a letter to search" 
//       />
//       <div>
//         <h2>Results</h2>
//         {results.length > 0 ? (
//           <ul>
//             {results.map(item => (
//               <li key={item.id}>{item.name}</li>
//             ))}
//           </ul>
//         ) : (
//           <p>No matches found</p>
//         )}
//       </div>
//     </div>
//   );
// }

// export default NameSearch;


function NameSearch() {
  const [originalNames] = useState([
    { id: 1, name: 'Sukkur' },
    { id: 2, name: 'Bishmilla' },
    { id: 3, name: 'Reeju Haffiza' },
    { id: 4, name: 'Rishad' }
  ]);
  const [results, setResults] = useState(originalNames);
  const [searchTerm, setSearchTerm] = useState('');
  const [searchOption, setSearchOption] = useState('includes');

  const handleSearch = (e) => {
    const term = e.target.value.toLowerCase();
    setSearchTerm(term);
    if (term) {
      const matches = originalNames.filter(item => {
        const name = item.name.toLowerCase();
        switch (searchOption) {
          case 'startsWith':
            return name.startsWith(term);
          case 'endsWith':
            return name.endsWith(term);
          case 'exact':
            return name === term;
          case 'includes':
          default:
            return name.includes(term);
        }
      });
      setResults(matches);
    } else {
      setResults(originalNames);
    }
  };

  const handleOptionChange = (e) => {
    setSearchOption(e.target.value);
  };

  return (
    <div>
      <h1>Search for Names by Letter</h1>
      <input 
        type="text" 
        value={searchTerm} 
        onChange={handleSearch} 
        placeholder="Enter a letter to search" 
      />
      <div>
        <label>
          <input 
            type="radio" 
            value="includes" 
            checked={searchOption === 'includes'} 
            onChange={handleOptionChange} 
          /> Includes
        </label>
        <label>
          <input 
            type="radio" 
            value="startsWith" 
            checked={searchOption === 'startsWith'} 
            onChange={handleOptionChange} 
          /> Starts With
        </label>
        <label>
          <input 
            type="radio" 
            value="endsWith" 
            checked={searchOption === 'endsWith'} 
            onChange={handleOptionChange} 
          /> Ends With
        </label>
        <label>
          <input 
            type="radio" 
            value="exact" 
            checked={searchOption === 'exact'} 
            onChange={handleOptionChange} 
          /> Exact
        </label>
      </div>
      <div>
        <h2>Results</h2>
        {results.length > 0 ? (
          <ul>
            {results.map(item => (
              <li key={item.id}>{item.name}</li>
            ))}
          </ul>
        ) : (
          <p>No matches found</p>
        )}
      </div>
    </div>
  );
}

export default NameSearch;
















