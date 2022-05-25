import { getCurrentMessageInfo } from "../../utils/getCurrentMessageInfo";
import { getIndex } from "../../utils/getIndex"
import { 
  ADD_NEW_MESSAGE_TO_STORE,
  EDIT_MESSAGE_IN_STORE, 
  REMOVE_MESSAGE_FROM_STORE,
  ADD_NEW_USER_TO_STORE
} from "../actions";



let messageId = 0;

const addNewUser = (state, action) => {
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
}

const addNewMessage = (state, action) => {
  if(!state[action.name]){
    return {
      ...state,
      [action.name]: updateMessageStore([], action)
    }
  } else {
    return {
      ...state,
      [action.name]: [
        ...state[action.name],
        updateMessageStore(state[action.name], action)
      ]
    }
  }
}


const updateMessageStore = (state = [], action) => { //Переименовать updateMessageInStore
  switch(action.type) {
    case ADD_NEW_MESSAGE_TO_STORE: //'message_store/addNewMessageToStore'
      return { 
          // мб лучше state.current_message???// но тогда важна очередность
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

export const allStore = (state = {}, action) => {
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


    case ADD_NEW_MESSAGE_TO_STORE: //Переименовать в UPDATE_NEW_MESSAGE_STORE
      if (!state[action.name]) {
        return {
          ...state,
          [action.name]: updateMessageStore([], action)
        }
      } else {
        return {
          ...state,
          [action.name]: [
            ...state[action.name],
            updateMessageStore(state[action.name], action)
          ]
        }
      }

    case EDIT_MESSAGE_IN_STORE:
      if (state[action.name]) {
        let array = [...state[action.name]];
        const index = getIndex(action.id, array);
        // console.log(index);
        return {
          ...state,
          [action.name]: [
            ...state[action.name].slice(0, index),
            updateMessageStore(state[action.name], action),
            ...state[action.name].slice(index + 1),
          ]
        }
      }
    case REMOVE_MESSAGE_FROM_STORE:
      if (state[action.name]) {
        let array = [...state[action.name]];
        const index = getIndex(action.id, array);
        console.log(index)
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