 // import { getValue } from "@testing-library/user-event/dist/utils";
 import { arrUsers } from "../components/Users/ArrUsers"

const initialState = {
  current_message: {},
  message_store: [],
  users: {
    initial_users: [arrUsers],
    searched_users: []
  }
}

export const reducer = (state = initialState, action) => {

  switch (action.type) {

    case 'current_message/updateToNewCurrentMessage': //новое текущее сообщение
      return {
        ...state,
        current_message: { ...action.payload }
      }
    
    case 'message_store/addNewMessage':
      return {
        ...state,
        message_store: [
          ...state.message_store,
          { 
            // мб лучше state.current_message???
            // но тогда важна очередность
            id: 0, //написать функцию для id
            value: action.payload
          }
        ]
      }

    default:
      return state
  }
}



//////////// СТАРЫЕ Reducer'ы!!!!!!!! (ниже)
// Reducer
// export const reducer2 = (state = '', action) => { // для state === undefined

//   switch (action.type) {
//     // case 'INC':
//     //   return state + 1;
//     case 'GET_CURRENT_VALUE': 
//       return action.payload;
//   //   case 'PUT_IN_MESSAGE_STORE':
//   //     return [ state, action.payload ]
//     case 'RESET_STATE':
//       return '';

//     default:
//       return state;
//   }
// };

// export const reducerMessageStore = (state = [], action) => { // для state === undefined

//   switch (action.type) {

//     case 'PUT_IN_MESSAGE_STORE':

//       const newMessage = {...action.payload};
//       const newState = [...state, newMessage];
//       return newState;
//     // case 'RESET_STATE':
//     //   return '';
//     default:
//       return state;
//   }
// };