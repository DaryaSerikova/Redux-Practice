import { 
  // MESSAGE_STATE_IS_CREATE,
  // MESSAGE_STATE_IS_EMPTY,
  MOBILE_STATE_IS_USERS,
  MOBILE_STATE_IS_MESSAGES,
} from "../../actions/actions";


export const mobileState = (state = 'users', action) => {
  switch (action.type) {
    case MOBILE_STATE_IS_USERS: 
      return 'users'; 

    case MOBILE_STATE_IS_MESSAGES: 
      return 'messages';

    default:
      return state;
  }
}