import React, { createContext, useReducer } from "react";
import todoReducer from "../reducers/todo.reducer";
import useTodosState from "../Hooks/useTodosState";
const defaultTodos = [
    { id: 1, task: "Break the Dishes", completed: false },
    { id: 2, task: "Give birth to the AntiChrist", completed: false },
];
export const TodosContext = createContext();
export function TodosProvider(props) {
    const [todos, dispatch] = useReducer(todoReducer, defaultTodos);
    return (
        <TodosContext.Provider value={{ todos, dispatch }}>
            {props.children}
        </TodosContext.Provider>
    );
}
