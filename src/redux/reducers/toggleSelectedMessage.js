import { getIndex } from "../../utils/getIndex";
import { 
  HIDE_SELECTED_MESSAGE, 
  SHOW_SELECTED_MESSAGE
} from "../actions";


// export const toggleSelectedMessage = (state = `hide`, action) => {
//   switch (action.type) {
//     case HIDE_SELECTED_MESSAGE: 
//       return `hide`; 
    
//     case SHOW_SELECTED_MESSAGE:
//       return `show`; //'show'

//     default:
//       return state;
//   }
// }

export const toggleSelectedMessage = (state = [], action) => {
  switch (action.type) {

    case HIDE_SELECTED_MESSAGE: 
    let arrayH = [...state];
    const indexH = getIndex(action.id, arrayH);
      return [
        ...state.slice(0, indexH),
        {id: action.id, toggleState: `hide`},
        ...state.slice(indexH + 1),
      ]; 
    
    case SHOW_SELECTED_MESSAGE:
      let arraySH = [...state];
      const indexSH = getIndex(action.id, arraySH);
        return [
          ...state.slice(0, indexSH),
          {id: action.id, toggleState: `show`},
          ...state.slice(indexSH + 1),
        ]; 


    default:
      return state;
  }
}

// case EDIT_MESSAGE_IN_STORE:
//   if (state[action.name]) {
//     let array = [...state[action.name]];
//     const index = getIndex(action.id, array);

//     return {
//       ...state,
//       [action.name]: [
//         ...state[action.name].slice(0, index),
//         updateMessageStore(state[action.name], action),
//         ...state[action.name].slice(index + 1),
//       ]
//     }
//   }