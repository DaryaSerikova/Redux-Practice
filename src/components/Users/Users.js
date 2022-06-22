// import { addLastSentMessage } from '../../redux/actions';
// import { messageStateIsEmpty } from '../../redux/actions';
// import { currentlySelectedMessages } from '../../redux/reducers/currentlySelectedMessages';
import './Users.css';


export const Users = ({ 
  allStore, 
  currentUser, 
  updateCurrentUser, 
  addNewUserToStore, 
  users: currentUsers, 
  updateSearchedMessages, 
  hideMessageSearching,
  addLastSentMessage, 
  lastSentMessages,
  messageState,
  messageStateIsEmpty,
  resetSelectedMessages,
  currentlySelectedMessages,
}) => {

  let userId = -1;

  // console.log('(allStore !== undefined) ', (allStore !== undefined) )
  // console.log('(currentUser !== undefined) ', (currentUser !== undefined) )
  // console.log('! allStore', allStore )
  // console.log('! currentUser) ', currentUser )
  // console.log('((allStore !== undefined) && (currentUser !== undefined)) ', ((allStore !== undefined) && (currentUser !== undefined)) )

  // if ((allStore !== undefined) && (currentUser !== undefined) && (currentUser !== '')) {

  //   let lastMessageNumber = allStore[`${currentUser}`].length;
  //   let lastSentMessage = allStore[`${currentUser}`][lastMessageNumber];
  //   addLastSentMessage(currentUser, lastSentMessage)
  // }

  // addLastSentMessage = (name, message)
  

  const users = currentUsers.map((user) => {
    userId++;

    return (
      <div 
        key={userId}
        className={`user ${currentUser === user ? 'active-user' : ''}`} 
        value={user} 
        onClick={(e) => {
          
          addNewUserToStore(user);
          // {console.log('messageState === "reply"', messageState === "reply")}

          // {console.log('currentlySelectedMessages.length!==0', currentlySelectedMessages.length!==0)}
          // {console.log('messageState === "create"', messageState === "create")}
          // {console.log('currentlySelectedMessages.length!==0 && messageState === "create"', currentlySelectedMessages.length!==0 && messageState === "create")}

          // {console.log('messageState === "reply" && (currentlySelectedMessages.length!==0 && messageState === "create")', messageState === "reply" && (currentlySelectedMessages.length!==0 && messageState === "create"))}

          if (messageState === "reply" || (currentlySelectedMessages.length!==0 && messageState === "create")) {

            // reset для выбранных сообщений
            resetSelectedMessages()

            messageStateIsEmpty()
          }
          hideMessageSearching(); //прописать reset у message searching
          console.log(allStore[`${user}`])
          if (allStore[`${user}`] === undefined) {
            updateSearchedMessages([])
          } else {
            updateSearchedMessages(allStore[`${user}`]);
          } 
          return updateCurrentUser(user);
          }}
      >
      { user }
      {/* <div>{lastSentMessages[`${user}`].value}</div> */}
      </div>
    )
  })

  return users;
}