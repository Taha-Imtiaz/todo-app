import { ReactElement } from "react";

export interface TodoList {
    todo: Array<Todo> | [] 
    setTodoList: (arg: Array<Todo> ) => void
}
export type Todo = {
    id: number;
    title: string;
    isCompleted: boolean
}
export interface TodoListProvider {
    children: ReactElement
}
