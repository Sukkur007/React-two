import React from "react";
import './Textfield.css'

const Textfield = ({label, textType, placeholderText, textFieldRef, errSms}) => {
  return (
    <>
    <div className="textfield_container">
    <div>
      <label>{label}</label>
    </div>
      <input type={textType} placeholder={placeholderText} ref={textFieldRef} className={`text_field ${errSms && 'error_border'}`}/>
      {
        errSms && <div className="err_style">{errSms}</div>
      }
    </div>
  </>
  )
}






export default Textfield;