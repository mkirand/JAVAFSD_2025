import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    todoList: []
}

const todoSlice = createSlice({
    name: "todo",
    initialState,
    reducers: {
        addTodo: (state, action) => {
            state.todoList.push(action.payload);
        },
        deleteTodo: (state, action) => {
            state.todoList.splice(action.payload, 1);
        }
    }
})
export const { addTodo, deleteTodo } = todoSlice.actions;
export default todoSlice.reducer;