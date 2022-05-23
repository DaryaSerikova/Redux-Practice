import { 
  ADD_NEW_MESSAGE_TO_STORE,
  EDIT_MESSAGE_IN_STORE, // нет action creators
  REMOVE_MESSAGE_FROM_STORE, // нет action creators
  ADD_NEW_USER_TO_STORE
} from "../actions";

//Переписать payload
let messageId = 0;

const updateMessageStore = (state = [], action) => {
  switch(action.type) {
    case ADD_NEW_MESSAGE_TO_STORE: //'message_store/addNewMessageToStore'
      return { 
          // мб лучше state.current_message???
          // но тогда важна очередность
          id: messageId++, //написать функцию для id
          value: action.value //value: action.payload
        }
      
    //edit
    //remove
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

    case ADD_NEW_MESSAGE_TO_STORE:
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

    default:
      return state;
  }
}


// export const messageStore = (state = {currentStore:[]}, action) => {
//   switch(action.type) {
//     case ADD_NEW_MESSAGE_TO_STORE: //'message_store/addNewMessageToStore'
//       return {
//         ...state,
//         [action.name] : [
//           ...state.currentStore, //...state.message_store,
//           { 
//             // мб лучше state.current_message???
//             // но тогда важна очередность
//             id: messageId++, //написать функцию для id
//             value: action.value //value: action.payload
//           }
//         ]
//       }

//     default:
//       return state;
//   }
// }