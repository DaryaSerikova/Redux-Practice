import { 
  HIDE_SELECTED_MESSAGE, 
  SHOW_SELECTED_MESSAGE
} from "../actions";


export const toggleSelectedMessage = (state = `hide`, action) => {
  switch (action.type) {
    case HIDE_SELECTED_MESSAGE: 
      return `hide`; 
    
    case SHOW_SELECTED_MESSAGE:
      return `show`; //'show'

    default:
      return state;
  }
}