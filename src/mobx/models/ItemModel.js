import {observable, decorate} from 'mobx';

export default class ItemModel {
	store;
	id;
	value;
	completed;

	constructor(store, id, value, completed) {
		this.store = store;
		this.id = id;
		this.value = value;
		this.completed = completed;
	}

	toggle() {
		console.log('toggle called in Item Model')
		this.completed = !this.completed;
	}

	destroy() {
		this.store.items.remove(this);
	}

	setValue(value) {
		this.value = value;
	}

	toJS() {
		return {
			id: this.id,
			value: this.value,
			completed: this.completed
		};
	}

	static fromJS(store, object) {
		return new ItemModel(store, object.id, object.value, object.completed);
	}
}

decorate(ItemModel, {
	value: observable,
	completed: observable
  });