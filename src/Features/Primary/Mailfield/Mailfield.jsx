import React, { useEffect, useRef, useState } from "react";
// import './Mailfield.css';


// const Mailfield = ({label, textType, placeholderText, textFieldRef, errSms}) => {
//     return (
//         <>
//         <div>
//             <div>
//                 <label className={`mail_field ${'text_color'}`}>{label}</label>
//                 <input type={textType} placeholder={placeholderText} ref={textFieldRef} className={`field_box ${errSms && 'error_border'}`}/>
//                 {
//                     errSms && <div className="err_style">{errSms}</div>
//                 }
//             </div>
//         </div>
//         </>
//     )
// }

// export default Mailfield;

// const Demo = () => {
//     const [user, setUser] = useState(0)
//     const textRef = useRef(99);

// const handleRef = () => {
//     textRef.current++;
// }
// console.log("Reeju");
//         return (
//             <>
//            <h3>{user}</h3>
//            <h3>{textRef.current}</h3>
//            <button onClick={()=> setUser(user + 1)}>Testing file</button>
//            <button onClick={handleRef}>Ref</button>
//             </>
//         )
//     }
//     export default Demo;

// const Home = () => {
// const [array, setArray] = useState([1, 2, 6, 7, 5])

//   const moveUp = (e) => {
//     if (e === 0) return; 
//       const newArray = [...array];
//     [newArray[e], newArray[e - 1]] = [newArray[e - 1], newArray[e]];
//     setArray(newArray)
//   }

//   const moveDown = (e) => {
//     if (e === array.length - 1) return; 
//       const newArray = [...array];
//     [newArray[e], newArray[e + 1]] = [newArray[e + 1], newArray[e]];
//     setArray(newArray)
//   }
    
//    return (
//       <div>
//        <ul>
//          {
//            array.map((item, index) => (
//              <li key={index}>{item}
//                <button onClick={() => moveUp(index)}>Up</button> &nbsp;&nbsp;
//                <button onClick={() => moveDown(index)}>Down</button>
//              </li>
//            ))
//          }
//        </ul>
//       </div>
//    )
// }

// export default Home;


// const CheckboxList = () => {
//       const options = ['Option 1', 'Option 2', 'Option 3', 'Option 4'];

//     const [selectedOptions, setSelectedOptions] = useState([]);

//     const handleCheckboxChange = (event) => {
//         const { value, checked } = event.target;
//         setSelectedOptions(prevSelectedOptions => {
//             if (checked) {
//                 // Add the selected option to the array
//                 return [...prevSelectedOptions, value];
//             } else {
//                 // Remove the unselected option from the array
//                 return prevSelectedOptions.filter(option => option !== value);
//             }
//         });
//     };

//     return (
//         <div>
//             <div>
//                 {options.map((option, index) => (
//                     <div key={index}>
//                         <label>
//                             <input
//                                 type="checkbox"
//                                 value={option}
//                                 onChange={handleCheckboxChange}
//                             />
//                             {option}
//                         </label>
//                     </div>
//                 ))}
//             </div>
//             <div>
//                 <h3>Selected Options:</h3>
//                 <ul>
//                     {selectedOptions.map((option, index) => (
//                         <li key={index}>{option}</li>
//                     ))}
//                 </ul>
//             </div>
//         </div>
//     );
// };

// export default CheckboxList;


const FontChanger = () => {
    const [font, setFont] = useState('Times New Roman');

    const handleFontChange = (newFont) => {
        setFont(newFont);
    };

    return (
        <div>
            <p style={{ fontFamily: font }}>
                This is a sample paragraph. You can change the font to Helvetica or Times Roman.
            </p>
            <button onClick={() => handleFontChange('Helvetica')}>
                Helvetica
            </button>
            <button onClick={() => handleFontChange('Times New Roman')}>
                Times Roman
            </button>
          
        </div>
    );
};

export default FontChanger;






