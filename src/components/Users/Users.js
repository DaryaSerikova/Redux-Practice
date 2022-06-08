import './Users.css';


export const Users = ({ allStore, currentUser, updateCurrentUser, addNewUserToStore, users: currentUsers, updateSearchedMessages }) => {

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