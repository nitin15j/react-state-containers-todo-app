import {ADD_ITEM, REMOVE_ITEM, TOGGLE_ITEM, MARK_ALL_ITEMS_COMPLETED} from './ActionTypes';
import defaultState from '../defaultState';

  const initialState = {items:defaultState};

  function RootReducer(state = initialState, action) {

    switch (action.type) 
    {
      case ADD_ITEM: return {items:[...state.items, action.payload]};
      
      case REMOVE_ITEM: return {items:state.items.filter(item => item.id !== action.payload.id)};
    
      case TOGGLE_ITEM : 
      {
         const items = state.items.map(item =>
          {
            if(action.payload.id !== item.id) return item;
            return {...item, completed:!item.completed}
          })
          
          return {items:items};
      }

      case MARK_ALL_ITEMS_COMPLETED :
      {
        const items = state.items.map(item => {
          return {...item, completed:true};
        } )
        return {items:items};
      }

      default : return state;
    
    }
  };

  export default RootReducer;