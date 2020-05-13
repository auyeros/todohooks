import React, { createContext } from "react";
import useTodosState from "../Hooks/useTodosState";
const defaultTodos = [
    { id: 1, task: "Break the Dishes", completed: false },
    { id: 2, task: "Give birth to the AntiChrist", completed: false },
];
export const TodosContext = createContext();
export function TodosProvider(props) {
    const todosStuff = useTodosState(defaultTodos);
    return (
        <TodosContext.Provider value={todosStuff}>
            {props.children}
        </TodosContext.Provider>
    );
}
