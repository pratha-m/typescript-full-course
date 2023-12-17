import { Button, Container, Stack, Typography } from "@mui/material"
import { useNavigate } from "react-router-dom"

const languages=[
  {name:"Japanese",code:"ja"},
  {name:"Hindi",code:"hi"},
  {name:"Spanish",code:"es"},
  {name:"French",code:"fr"},
]

const Home = () => {

  const navigate=useNavigate();

  const languageSelectHandler=(language:string):void=>{
        navigate(`/learn?language=${language}`)
  }
  return (
    <Container maxWidth={"sm"}>  
       <Stack 
        direction={"row"} 
        spacing={"2rem"} 
        p={"2rem"}
        alignItems={"center"}
        justifyContent={"center"}
        >
            {languages.map((i)=>{
             return <Button onClick={()=>languageSelectHandler(i.code)} key={i.code} variant="contained">{i.name}</Button>
            })}
        </Stack>
        <Typography textAlign={"center"} variant="h3" p={"2rem"} >
          Welcome , Begin your journey of learning
       </Typography>
    </Container>
  )
}

export default Home