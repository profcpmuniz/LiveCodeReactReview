import { useState } from "react"

function MyFirstComponent({message}){
    const [myName, SetMyName] = useState('Begining');

    function handleButtonClick(){
        console.log(myName);
    }
    return (
        <div>
            <h1>My First Component</h1>
            <h2>{message}</h2>
            <input type="text" id="name" name="name"  onChange={(e)=>SetMyName(e.target.value)}  />
            <button onClick={handleButtonClick}>Save</button>
            <h3>{myName}</h3>
        </div>
    )
}
export default MyFirstComponent
