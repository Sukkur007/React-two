import React from "react";

const Navbar = () => {

    const optionArray = ['html', 'css', 'java', 'python', 'javascript', 'react'];

    const styles = {
        backgroundColor: "white",
        width: "100px",
        marginBottom: "10px",
        padding: "10px",
        color: "green",
        boxShadow: "rgb(0,0,0,0.44) 0px 5px 5px",
        marginRight: "10px"
    };


   return (
    <>
            {
                optionArray.map((data) => (
                    <span key={data} style={styles}>
                        {data}
                    </span>
                ))
            }
    </>

   )
}
 
export default Navbar;