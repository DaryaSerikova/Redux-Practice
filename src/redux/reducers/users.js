import { 
  SEARCHED_USERS
} from "../actions";
import { arrUsers } from "../../components/Users/ArrUsers";


export const users = (state = arrUsers, action) => { //state = []
  switch (action.type) {
    case SEARCHED_USERS: 
      return action.users;

    default:
      return state;
  }
}