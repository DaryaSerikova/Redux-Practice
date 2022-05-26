import { getCurrentMessageInfo } from "../../utils/getCurrentMessageInfo";
import { getIndex } from "../../utils/getIndex"
import { 
  ADD_NEW_MESSAGE_TO_STORE,
  EDIT_MESSAGE_IN_STORE, 
  REMOVE_MESSAGE_FROM_STORE,
  ADD_NEW_USER_TO_STORE
} from "../actions";



let messageId = 0;


const updateMessageInStore = (state = [], action) => { //Локальное изменение одного сообщения
  switch(action.type) {
    case ADD_NEW_MESSAGE_TO_STORE:
      return { 
          id: messageId++, 
          value: action.value, 
          date: action.date,
          time: action.time,
          name: action.name
        }
    
    case EDIT_MESSAGE_IN_STORE:
      let array = [...state];
      const newMessage = getCurrentMessageInfo(action.id, array);
      return {
        ...newMessage,
        value: action.value,
      }
    
    default:
      return state;
  }
}


export const allStore = (state = {}, action) => { //Полное хранилище сообщений
  switch(action.type) {
    case ADD_NEW_USER_TO_STORE:
      if(!state[action.name]) {
        return {
          ...state,
          [action.name]: []
        }
      } else {
        return {
          ...state,
          [action.name]: [
            ...state[action.name]
          ]
        }
      }


    case ADD_NEW_MESSAGE_TO_STORE:
      if (!state[action.name]) {
        return {
          ...state,
          [action.name]: updateMessageInStore([], action)
        }
      } else {
        return {
          ...state,
          [action.name]: [
            ...state[action.name],
            updateMessageInStore(state[action.name], action)
          ]
        }
      }

    case EDIT_MESSAGE_IN_STORE:
      if (state[action.name]) {
        let array = [...state[action.name]];
        const index = getIndex(action.id, array);

        return {
          ...state,
          [action.name]: [
            ...state[action.name].slice(0, index),
            updateMessageInStore(state[action.name], action),
            ...state[action.name].slice(index + 1),
          ]
        }
      }
    case REMOVE_MESSAGE_FROM_STORE:
      if (state[action.name]) {
        let array = [...state[action.name]];
        const index = getIndex(action.id, array);

        return {
          ...state,
          [action.name]: [
            ...state[action.name].slice(0, index),
            ...state[action.name].slice(index + 1),
          ]
        }
      }

    default:
      return state;
  }
}