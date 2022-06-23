import { getCorrectFormOfWord } from "../../utils/getCorrectFormOfWord";
import { getTruncatedValue } from "../../utils/getTruncatedValue";

// messageState, currentlySelectedMessages, 
// уже не надо: truncatedValue, correctFormOfWord, getCorrectFormOfWord, getTruncatedValue, 
const MiniMessage = ({messageState, currentlySelectedMessages}) => {

  let truncatedValue = !(messageState === 'reply') 
  ? '' 
  : !(Boolean(currentlySelectedMessages[0])&&currentlySelectedMessages[0]!=={}) 
    ? ''
    : !(currentlySelectedMessages[0].value.length > 25)
      ? currentlySelectedMessages[0].value
      : getTruncatedValue(currentlySelectedMessages[0].value)

  let correctFormOfWord = getCorrectFormOfWord(currentlySelectedMessages);

  return (
    <>
      <div className={`mini-reply-or-forwarded-messages ${messageState === 'reply' ? '' : "hide"}`}>
        <div className='message-with-vertical-line'>
          <div className='vertical-line'></div>
          <div className='reply-message'>

          <div className='message-info'>
            <div className='message-sender'>Darya Serikova</div>
          </div>
            {truncatedValue}
          {/* {!(Boolean(currentlySelectedMessages[0])&&currentlySelectedMessages[0]!=={}) 
            ? ''
            : (currentlySelectedMessages[0].value)  }  */}

          </div>
        </div>
      </div>


      <div className={`mini-reply-or-forwarded-messages ${messageState === 'forward' ? '' : "hide"}`}>
        <div className='forwarded-messages-info'>
          <div className='forwarded-messages-item-is-amount'>{currentlySelectedMessages.length}</div>
          <div className='forwarded-messages-item-is-message'>
          
          {/* сообщений */}
          {correctFormOfWord}
          </div>
        </div>
      </div>
    </>
  )
}

export default MiniMessage;