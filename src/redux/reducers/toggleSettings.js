import { 
  HIDE_SETTINGS, 
  SHOW_SETTINGS
} from "../actions";


export const toggleSettings = (state = 'hide', action) => {
  switch (action.type) {
    case HIDE_SETTINGS: 
      return 'hide'; 
    
    case SHOW_SETTINGS:
      return '';

    default:
      return state;
  }
}