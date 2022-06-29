import { 
  HIDE_MESSAGE_SEARCHING, 
  SHOW_MESSAGE_SEARCHING
} from "../../actions/actions";


export const toggleMessageSearching = (state = 'hide', action) => {
  switch (action.type) {
    case HIDE_MESSAGE_SEARCHING: 
      return 'hide'; 
    
    case SHOW_MESSAGE_SEARCHING:
      return '';

    default:
      return state;
  }
}