import { 
  UPDATE_TO_NEW_CURRENT_USER
} from "../actions";


export const currentUser = (state = '', action) => {
  switch (action.type) {
    case UPDATE_TO_NEW_CURRENT_USER: 
      return action.name;

    default:
      return state;
  }
}