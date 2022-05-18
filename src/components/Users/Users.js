import './Users.css';
import { arrUsers } from './ArrUsers'


export const Users = () => {



  // const cutName = (name) => {
  //   const firstWord = name.split('')[0] + '.';
  //   return firstWord;
  // }

  let userId = -1;

  const users = arrUsers.map((user) => {
    userId++;
    // console.log('userId =', userId);
    return (
      <>
      <div 
        key={userId}
        className='user' 
        name={user} 
        // onClick={()}
      >{ user }</div>
      </>
    )
  })

  return users;
}