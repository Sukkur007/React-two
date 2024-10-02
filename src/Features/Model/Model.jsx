import React from "react";
import './Model.css'

const Model = (props) => {
    return (
        <>
        <div className="imgBox">
        <img src={props.imgSrc} alt={props.imgAlt} className="imgCard"/>
        <div>Prise : Rs{props.imgPrice}</div>
        <div>Quantity {props.imgQuantity}</div>
      </div>
        </>
    )
}

export default Model;