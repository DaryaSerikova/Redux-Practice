// import { getValue } from "@testing-library/user-event/dist/utils";

  //Reducer
  export const reducer = (state = '', action) => { // для state === undefined

    switch (action.type) {
      case 'INC':
        return state + 1;
      case 'GET_INPUT_VALUE': 
        return action.payload;
    //   case 'PUT_IN_MESSAGE_STORE':
    //     return [ state, action.payload ]
      case 'RESET_STATE':
        return '';

      default:
        return state;
    }
  };

  export const reducerMessageStore = (state = [], action) => { // для state === undefined

    switch (action.type) {

      case 'PUT_IN_MESSAGE_STORE':
        return [...state, action.payload ]

      default:
        return state;
    }
  };