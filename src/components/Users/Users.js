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

  const users = currentUsers.map((user) => {
    userId++;


    const onClick = (e) => {
          
      addNewUserToStore(user);
  
      if (messageState === "reply" || (currentlySelectedMessages.length!==0 && messageState === "create")) {
        resetSelectedMessages()
        console.log('(reset onClick another user) before messageStateIsEmpty');
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
    }

    let curLastSentMess = lastSentMessages !== undefined && lastSentMessages !== [] ? 
      lastSentMessages.filter(lastMessage => lastMessage.name === [`${user}`])[0] : '';


    return (
      <div 
        key={userId}
        className={`user ${currentUser === user ? 'active-user' : ''}`} 
        value={user} 
        onClick={onClick}
      >
      { user }
      {/* <div>{lastSentMessages !== undefined && lastSentMessages !== [] ? curLastSentMess.message : ''}</div> */}
      {/* <div>{lastSentMessages[`${user}`].value}</div> */}
      </div>
    )
  })

  return users;
}