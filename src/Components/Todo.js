import React, { useState, useEffect } from 'react';
import '../Styles/Todo.css';
import Form from './todo/Form';
import TodoList from './todo/TodoList';

function Todo() {
	//State
	const [inputText, setinputText] = useState('');
	const [todos, setTodos] = useState([]);
	const [status, setStatus] = useState('All');
	const [filteredTodos, setFilteredTodos] = useState([]);

	//USE EFFECT
	useEffect(() => {
		getLocalTodos();
	}, []);

	useEffect(() => {
		filterHandler();
		saveLocalTodos();
	}, [todos, status]);

	//Functions
	const filterHandler = () => {
		switch (status) {
			case `completed`:
				setFilteredTodos(todos.filter((todo) => todo.completed === true));
				break;
			case `uncompleted`:
				setFilteredTodos(todos.filter((todo) => todo.completed === false));
				break;
			default:
				setFilteredTodos(todos);
				break;
		}
	};

	//Localstorage
	const saveLocalTodos = () => {
		localStorage.setItem('todos', JSON.stringify(todos));
		console.log('Saving');
	};

	const getLocalTodos = () => {
		if (localStorage.getItem('todos') === null) {
			localStorage.setItem('todos', JSON.stringify([]));
			console.log('null');
		} else {
			let todoLocal = JSON.parse(localStorage.getItem('todos'));
			console.log(`Not null`);
			setTodos(todoLocal);
		}
	};

	return (
		<div className='Renderthis'>
			<header> TodoList</header>
			<Form
				todos={todos}
				setTodos={setTodos}
				setinputText={setinputText}
				inputText={inputText}
				setStatus={setStatus}
			/>
			<TodoList
				setTodos={setTodos}
				todos={todos}
				filteredTodos={filteredTodos}
			/>
		</div>
	);
}

export default Todo;
