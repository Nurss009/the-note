import React, { useState } from "react";

const TodoItem = ({ todo, deleteTodo, handleEditTodo, toggle }) => {
    const [edit, setEdit] = useState(false);
    const [editTitle, setEditTitle] = useState(todo.title);

    const handleEdit = () => {
        if (!edit) {
            setEdit(!edit);
        } else {
            const newData = { ...todo, title: editTitle };
            handleEditTodo(newData);
            setEdit(false);
        }
    };

    const handleCheck = (e) => {
        const newData = { ...todo, completed: e.target.checked };
        toggle(newData);
    };

    return (
        <div>
            {edit ? (
                <input
                    type="text"
                    value={editTitle}
                    onChange={(e) => setEditTitle(e.target.value)}
                />
            ) : (
                <h3>{todo.title}</h3>
            )}
            <input type="checkbox" onChange={handleCheck} checked={todo.completed} />
            <button onClick={handleEdit}>
                {edit ? "Save" : "Edit"}
            </button>
            <button className={"btn"} onClick={() => deleteTodo(todo.id)}>
                Delete
            </button>
        </div>
    );
};

export default TodoItem;
