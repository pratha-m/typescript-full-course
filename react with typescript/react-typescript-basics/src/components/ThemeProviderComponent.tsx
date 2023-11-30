import {useState,createContext,ReactNode} from "react";
import ThemeBox from "../components/themeBox";

type ThemeType="light" | "dark";

interface ThemeContextType{
    theme:ThemeType;
    toggleTheme:()=>void;
}

export const ThemeContext=createContext<ThemeContextType>({
    theme:"light",
    toggleTheme:()=>{}
 })
 const ThemeProvider=({children}:{children:ReactNode})=>{
    const [theme,setTheme]=useState<ThemeType>("light")
    const toggleTheme=()=>{
       setTheme((prev)=>(prev==="light"?"dark":"light"));
    }
    return(
        <ThemeContext.Provider value={{theme,toggleTheme}}>
            {children}
        </ThemeContext.Provider>
    )
 }    

 const ThemeProviderComponent = () => {   
  return (
    <ThemeProvider>
       <ThemeBox />   
    </ThemeProvider> 
  )
}

export default ThemeProviderComponent