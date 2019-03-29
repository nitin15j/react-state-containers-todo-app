import { ADD_ITEM ,REMOVE_ITEM, TOGGLE_ITEM, MARK_ALL_ITEMS_COMPLETED} from './ActionTypes';

export function addItem(payload) 
{
  return { type: ADD_ITEM, payload };
}

export function removeItem(payload) 
{
  return { type: REMOVE_ITEM, payload };
}

export function toggleItem(payload) 
{
  return { type: TOGGLE_ITEM, payload };
}

export function markAllItemsCompleted(payload) 
{
  return { type: MARK_ALL_ITEMS_COMPLETED, payload };
}