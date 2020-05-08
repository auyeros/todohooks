import React from "react";
import Paper from "@material-ui/core/Paper";
import List from "@material-ui/core/List";

import Todo from "./Todo";

import Divider from "@material-ui/core/Divider";

function TodoList({ todos, removeTodo, toggleTodo, editTodo }) {
    return (
        <Paper>
            <List>
                {todos.map((todo, i) => (
                    <>
                        <Todo
                            id={todo.id}
                            task={todo.task}
                            key={todo.id}
                            completed={todo.completed}
                            removeTodo={removeTodo}
                            toggleTodo={toggleTodo}
                            editTodo={editTodo}
                        />

                        {i < todos.length - 1 && <Divider />}
                    </>
                ))}
            </List>
        </Paper>
    );
}

export default TodoList;