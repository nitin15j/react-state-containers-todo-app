import {ADD_ITEM, TOGGLE_ITEM, MARK_ALL_ITEMS_COMPLETED} from './action-types';
import defaultState from '../defaultState';

  const initialState = {items:defaultState};

  function rootReducer(state = initialState, action) {

    switch (action.type) 
    {
      case ADD_ITEM: return {items:[...state.items, action.payload]};
    
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

  export default rootReducer;