import { useState } from "react";

function Item({name,isPacked}){
    return isPacked?<li>{name}✔</li>:<li>{name}</li>;
}

export default function List() {
    const Item=["Battery","Clothes","Sunglasses","Toothbrush","Laptop","Wallet"];
    const itemList=Item.map(it=><li><b>{it}</b></li>);

    return(
        <ul>
            {itemList}
        </ul>
    );
    
}