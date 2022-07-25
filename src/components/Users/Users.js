import './Users.css';
import { getTruncatedValue } from '../../utils/getTruncatedValue';


export const Users = ({ 
  allStore, 
  currentUser, 
  updateCurrentUser, 
  addNewUserToStore, 
  users: currentUsers, 
  updateSearchedMessages, 
  hideMessageSearching,
  // addLastSentMessage, 
  lastSentMessages,
  messageState,
  messageStateIsEmpty,
  resetSelectedMessages,
  currentlySelectedMessages,
  mobileStateIsMessages,
}) => {

  let userId = -1;
  let screenWidth = document.body.clientWidth;

  const users = currentUsers.map((elem) => {
    let user = elem.name;
    userId++;


    const onClick = (e) => {

      if (screenWidth <= 900) mobileStateIsMessages();
      addNewUserToStore(user);
      updateCurrentUser(user);
      if (messageState === "reply" || (currentlySelectedMessages.length!==0 && messageState === "create")) { // ПОЧЕМУ нет Forward
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


    // let activeLastSentMess = lastSentMessages[`${currentUser}`] === undefined ? '' : lastSentMessages[`${currentUser}`].message;
    let curLastSentMessIsExist = lastSentMessages === undefined ? false : lastSentMessages.hasOwnProperty(`${user}`)
    let curLastSentMess = curLastSentMessIsExist ? lastSentMessages[`${user}`].message : '';

    // let cutCurLastSentMess = curLastSentMess !== '' ? getTruncatedValue(lastSentMessages[`${user}`].message, 16) : '';
    // if (currentUser === user) console.log(user, ': ', curLastSentMess, 'cutCurLastSentMess:', cutCurLastSentMess)


    // let curUserForSentMess = currentUser === undefined ? '' : currentUser;
// getTruncatedValue = (value, amountLetters)

    return (
      <>
        <div 
          className={`user-with-message-avatar ${currentUser === user ? 'active-user' : ''}`}
          key={userId}
          value={user} 
          onClick={onClick}>
          <div className='no-avatar avatar avatar-with-message'>
            {/* <img src="https://irecommend.ru/sites/default/files/imagecache/copyright1/user-images/259599/sv5R3MPpVZrbX667ZwqahA.jpg" */}
            {/* <img src="https://n1s1.elle.ru/34/20/76/342076c079aebca997ab97b749bd9c36/1024x683_0xac120002_6517619711548840543.jpg" */}
            <img src={elem.src}
            
            />
          </div>
          <div className='user-with-message'>
            <div className='user'>
              { user }
            </div>
            {<div className='user-message'>{(curLastSentMessIsExist) ? curLastSentMess : ''}</div>}

          </div>

        </div>
      </>
    )
  })

  return users;
}