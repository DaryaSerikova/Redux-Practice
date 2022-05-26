import './Users.css';


export const Users = ({ currentUser, updateCurrentUser, addNewUserToStore, users: currentUsers }) => {

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
          return updateCurrentUser(user);
          }}
      >{ user }</div>
    )
  })

  return users;
}