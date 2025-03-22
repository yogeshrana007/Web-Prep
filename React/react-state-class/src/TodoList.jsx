import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

export default function TodoList() {
    let [todos, setTodos] = useState([
        { task: "sample task", id: uuidv4(), status: false },
    ]);
    let [newTodo, setNewTodo] = useState("");

    let addTask = () => {
        setTodos((prevTodo) => {
            return [
                ...prevTodo,
                { task: newTodo, id: uuidv4(), status: false },
            ];
        });
        setNewTodo("");
    };

    let updateTodoValue = (event) => {
        setNewTodo(event.target.value);
    };

    let deleteTodo = (id) => {
        setTodos((todo) => todos.filter((todo) => todo.id != id));
    };

    let upperCaseAll = () => {
        setTodos((prevTodos) => {
            return prevTodos.map((todo) => {
                return {
                    ...todo,
                    task: todo.task.toUpperCase(),
                };
            });
        });
    };

    let upperCase = (id) => {
        setTodos((prevTodos) => {
            return prevTodos.map((todo) => {
                if (todo.id == id) {
                    return {
                        ...todo,
                        task: todo.task.toUpperCase(),
                    };
                } else {
                    return todo;
                }
            });
        });
    };

    let markAsDone = (id) => {
        setTodos((prevTodos) => {
            return prevTodos.map((todo) => {
                if (todo.id == id) {
                    return {
                        ...todo,
                        status: true,
                    };
                } else {
                    return todo;
                }
            });
        });
    };

    let markAllAsDone = () => {
        setTodos((prevTodos) => {
            return todos.map((todo) => {
                return {
                    ...todo,
                    status: true,
                };
            });
        });
    };
    return (
        <div>
            <br></br>
            <br></br>
            <input
                placeholder="type here!!"
                value={newTodo}
                onChange={updateTodoValue}
            ></input>
            <button onClick={addTask}>Add</button>
            <br></br>
            <br></br>
            <h3>Todo list</h3>
            <hr></hr>
            <ul>
                {todos.map((todo) => (
                    <li key={todo.id}>
                        <span
                            style={
                                todo.status
                                    ? { textDecoration: "line-through" }
                                    : { textDecoration: "none" }
                            }
                        >
                            {todo.task}
                        </span>
                        &nbsp; &nbsp; &nbsp;
                        <button onClick={() => deleteTodo(todo.id)}>
                            delete
                        </button>
                        &nbsp; &nbsp;
                        {/* <button onClick={() => upperCase(todo.id)}>
                            UpperCase
                        </button> */}
                        <button onClick={() => markAsDone(todo.id)}>
                            mark as done
                        </button>
                    </li>
                ))}
            </ul>
            <br></br>
            <br></br>
            {/* <button onClick={upperCaseAll}>UpperCase All</button> */}
            <button onClick={markAllAsDone}>mark all as done</button>
        </div>
    );
}
