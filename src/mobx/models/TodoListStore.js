import { observable, computed, action, decorate } from 'mobx';
import TodoItem from './TodoItem';

export class TodoListStore {
 todoItems = [];

  get todos() {
    return this.todoItems;
  }

  
  get remainingCount() {
    return this.todoItems.filter(todo => !todo.completed).length;
  }

  addTodoItem(title) {
    if (title.trim().length > 0) {
      this.todoItems.push(new TodoItem(title));
    }

  }

  removeTodoItem(id) {
    this.todoItems = this.todoItems.filter(todo => todo.id !== id)
  }
}


decorate(TodoListStore, {
  todoItems: observable,
  current: observable,
  remainingCount: computed,
  addTodoItem: action,
  removeTodoItem:action
});


export default TodoListStore