import './Users.css';
import { arrUsers } from './ArrUsers'


export const Users = () => {



  const cutName = (name) => {
    const firstWord = name.split('')[0] + '.';
    return firstWord;
  }

  const users = arrUsers.map((user) => {
    // return <div className='user'>{user.firstName} {user.lastName}</div>
    return <div className='user'>{ user }</div>
  })

  return users;
}