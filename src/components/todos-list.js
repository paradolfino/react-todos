import React from 'react';
import TodosListHeader from './todos-list-header';


export default class TodosList extends React.Component {
	renderItems() {
		return
	}
	render() {
		return (
			<table>
				<TodosListHeader />
				<tr>
					{this.renderItems()}
				</tr>
			</table>
			);
	}
}