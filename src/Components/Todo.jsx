import React from 'react';

const Todo = () => {
	// const todos = [
	// 	{
	// 		id: 1,
	// 		title: 'React class',
	// 		completed: true,
	// 	},
	// 	{
	// 		id: 2,
	// 		title: 'Redux class',
	// 		completed: false,
	// 	},
	// 	{
	// 		id: 3,
	// 		title: 'Code review',
	// 		completed: false,
	// 	},
	// ];

	return (
		<div class='grid h-screen place-items-center'>
			<div class='bg-white rounded shadow p-6 m-4 w-full lg:w-3/4 lg:max-w-lg'>
				<div class='mb-4'>
					<h1 class='text-gray-900'>Todo List</h1>
					<div class='flex mt-4'>
						<input
							class='shadow border rounded w-full py-2 px-3 mr-4 text-gray-900'
							placeholder='Add Todo'
						/>
						<button class='flex-no-shrink p-2 border-2 rounded text-teal border-teal text-gray-900 hover:text-white text-green-900 border-green hover:bg-green-400'>
							Add
						</button>
					</div>
				</div>
				<div>
					<div class='flex mb-4 items-center'>
						<p class='w-full text-gray-900'>React class</p>
						<button class='flex-no-shrink p-2 ml-4 mr-2 border-2 rounded text-green-900  hover:text-white border-green hover:bg-green-400'>
							Done
						</button>
						<button class='flex-no-shrink p-2 ml-2 border-2 rounded text-red-900 border-red hover:text-white hover:bg-red-400'>
							Remove
						</button>
					</div>
				</div>
				<div>
					<div class='flex mb-4 items-center'>
						<p class='w-full text-gray-900'>Redux class</p>
						<button class='flex-no-shrink p-2 ml-4 mr-2 border-2 rounded text-green-900  hover:text-white border-green hover:bg-green-400'>
							Done
						</button>
						<button class='flex-no-shrink p-2 ml-2 border-2 rounded text-red-900 border-red hover:text-white hover:bg-red-400'>
							Remove
						</button>
					</div>
				</div>
				<div>
					<div class='flex mb-4 items-center'>
						<p class='w-full text-gray-900'>Code Review</p>
						<button class='flex-no-shrink p-2 ml-4 mr-2 border-2 rounded text-green-900  hover:text-white border-green hover:bg-green-400'>
							Done
						</button>
						<button class='flex-no-shrink p-2 ml-2 border-2 rounded text-red-900 border-red hover:text-white hover:bg-red-400'>
							Remove
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Todo;
