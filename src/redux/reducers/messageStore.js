import { 
  ADD_NEW_MESSAGE_TO_STORE,
  EDIT_MESSAGE_IN_STORE, // нет action creators
  REMOVE_MESSAGE_FROM_STORE // нет action creators
} from "../actions";

//Переписать payload
let messageId = 0;

export const messageStore = (state = [], action) => {
  switch(action.type) {
    case ADD_NEW_MESSAGE_TO_STORE: //'message_store/addNewMessageToStore'
      return [
          ...state, //...state.message_store,
          { 
            // мб лучше state.current_message???
            // но тогда важна очередность
            id: messageId++, //написать функцию для id
            value: action.payload //value: action.payload
          }
        ]

    default:
      return state;
  }
}