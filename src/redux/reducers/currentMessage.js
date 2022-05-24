import { 
  UPDATE_TO_NEW_CURRENT_MESSAGE,
} from "../actions";

//Переписать payload


export const currentMessage = (state = '', action) => {
  switch (action.type) {
    case UPDATE_TO_NEW_CURRENT_MESSAGE: //новое текущее сообщение//'current_message/updateToNewCurrentMessage'
      // let newCurrentMessage = action.payload;
      // return {newCurrentMessage} //когда сообщение будет не value а объект с несколько полями
      let newCurrentMessage = action.value;
      return newCurrentMessage 

    default:
      return state;
  }
}