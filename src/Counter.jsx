import { useState } from "react";

export default function Counter(){
    const [count, setCount] = useState(0);
    const [value, setValue] = useState("");

    return(<>
        <h1
            onClick = {() => console.log('onClick')}
            onMouseEnter = {() => console.log('onMouseEnter')}
            onMouseOver={() => console.log('onMouseOver')}
            onMouseDown={() => console.log('onMouseDown')}
            onMouseUp={() => console.log('onMouseUp')}
            onMouseLeave={() => console.log('onMouseLeave')}
        > Event Handler</h1>

        <button onClick={()=>setCount(count+1)}> Click me!</button>
        <p><button onClick={()=>setCount(0)}> Reset</button></p>
        <p> You clicked {count} time</p>
        <input
            type = "text" value = {value}
            onChange = {(event) => setValue(event.target.value)}
        />
        <p>Your message: {value}</p>
        <p>Message length: {value.length}</p>
        
        </>);
}
