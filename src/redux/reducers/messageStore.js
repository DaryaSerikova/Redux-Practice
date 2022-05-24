import { 
  ADD_NEW_MESSAGE_TO_STORE,
  EDIT_MESSAGE_IN_STORE, // нет action creators
  REMOVE_MESSAGE_FROM_STORE, // нет action creators
  ADD_NEW_USER_TO_STORE
} from "../actions";

//Переписать payload
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

const getCurrentMessageInfo = (id, array) => (
  array.filter((elem) => (elem.id === id))[0]
)

const getIndex = (id, array) => {
  let currentMessageInfo = getCurrentMessageInfo(id, array);
  console.log(id, array)
  console.log('cmi', currentMessageInfo)
  const index = array.indexOf(currentMessageInfo);
  return index;
};

const updateMessageStore = (state = [], action) => { //Переименовать updatePersonalMessageStore
  switch(action.type) {
    case ADD_NEW_MESSAGE_TO_STORE: //'message_store/addNewMessageToStore'
      return { 
          // мб лучше state.current_message???// но тогда важна очередность
          id: messageId++, 
          value: action.value, //value: action.payload
          date: action.date,
          time: action.time,
          name: action.name
        }
    
    case EDIT_MESSAGE_IN_STORE:
      let array = [...state];
      const newMessage = getCurrentMessageInfo(action.id, array);
      // newMessage.value = action.value;
      return {
        ...newMessage,
        value: action.value,
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

    // case REMOVE_USER_FROM_STORE:
    //   //

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
        console.log(index)
        // const messInfo = getCurrentMessageInfo(action.id, array);
        // messInfo.value = action.value
        // array[index] = updateMessageStore(state[action.name], action)
        return {
          ...state,
          // [action.name]: [...array]
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