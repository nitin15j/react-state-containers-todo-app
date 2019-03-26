import {ADD_ITEM, TOGGLE_ITEM, MARK_ALL_ITEMS_COMPLETED} from './action-types';
import uniqueId from 'lodash/uniqueId';

  const initialState = {items:[
    { value: 'Met my HR', id: uniqueId(), completed: false },
    { value: 'Submitted all BGV docs', id: uniqueId(), completed: false },
    { value: 'SEZ card', id: uniqueId(), completed: false },
    { value: 'Access to My HCL', id: uniqueId(), completed: false },
    { value: 'Downloaded Medical card', id: uniqueId(), completed: true },
    { value: 'Awareness about iTime', id: uniqueId(), completed: false },
    { value: 'Updated seat no. in ESS', id: uniqueId(), completed: false },
    { value: 'Updated Aadhar, UAN & PAN no. in ESS', id: uniqueId(), completed: false },
    { value: 'Vehichal declaration', id: uniqueId(), completed: false },
    { value: 'E-learnings on iSucess', id: uniqueId(), completed: true },
    { value: 'Flexi declaration', id: uniqueId(), completed: true },
  ]};

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