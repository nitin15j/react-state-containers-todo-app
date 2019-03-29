import {observable, decorate, action} from 'mobx';
import ItemModel from './ItemModel'

export default class ItemStore {
	items = [];
	count =0;

	addItem (title) {
		this.items.push(new ItemModel(this, this.count++, title, false));
	}

	toggleAll (checked) {
		this.items.forEach(
			item => item.completed = checked
		);
	}

	toJS() {
		return this.items.map(item => item.toJS());
	}

	static fromJS(array) {
		const itemStore = new ItemStore();
		itemStore.items = array.map(item => ItemModel.fromJS(itemStore, item));
		return itemStore;
	}
}

decorate(ItemStore, {
	items: observable,
	completed: observable,
	addItem: action,
	toggleAll: action
  });