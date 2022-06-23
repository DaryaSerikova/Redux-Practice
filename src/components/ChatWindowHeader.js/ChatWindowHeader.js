import search from '../../assets/icon32.png';
import right from '../../assets/right32.png';
import left from '../../assets/left32.png';
import bin from '../../assets/bin32.png';
import cross from '../../assets/cross-mark32.png';


//currentlySelectedMessages, cancelSelectedMessages, messageState, IconButtonWithStore, toggleMessageSearching, currentUser
//onChangeSearchMessage, replyMessages, removeMessages, forwardMessages, toggleSearching

//не надо:

const ChatWindowHeader = () => {

  return (
    <div className='window-header'>
        
      <div className={`${currentlySelectedMessages.length === 0 ? 'hide' : 'cancel-group'}`}>
        {<IconButtonWithStore src={cross} name='cross' onClick={cancelSelectedMessages}/>}
        <div className={`selected-messages-amount ${messageState !== 'select' ? 'hide' : ''}`}>{currentlySelectedMessages.length}</div>
      </div>
      
      {Boolean(toggleMessageSearching) && 
      <div className={`user-with-avatar`}>
        {/* <div className='avatar'> */}
          {/* <img 
              className={`avatar`}
              alt={`avatar-icon`}
              src={DanielHardman}
            /> */}
          <div className={`no-avatar ${(!currentUser) ? 'hide' : ''} ${!(currentlySelectedMessages.length === 0) && 'hide'}`}></div>
            
        {/* </div> */}


        {/* <div className={`current-user ${!(currentlySelectedMessages.length === 0) && 'hide'}`}> */}
        <div className={`current-user ${!(messageState !== 'select') ? 'hide' : ''}`}>
          {currentUser}
        </div>          
      </div>
      }

      <input 
        type='text' 
        placeholder='Search messsage...' 
        className={`search-message ${toggleMessageSearching} `} 
        onChange={onChangeSearchMessage}
        // value
      />

      <div className={`group-buttons`}>
        <IconButtonWithStore src={left} name='left' onClick={replyMessages}/>
        <IconButtonWithStore src={bin} name='bin' onClick={removeMessages}/>
        <IconButtonWithStore src={right} name='right' onClick={forwardMessages}/>
        <IconButtonWithStore src={search} name='search' onClick={toggleSearching}/>
      </div>
    </div>
  )
}