// import { getValue } from "@testing-library/user-event/dist/utils";
import { combineReducers } from "redux";
import { arrUsers } from "../components/Users/ArrUsers";
import { 
  UPDATE_TO_NEW_CURRENT_MESSAGE,
  ADD_NEW_MESSAGE_TO_STORE 
} from "./actions";


const getPersonId = (lastId) => {

  return lastId + 1;
}



// const initialState = {
//   current_message: {},
//   message_store: [],
//   users: {
//     initial_users: [arrUsers],
//     searched_users: []
//   }
// }

const initialState = {
  currentMessage: '', //{} будет позже объектом
  messageStore: [],
  currentUser: ''
}

const currentMessage = (state = {}, action) => {
  switch (action.type) {
    case UPDATE_TO_NEW_CURRENT_MESSAGE: //новое текущее сообщение//'current_message/updateToNewCurrentMessage'
      // let newCurrentMessage = action.payload;
      // return {newCurrentMessage} //когда сообщение будет не value а объект с несколько полями
      let newCurrentMessage = action.payload;
      return newCurrentMessage 

    default:
      return state;
  }
}

const messageStore = (state = [], action) => {
  switch(action.type) {
    case ADD_NEW_MESSAGE_TO_STORE: //'message_store/addNewMessageToStore'
      return [
          ...state, //...state.message_store,
          { 
            // мб лучше state.current_message???
            // но тогда важна очередность
            id: 0, //написать функцию для id
            value: action.payload //value: action.payload
          }
        ]

    default:
      return state;
  }
}


export default combineReducers({
  currentMessage,
  messageStore,
});

// export const rootReducer = (state = initialState, action) => {

//   switch (action.type) {

//     case UPDATE_TO_NEW_CURRENT_MESSAGE: //новое текущее сообщение//'current_message/updateToNewCurrentMessage'
//       return {
//         ...state,
//         current_message: action.payload
//       }
    
//     case ADD_NEW_MESSAGE_TO_STORE: //'message_store/addNewMessageToStore'
//       return {
//         ...state,
//         message_store: [
//           ...state.message_store,
//           { 
//             // мб лучше state.current_message???
//             // но тогда важна очередность
//             id: 0, //написать функцию для id
//             value: action.payload
//           }
//         ]
//       }

//     // case 'message_store/editMessageInStore':
//     //   return {
//     //     ...state,
//     //     message_store: [

//     //     ]
//     //   }

//     default:
//       return state
//   }
// }