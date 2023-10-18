import { Box, Card, CardContent, CardHeader, useTheme } from '@mui/material'
import { grey } from '@mui/material/colors';
import { ClassNameMap, withStyles } from '@mui/styles';
import { useContext, useState } from 'react';
import AddTodo from '../../components/AddTodo/AddTodo';
import { Todo, TodoList } from '../../contexts/TodoContext/types';
import { TodoContext } from '../../contexts/TodoContext/TodoProvider';
import TodoListContainer from '../../components/TodoListCobtainer/TodoListContainer';

const styles = {
  root: {
    display: "flex",
    justifyContent: "center",
    minHeight: "calc(100vh - 150px)",
    maxHeight: "fit-content",
    border: 0,
    margin: "43px 0",
  },
  card: {
    width: "60vw",
    boxShadow: '0px 1px 1px -1px rgba(0,0,0,0.2), 0px 1px 1px 0px rgba(0,0,0,0.14), 0px 1px 3px 0px rgba(0,0,0,0.12)',

  },
  cardHeader: {
    background: grey[100]
  }
}


const TodoCardContainer = ({ classes }: { classes: ClassNameMap }) => {
  const [todoInput, setTodoInput] = useState<string>('')
  const [isEditTodo, setIsEditTodo] = useState<boolean>(false)
  const [selectedTodo, setSelectedTodo] = useState<Todo | any>({})

  const { todo, setTodoList } = useContext(TodoContext) as TodoList
  const backgroundColor = useTheme().palette.background



  const handleChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    let { value } = e.target;
    setTodoInput(value)
  }
  const handleEditTodo = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault()
    const stateClone = [...todo]
    const selectedItem = stateClone.find((item) => item.id === selectedTodo.id)
    const updatedArr = stateClone.map((item) => {
      if (item.id === selectedItem?.id) {
        return { ...item, title: todoInput }
      }
      else {
        return item
      }
    })

    setTodoList(updatedArr)

    setIsEditTodo(false)
    setTodoInput("")
  }
  const handleSubmit = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault()
    const isTodoExist = todo.find((item: Todo) => item.title === todoInput)
    if (Boolean(todoInput.length) && !isTodoExist) {
      const todoObj: Todo = {
        id: Math.floor(Math.random() * 100),
        title: todoInput,
        isCompleted: false
      }
      setTodoList([...todo, todoObj])
      setTodoInput("")
    }
  }


  const toggleTodo = (index: number) => {
    const stateClone = [...todo]
    stateClone[index].isCompleted = !stateClone[index].isCompleted
    setTodoList(stateClone)

  }

  const editTodo = (todo: Todo) => {
    setIsEditTodo(true)
    setTodoInput(todo.title)
    setSelectedTodo(todo)


  }
  const deleteTodo = (index: number) => {
    const stateClone = [...todo]
    const filteredTodos = stateClone.filter((_, i) => i !== index)
    setTodoList(filteredTodos)

  }

  return (
    <Box className={classes.root}>

      <Card className={classes.card} sx={{ background: backgroundColor.default }}>
        <CardHeader className={classes.cardHeader} sx={{ background: useTheme().palette.mode === "dark" ? backgroundColor.default : grey[100] }} title={`Todo (${todo.length})`}></CardHeader>
        <CardContent>
          <AddTodo value={todoInput} onSubmit={isEditTodo ? handleEditTodo : handleSubmit} onChange={handleChangeInput} />
          <TodoListContainer toggleTodo={toggleTodo} editTodo={editTodo} deleteTodo={deleteTodo} />
        </CardContent>

      </Card>
    </Box>
  )
}

export default withStyles(styles)(TodoCardContainer)
