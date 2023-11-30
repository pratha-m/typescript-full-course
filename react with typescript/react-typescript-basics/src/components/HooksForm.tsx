import {useState,FormEvent} from "react";

const HooksForm = () => {
    interface Person{
        name:string,
        age:number
     }
    const [user,setUser]=useState<Person>();
    
    const submitHandler=(e:FormEvent<HTMLFormElement>)=>{
       e.preventDefault();
       console.log(user)
    }  
    return (
    <form onSubmit={submitHandler}>
         <input type="number" placeholder="age" value={user?.age || ""} onChange={(e)=>
            setUser((prev)=>({
               ...prev!, 
               age:Number(e.target.value)
            }))
         }/>
         <input type="text" placeholder="name" value={user?.name || ""} onChange={(e)=>
            setUser((prev)=>({
               ...prev!, 
               name:e.target.value
            }))
         }/>
         <button type="submit">Register</button>
      </form>
  )
}

export default HooksForm