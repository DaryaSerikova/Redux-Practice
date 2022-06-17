import { getCurrentMessageInfo } from "../../utils/getCurrentMessageInfo";
import { getIndex } from "../../utils/getIndex"
import { 
  ADD_NEW_MESSAGE_TO_STORE,
  EDIT_MESSAGE_IN_STORE, 
  REMOVE_MESSAGE_FROM_STORE,
  ADD_NEW_USER_TO_STORE,
  CHOOSE_MESSAGE_IN_STORE,
  REMOVE_GROUP_OF_MESSAGES_FROM_STORE,
  REPLY_ON_MESSAGE_FROM_STORE,
} from "../actions";



let messageId = 0;


const updateMessageStore = (state = [], action) => { // Изменение одного конкретного сообщения  //Переименовать updateMessageInStore
  switch(action.type) {
    case ADD_NEW_MESSAGE_TO_STORE:
      return { 
          id: messageId++, 
          value: action.value, 
          date: action.date,
          time: action.time,
          name: action.name,
          edit: action.edit,
          selected: action.selected ///////
        }
    
    case EDIT_MESSAGE_IN_STORE:
      let array = [...state];
      const newMessage = getCurrentMessageInfo(action.id, array);
      return {
        ...newMessage,
        value: action.value,
        edit: action.edit,
        // selected: selected
      }

    case CHOOSE_MESSAGE_IN_STORE:
      let arr = [...state];
      const newMess = getCurrentMessageInfo(action.id, arr);
      return {
        ...newMess,
        selected: action.selected
      }


    case REPLY_ON_MESSAGE_FROM_STORE:
      return { 
        id: messageId++, 
        value: action.value, 
        date: action.date,
        time: action.time,
        name: action.name,
        edit: action.edit,
        selected: action.selected, ///////
        message: action.message
      }
    
    default:
      return state;
  }
}

export const allStore = (state = {}, action) => { // Полное хранилище с сообщениями
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

        return {
          ...state,
          [action.name]: [
            ...state[action.name].slice(0, index),
            ...state[action.name].slice(index + 1),
          ]
        }
      }

    case REMOVE_GROUP_OF_MESSAGES_FROM_STORE:
      if (state[action.name]) {
        let arrayForwardIds = action.arrayForwardIds;
        console.log('(arrayForwardIds) Выбранные сообщения имеют id:', arrayForwardIds)
        // let arrayPersonalStore = [...state[action.name]];
        // console.log('(arrayPersonalStore) До удаления персональное хранилище сообщений:', arrayPersonalStore)
  
        // // arrayPersonalStore.filter((message) => arrayForwardIds.map((id) => message.id ))
        // let selectedMessages = arrayForwardIds.map((id) => 
        //   arrayPersonalStore.filter((message) => message.id === id)[0] 
        // )
  
        // console.log('(selectedMessages) Выбранные сообщения это:', selectedMessages)
        // // const index = getIndex(action.id, array);
        // console.log('Теперь пройдемся по этому хранилищу циклом и выберем только idшники выбранных сообщений')
        // const indices = selectedMessages.map((message) => getIndex(message.id, arrayPersonalStore));
        // console.log('(indices) Индексы выбранных из хранилища сообщений', indices)
        const resRemoveGroup = arrayForwardIds.map((indx) => { //indices
          return {
            ...state,
            [action.name]: [
              ...state[action.name].slice(0, indx),
              ...state[action.name].slice(indx + 1),
            ]
          }
        })

        return resRemoveGroup;
      }
    

    case REPLY_ON_MESSAGE_FROM_STORE: 
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


    // case FORWARD_GROUP_OF_MESSAGES_FROM_STORE:
    // case REPLY_ON_MESSAGE_FROM_STORE:


    default:
      return state;
  }
}