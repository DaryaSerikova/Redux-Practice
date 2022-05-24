import { 
  MESSAGE_STATE_IS_CREATE,
  MESSAGE_STATE_IS_EDIT
} from "../actions";


export const messageState = (state = 'create', action) => {
  switch (action.type) {
    case MESSAGE_STATE_IS_CREATE: 
      return 'create'; 
    
    case MESSAGE_STATE_IS_EDIT:
      return 'edit';

    default:
      return state;
  }
}