import { useId, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo, deleteTodo } from "../redux/todoSlice";

function Todo() {
    const [todo, setTodo] = useState('');
    const [errorMsg, setErrorMsg] = useState('')

    const dispatch = useDispatch();

    const todoList = useSelector((state) => state.todo.todoList);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (todo.trim()) {
            dispatch(addTodo(todo));
            setTodo('');
            setErrorMsg("");
            return;
        }
        setErrorMsg('Please enter a task!')

    }

    const handleDelete = (selectedIndex) => {
        dispatch(deleteTodo(selectedIndex));
    }

    return (
        <div className="container">
            <h2>Todo Application</h2>
            <form onSubmit={handleSubmit} className="mb-4">
                <div className="row justify-content-center">
                    <input type="text" className="form-control mb-2" value={todo} onChange={(e) => setTodo(e.target.value)} />
                    <button type="submit" className="btn btn-success">Add</button>
                </div>
            </form>
            {errorMsg && <div className="alert alert-danger">{errorMsg}</div>}
            {todoList.length ? <>
                <h5 className="card-title mb-2 p-3 text-center">Todo List</h5>
                <div className="card">

                    <ul className="list-group list-group-flush">
                        {
                            todoList.map((item, index) => {
                                return (
                                    <li key={index} className="list-group-item d-flex justify-content-between align-items-center">
                                        {item}
                                        <button onClick={() => handleDelete(index)} className="btn btn-sm btn-danger flex-end" style={{ marginLeft: "10px" }}>Delete</button>
                                    </li>
                                )
                            })
                        }
                    </ul>
                </div>
            </>
                : <div className="alert alert-warning">Add Todos to see list!</div>
            }
        </div>
    )
}
export default Todo;