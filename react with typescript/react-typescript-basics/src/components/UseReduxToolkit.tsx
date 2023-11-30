import { useState } from "react"
import { useDispatch,useSelector } from "react-redux";
import { StateType, incrementByValue,increment,decrement } from "../redux";

const UseReduxToolkit = () => {
  
    const [incVal,setIncVal]=useState<number>(0);

    const dispatch=useDispatch()
 
    const count=useSelector((state:StateType)=>state.count);
 
    const incrementHandler=()=>{
       dispatch(increment())
    }
    const decrementHandler=()=>{
       dispatch(decrement())
    }
 
    const incrementByValueHandler=()=>{
       setIncVal(0);
       dispatch(incrementByValue(incVal));
    } 

    return (
        <div>
            <h1>Toolkit</h1>
            <h2>Cout :{count}</h2>
            <button onClick={incrementHandler}>+</button>
            <button onClick={decrementHandler}>-</button>
            <input type="number" value={incVal} onChange={(e)=>setIncVal(Number(e.target.value))}/>
            <button disabled={incVal<0} onClick={incrementByValueHandler}>Add</button>
        </div>
    )
}

export default UseReduxToolkit