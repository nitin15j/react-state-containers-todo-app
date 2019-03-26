import { ADD_ITEM , TOGGLE_ITEM, MARK_ALL_ITEMS_COMPLETED} from "./action-types";

export function addItem(payload) 
{
  return { type: ADD_ITEM, payload };
}

export function toggleItem(payload) 
{
  return { type: TOGGLE_ITEM, payload };
}

export function markAllItemsCompleted(payload) 
{
  return { type: MARK_ALL_ITEMS_COMPLETED, payload };
}