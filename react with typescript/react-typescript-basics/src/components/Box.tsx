import {ReactNode} from "react";

type PropsType={
    heading:string;
    count?:number;
    func1:(b:string,a:string)=>string;
    children:ReactNode
};

const Box = ({heading,count,func1,children}:PropsType) => {
  return (
    <div>
        <h1>{heading}</h1>
        {count && <p>{count}</p>}
        <p>{func1("12","13")}</p>
        {children}
    </div>
  )
}

export default Box