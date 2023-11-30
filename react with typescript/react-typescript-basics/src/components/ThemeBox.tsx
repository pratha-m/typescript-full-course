import React,{useContext} from 'react'
import { ThemeContext } from "./ThemeProviderComponent";

const ThemeBox = () => {

  const {theme,toggleTheme}=useContext(ThemeContext);  

  return (
    <div className="boxContainer" style={{
        backgroundColor:theme==="dark"?"rgba(40,40,40)":"white",
        color:theme==="dark"?"white":"rgba(40,40,40)"
    }}>
        <h1 >Box 1</h1>
        <button onClick={toggleTheme}>Change Theme</button>
    </div>
  )
}

export default ThemeBox