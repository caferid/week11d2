import React from 'react'
import { v4 as uuidv4 } from 'uuid';
import { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { addTodu ,editTodu} from './reduxx/todus'
function Todu() {
    const todu = useSelector((state) => state.todus.value)
    const dispatch=useDispatch()
    const [input, setInput] = useState()
   
  return (
    <div>Todu
    <input type="text"  onChange={(e)=>setInput(e.target.value)}/>
    <button onClick={()=>{
        dispatch(addTodu(input))
        setInput("")
         }}>adsds</button>
    
        {todu.map(item=>(
            <ul key={uuidv4()}>
            <li>{item} <button onClick={()=> dispatch(editTodu(input))}>edit</button></li>
            </ul> 
        )
        )}
      
    </div>
  )
}

export default Todu