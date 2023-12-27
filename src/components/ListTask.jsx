import React from 'react'
import Task from './Task'
import { useSelector } from 'react-redux'

const ListTask = ({ filter }) => {

    const todos = useSelector((state) => {
        if (filter === 'all') return state.todos;
        return state.todos.filter((todo) => (filter === 'done' ? todo.isDone : !todo.isDone));
    });

    // console.log(todos);
    console.log(filter);

    return (
        <>
            {todos.map((todo) => (<Task key={todo.id} {...todo} />))}
        </>
    )
}

export default ListTask