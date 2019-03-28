import { observable, decorate } from 'mobx';
import uuid from 'uuid';

export class TodoItem {
  id = uuid();
  value;
  completed;

  constructor(value, completed = false) {
    this.value = value;
    this.completed = completed;
  }
}


export default TodoItem

decorate(TodoItem, {
  value: observable,
  completed: observable
});