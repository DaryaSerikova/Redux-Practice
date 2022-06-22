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

    return (
      <div 
        key={userId}
        className={`user ${currentUser === user ? 'active-user' : ''}`} 
        value={user} 
        onClick={onClick}
      >
      { user }
      {/* <div>{lastSentMessages[`${user}`].value}</div> */}
      </div>
    )
  })

  return users;
}