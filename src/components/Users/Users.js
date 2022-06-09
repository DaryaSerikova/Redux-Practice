import './Users.css';


export const Users = ({ allStore, currentUser, updateCurrentUser, addNewUserToStore, users: currentUsers, updateSearchedMessages, hideMessageSearching }) => {

  let userId = -1;

  const users = currentUsers.map((user) => {
    userId++;

    return (
      <div 
        key={userId}
        className={`user ${currentUser === user ? 'active-user' : ''}`} 
        value={user} 
        onClick={(e) => {
          addNewUserToStore(user);
          hideMessageSearching(); //прописать reset у message searching
          console.log(allStore[`${user}`])
          if (allStore[`${user}`] === undefined) {
            updateSearchedMessages([])
          } else {
            updateSearchedMessages(allStore[`${user}`]);
          } 
          return updateCurrentUser(user);
          }}
      >{ user }</div>
    )
  })

  return users;
}