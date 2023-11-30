import {Dispatch,SetStateAction} from "react";

type InputValType=string | number;

const BoxGenerics=<T extends InputValType>({label,value,settter}:{
    label:string,
    value:T, 
    settter:Dispatch<SetStateAction<T>>
})=>{
  return <form>
    <label>{label}</label>
    <input type="text" value={value} onChange={(e)=>{settter(e.target.value as T)}} />
    <button type="submit">Submit</button>
  </form>
}

export default BoxGenerics