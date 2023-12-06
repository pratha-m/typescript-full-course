import { Delete } from "@mui/icons-material"
import { Button, Checkbox, Paper, Stack, Typography } from "@mui/material"

type PropsType={
    todo:TodoItemType,
    deleteHandler:(id:TodoItemType["id"])=>void,
    completeHandler:(id:TodoItemType["id"])=>void
}

const TodoItem = ({todo,completeHandler,deleteHandler}:PropsType) => {
  return (
    <Paper sx={{padding:"1rem"}}>
      <Stack direction={"row"} alignItems={"center"}>
        <Typography marginRight={"auto"}>{todo.title}</Typography>
        <Checkbox checked={todo.isCompleted} onChange={()=>completeHandler(todo.id)}/>
        <Button onClick={()=>deleteHandler(todo.id)} sx={{opacity:0.5}}><Delete/></Button>
        <Button sx={{fontWeight:"600"}}>Edit</Button>
      </Stack>
    </Paper>
  )
}

export default TodoItem