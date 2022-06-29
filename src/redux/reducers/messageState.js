import { 
  MESSAGE_STATE_IS_CREATE,
  MESSAGE_STATE_IS_EDIT,
  MESSAGE_STATE_IS_REPLY,
  MESSAGE_STATE_IS_FORWARD,
  MESSAGE_STATE_IS_SELECT,
  MESSAGE_STATE_IS_EMPTY,
} from "../actions/messageState";


export const messageState = (state = 'create', action) => {
  switch (action.type) {
    case MESSAGE_STATE_IS_CREATE: 
      return 'create'; 
    
    case MESSAGE_STATE_IS_EDIT:
      return 'edit';

    case MESSAGE_STATE_IS_FORWARD:
      return 'forward';

    case MESSAGE_STATE_IS_REPLY: 
      return 'reply';

    case MESSAGE_STATE_IS_SELECT: 
      return 'select';

    case MESSAGE_STATE_IS_EMPTY: 
      return '';

    default:
      return state;
  }
}