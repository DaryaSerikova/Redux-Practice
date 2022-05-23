import './Users.css';
import { arrUsers } from './ArrUsers';


export const Users = ({ currentUser, updateCurrentUser, addNewUserToStore, allStore }) => {

  // const cutName = (name) => {
  //   const firstWord = name.split('')[0] + '.';
  //   return firstWord;
  // }

  let userId = -1;

  const users = arrUsers.map((user) => {
    userId++;

    return (
      <>
      <div 
        key={userId}
        className='user' 
        value={user} 
        onClick={(e) => {
          console.log('user name:', user);
          console.log('currentUser', currentUser);
          console.log('allStore', allStore);
          addNewUserToStore(user); //хз работает ли.. проверь
          return updateCurrentUser(user);
          }}
      >{ user }</div>
      </>
    )
  })

  return users;
}