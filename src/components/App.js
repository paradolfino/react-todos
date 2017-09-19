import React from 'react';
import CreateTodo from './create-todo';
import TodosList from './todos-list'
const todos = [
{
	task: 'make React tutorial',
	isCompleted: true
},
{
	task: 'eat dinner',
	isCompleted: false
}
];

export default class App extends React.Component {
	constructor(props){
		super(props);

		this.state = {
			todos
		};
	}
	render() {
		return (
			<div>
				<h1>React To-Dos App</h1>
				<CreateTodo />
				<TodosList todos={this.state.todos}/>
			</div>
			);
	}
}