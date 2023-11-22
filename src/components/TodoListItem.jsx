import React from "react";

const TodoListItem = ({title, complated}) => {
    return (
        <li>
            <span>Lorem ipsum dolor sit amet.</span>
            {complated ? "👍":"X"}
            
        </li>
    );
}

export default TodoListItem;