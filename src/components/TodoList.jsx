import React from "../assets/note_book.jpg"
import TodoListItem from "./TodoList";

const TodoList = ({title, complated }) => {
    console.log(title);
  
  return (
    <ul>
        <TodoListItem title={title} complated={complated}/>
    </ul>
  
  );
};

export default TodoList;