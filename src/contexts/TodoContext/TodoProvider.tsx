import { createContext, useState } from "react"
import { Todo, TodoList, TodoListProvider } from "./types"


export const TodoContext = createContext<TodoList | null>(null)
export const TodoProvider = ({ children }: TodoListProvider) => {

    const [todos, setTodos] = useState<Array<Todo>>([])
    const setTodoList = (todoList: Array<Todo>) => {
        setTodos(todoList)
    }
    const providerValues: TodoList = {
        todo: todos,
        setTodoList: setTodoList
    }
    return (
        <TodoContext.Provider value={providerValues}>
            {children}
        </TodoContext.Provider>
    )
}

