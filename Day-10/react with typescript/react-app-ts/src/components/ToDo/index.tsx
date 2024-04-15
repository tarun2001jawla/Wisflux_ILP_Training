import React from 'react';
import TodoItem from './ToDoItems';
import './style.css';

interface ToDoItem {
    id: number;
    title: string;
};

interface ToDoProps {
    items: ToDoItem[];
}

const ToDo: React.FC<ToDoProps> = (props) => {
    return (
        <div className='toDoContainer'>
            <ol>
                {props.items.map((item) => (
                    <TodoItem key={item.id} title={item.title} />
                ))}
            </ol>
        </div>
    );
}

export default ToDo;
