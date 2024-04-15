import React from "react";
import "./index.css";

interface ToDoItemsProps{
    title: string;
    key : number;
}

const TodoItem: React.FC<ToDoItemsProps>= (props) => {
    
  return (
    <div>
      <li>{props.title}</li>
     
    </div>
  );
};

export default TodoItem;
export {};
