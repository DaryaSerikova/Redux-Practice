import './Users.css';


export const Users = () => {

  const arrUsers = [
    { firstName: 'Jessica', lastName: 'Pearson' },
    { firstName: 'Harvey', lastName: 'Specter' },
    { firstName: 'Mike', lastName: 'Ross' },
    { firstName: 'Richel', lastName: 'Zane' },
    { firstName: 'Donna', lastName: 'Paulsen' },
    { firstName: 'Louis', lastName: 'Litt' },
    { firstName: 'Katrina', lastName: 'Bennett' },
    { firstName: 'Dana', lastName: 'Scott' },
    { firstName: 'Robert', lastName: 'Zane' },
    { firstName: 'Travis', lastName: 'Tanner' },
    { firstName: 'Sheila', lastName: 'Sazs' },
    { firstName: 'Jeff', lastName: 'Malone' },
    { firstName: 'Daniel', lastName: 'Hardman' },
    { firstName: 'Sean', lastName: 'Cahill' },
    { firstName: 'Gretchen', lastName: 'Bodinski' },

  ]

  const cutName = (name) => {
    const firstWord = name.split('')[0] + '.';
    return firstWord;
  }

  const users = arrUsers.map((user) => {
    return <div className='user'>{user.firstName} {user.lastName}</div>
  })

  return users;
}