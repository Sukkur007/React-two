import React, {useState, useEffect} from "react";
import Model from "../Model/Model"

const Card = () => {
    const [productList, setProductList] = useState([]);

    const itemList = () => {
        fetch("https://api.thedogapi.com/v1/images/search?limit=50")
        .then (res => res.json())
        .then (res => {
            setProductList(res)
        })
        .catch (error => {
            console.log(error);
        })
    }
    useEffect(() => {
    itemList()
    }, []) 
        
    return(
        <>
        <div className="imgFlex">
        {
            productList.map((e, index)=>(
            <Model key={index + 1} imgSrc={e.url} imgAlt={e.id} imgPrice={e.width} imgQuantity={e.height}/>
        ))
        }
        </div>
        </>
    )
}

export default Card;