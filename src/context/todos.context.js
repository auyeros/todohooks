import React, { createContext } from "react";
import { useLocalStorageReducer } from "../Hooks/useLocalStorageReducer";
import todoReducer from "../reducers/todo.reducer";

const defaultTodos = [
    { id: 1, task: "Break the Dishes", completed: false },
    { id: 2, task: "Give birth to the AntiChrist", completed: false },
];
export const TodosContext = createContext();
export const DispatchContext = createContext();

export function TodosProvider(props) {
    const [todos, dispatch] = useLocalStorageReducer(
        "todos",
        defaultTodos,
        todoReducer
    );
    return (
        //Prevents RErendering
        <TodosContext.Provider value={todos}>
            <DispatchContext.Provider value={dispatch}>
                {props.children}
            </DispatchContext.Provider>
        </TodosContext.Provider>
    );
}
