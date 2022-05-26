import './Users.css';
// import { arrUsers } from './ArrUsers';


export const Users = ({ currentUser, updateCurrentUser, addNewUserToStore, allStore, users: currentUsers }) => {

  let userId = -1;

  const users = currentUsers.map((user) => {
    userId++;

    return (
      <div 
        key={userId}
        className={`user ${currentUser === user ? 'active-user' : ''}`} 
        value={user} 
        onClick={(e) => {
          // console.log('user name:', user);
          // console.log('currentUser', currentUser);
          // console.log('allStore', allStore);
          addNewUserToStore(user); 
          return updateCurrentUser(user);
          }}
      >{ user }</div>
    )
  })

  return users;
}