//import 'ubicacion del css'
import { useState } from "react";
export function ButtonPageOne ({text, select}){
    const [change, changeTwo] = useState(true)
    const muTextButton = change  ? text: 'no data'
    const handleClick = ()=> {
        changeTwo(!change)
    }
       
    return(
       <button onClick={handleClick} class="btn btn-primary">
        {muTextButton}
       </button>
    )
}//end of PageOne 