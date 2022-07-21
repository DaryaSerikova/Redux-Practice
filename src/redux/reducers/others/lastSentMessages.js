import { 
  ADD_LAST_SENT_MESSAGE,

} from "../../actions/actions";



export const lastSentMessages = (state = {}, action) => { //state = {}
  switch (action.type) {
    case ADD_LAST_SENT_MESSAGE:
      return {
        ...state,
        [`${action.name}`]:{
          name: action.name,
          message: action.message,
        }
      }
      // return [
      //   ...state,
      //   {
      //     message:action.message,
      //     name: action.name,
      //   }
      // ]

      
    // case CHANGE_LAST_SENT_MESSAGE:

    //   return {
    //     ...state,
    //     [`${action.name}`]:{
    //       name: action.name,
    //       message: action.message,
    //     }
    //   }

    // case REMOVE_LAST_SENT_MESSAGE:

    default:
      return state;
  }
}