import React, { useState } from 'react';
import { AiFillDelete, AiFillEdit } from 'react-icons/ai';
import { FaCheck } from 'react-icons/fa';

const Todo = () => {
	const defaultTodo = [
		{
			id: 1,
			title: 'React class',
			completed: true,
		},
		{
			id: 2,
			title: 'Redux class',
			completed: false,
		},
		{
			id: 3,
			title: 'Code review',
			completed: false,
		},
	];

	const [todos, setTodos] = useState(defaultTodo);

	const [todo, setTodo] = useState('');

	const handleTodoAdd = (e) => {
		setTodo(e.target.value);
	};

	const handleButton = () => {
		if (todo.length === 0) {
			return;
		}
		const newTodo = {
			id: Math.floor(Math.random() * 1000),
			title: todo,
			completed: false,
		};
		setTodos([...todos, newTodo]);
		setTodo('');
	};

	const handleEnterKey = (event) => {
		if (event.key === 'Enter') {
			handleButton();
		}
	};

	const handleSwitch = (id) => {
		const currentTodoIndex = todos.findIndex((todo) => {
			return todo.id === id;
		});

		let currentTodo = todos[currentTodoIndex];
		currentTodo.completed = !currentTodo.completed;
		todos[currentTodoIndex] = currentTodo;

		setTodos([...todos]);
	};

	const handleDelete = (id) => {
		const newTodos = todos.filter((todo) => todo.id !== id);
		console.log(newTodos);

		setTodos([...newTodos]);
	};

	return (
		<div className='grid h-screen place-items-center'>
			<div className='bg-white rounded shadow p-10 m-4 w-1/2'>
				<div className='mb-4'>
					<h1 className='text-gray-900'>Todo List</h1>
					<div className='flex mt-4'>
						<input
							type='text'
							className='shadow border rounded w-full py-2 px-3 mr-4 text-gray-900'
							placeholder='Add Todo'
							value={todo}
							onChange={handleTodoAdd}
							onKeyDown={handleEnterKey}
						/>
						<button
							onClick={handleButton}
							className='flex-no-shrink p-2 border-2 rounded text-teal border-teal text-gray-900 hover:text-white text-green-900 border-green hover:bg-green-400'
						>
							Save
						</button>
					</div>
				</div>
				{todos.map((todo, index) => {
					return (
						<div key={index}>
							<div className='flex mb-4 items-center'>
								<p className='w-1/5  text-gray-900'>
									{index + 1}
								</p>
								<div onClick={() => handleSwitch(todo.id)}>
									{todo.completed === true ? (
										<button className='flex-no-shrink bg-green-400 p-2 ml-2 border-2 rounded text-green-900 border-green hover:bg-white'>
											<FaCheck />
										</button>
									) : (
										<button className='flex-no-shrink bg-red-400 p-2 ml-2 border-2 rounded text-red-900 border-red hover:bg-white'>
											<FaCheck />
										</button>
									)}
								</div>
								<p className='w-1/2  text-gray-900'>
									{todo.title}
								</p>
								<button
									onClick={() => handleDelete(todo.id)}
									className='flex-no-shrink p-2 ml-2 border-2 rounded text-red-900 border-red hover:text-white hover:bg-red-400'
								>
									<AiFillDelete />
								</button>

								<button
									onClick={() => handleDelete(todo.id)}
									className='flex-no-shrink p-2 ml-2 border-2 rounded text-gray-900 border-gray hover:text-white hover:bg-gray-400'
								>
									<AiFillEdit />
								</button>
							</div>
						</div>
					);
				})}
			</div>
		</div>
	);
};

export default Todo;
